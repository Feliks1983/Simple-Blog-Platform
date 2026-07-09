import { Link, Outlet } from "react-router-dom";
import "./Header.css";
import edit from "../../public/assets/icons/edit.svg";
import setting from "../../public/assets/icons/settings.svg";
import person from "../../public/assets/icons/person.svg";
import { useAuth } from "../hooks/AuthContext";

export default function Header() {
  const { isAuthenticated, user, logout, loading } = useAuth();

  if (loading) return null;

  return (
    <header className="header">
      <nav className="header-navbar">
        <div className="header-page_reaworld-blog">
          <h1>Realworld Blog</h1>
        </div>

        {isAuthenticated ? (
          <div className="header-page">
            <div className="header-list">
              <Link className="header-link" to="/">
                Home
              </Link>
            </div>
            <div className="header-list">
              <button className="header-button_icon">
                <img className="header-icon" src={edit} alt="edit" />
              </button>
              <Link className="header-link" to="/new-post">
                <span>New Post</span>
              </Link>
            </div>
            <div className="header-list">
              <button className="header-button_icon">
                <img className="header-icon" src={setting} alt="favorite" />
              </button>
              <Link className="header-link" to="/setting">
                Setting
              </Link>
            </div>
            <div className="header-list">
              <button className="header-button_icon">
                <img className="header-icon" src={person} alt="person" />
              </button>
              <Link className="header-link" to={`/profile/${user.username}`}>
                {user.username}
              </Link>
            </div>
          </div>
        ) : (
          <div className="sign">
            <Link to="/sign-in">Sign in</Link>
            <Link to="/sign-up">Sign up</Link>
          </div>
        )}
      </nav>
      <Outlet />
    </header>
  );
}
