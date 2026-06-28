import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import edit from "../../public/assets/icons/edit.svg";
import setting from "../../public/assets/icons/settings.svg";
import person from "../../public/assets/icons/person.svg";

export default function Header() {
    const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <header className="header">
      <nav className="header-navbar">
        <div className="header-page_reaworld-blog">
          <Link to="articles/:slug">
            <h1>Realworld Blog</h1>
          </Link>
        </div>
        <div className="header-page">
          <Link className="header-home" to="/">
            Home
          </Link>
          <button className="header-button_icon">
            <img className="header-icon" src={edit} alt="edit" />
          </button>
          <Link className="header-new_post" to="/new-post">
            <span>New Post</span>
          </Link>
          <button className="header-button_icon">
            <img className="header-icon" src={setting} alt="favorite" />
          </button>
          <Link className="header-setting" to="/setting">
            Setting
          </Link>
          <button className="header-button_icon">
            <img
              className="header-icon"
              src={userInfo?.img || person}
              alt="person"
            />
          </button>
          <Link className="header-user" to="/profile">
            {userInfo?.username || 'eni9mu5'}
          </Link>
        </div>
        <div className="sign" style={{ display: "none" }}>
          <Link className="header-user" to="/sign-in">
            Sign in
          </Link>
          <Link className="header-user" to="/sign-up">
            Sign up
          </Link>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
