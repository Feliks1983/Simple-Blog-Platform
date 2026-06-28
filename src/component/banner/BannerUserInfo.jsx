import { useSelector } from "react-redux";

export default function BannerUserInfo() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const profile = "/assets/icons/profile.png";
  return (
    <div className="header-profile">
      <div className="header-frame">
        <img src={userInfo?.img || profile} alt="profile" />
        <span className="header-text">{userInfo?.username || "eni9mu5"}</span>
        <div className="header-button">
          <button>
            <img
              src="../../../public/assets/icons/favorite.svg"
              alt="favorite"
            />
            <span>{userInfo?.comment || "Text"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
