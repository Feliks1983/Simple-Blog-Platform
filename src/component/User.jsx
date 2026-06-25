import { Link } from "react-router-dom";
import person from "../../public/assets/icons/person.svg";

export default function User({user}) {
  return (
    <div className="user-info">
      <div className="user-icon">
        <img src={user.author?.image || person} alt="person" />
      </div>
      <div className="user-name">
        <Link className="header-user" to="/profile">
          <span className="name">Name Famaly</span>
        </Link>
        <span className="data">data</span>
      </div>
    </div>
  );
}
