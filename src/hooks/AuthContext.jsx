import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
const api = "https://realworld.habsida.net/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const saveUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const login = async ({ email, password }) => {
    const res = await fetch(`${api}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: { email, password } }),
    });
    const result = await res.json();
    console.log("Server response:", result);

    if (!res.ok) {
      throw {
        errors: result.errors || { root: ["login failed"] },
      };
    }
    const userData = result.user;
    saveUser(userData);
    return userData;
  };

  const register = async ({ username, email, password }) => {
    const res = await fetch(`${api}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: { username, email, password },
      }),
    });
    const result = await res.json();
    console.log("Register response:", result);
    if (!res.ok) {
      throw {
        errors: result.errors || { root: ["registration failed"] },
      };
    }
    const userData = result.user;
    saveUser(userData);
    return userData;
  };

  const updateUser = async (data) => {
    if (!user?.token) throw { errors: { root: "not authorized" } };

    const payload = { ...data };
    if (!payload.password) delete payload.password;

    const res = await fetch(`${api}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${user.token}`,
      },
      body: JSON.stringify({ user: payload }),
    });
    const result = await res.json();
    if (!res.ok) {
      throw {
        errors: result.errors || { root: ["update failed"] },
      };
    }
    saveUser(result.user);
    return result.user;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    updateUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthProvider");
  return ctx;
}
