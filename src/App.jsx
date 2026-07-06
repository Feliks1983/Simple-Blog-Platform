import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import React, { useEffect } from "react";
import Header from "./loyouts/Header";
import { AuthProvider } from "./hooks/AuthContext";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <div className="main">
            <Router />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
