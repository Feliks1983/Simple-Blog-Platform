import { Link } from "react-router-dom";
import './User.css'
import person from "../../../public/assets/icons/person.svg";

export default function User({ users }) {
  return (
    <div className="user-info">
      <div className="user-icon">
        <img src={users?.author?.image || person} alt="person" />
      </div>
      <div className="user-name">
        <Link className="header-user" to="/profile/:username">
          <span className="name">{users?.author?.username}</span>
        </Link>
        <span className="data">data</span>
      </div>
    </div>
  );
}
