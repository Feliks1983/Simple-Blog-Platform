import profile from "../../../public/assets/icons/person.svg";
import { useAuth } from "../../hooks/useAuth";

export default function BannerUserInfo({ article }) {
  const { user } = useAuth();
  const newUser = article?.author || user;

  return (
    <div className="header-profile">
      <div className="header-frame">
        <img
          className="header-avatar"
          src={newUser?.image || profile}
          alt="profile"
        />
        <div className="header-text">
          <span>{newUser?.username || "eni9mu5"}</span>
        </div>
        <div className="header-button">
          <button>
            <img
              src="../../../public/assets/icons/favorite.svg"
              alt="favorite"
            />
            <span>{newUser?.bio || "Text"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
