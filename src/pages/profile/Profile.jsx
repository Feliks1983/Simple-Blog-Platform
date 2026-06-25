import PageContainer from "../PageContainer/PageContainer";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <div className="header-profile">
        <div className="header-frame">
          <img src="/assets/icons/profile.png" alt="profile" />
          <span className="header-text">eni9mu5</span>
          <div className="header-button">
            <button>
              <img
                src="../../../public/assets/icons/favorite.svg"
                alt="favorite"
              />
              <span>Text</span>
            </button>
          </div>
        </div>
      </div>
      <div className="main-profile">
        <div className="main-profile_tabs">
          <button className="main-profile_text active">Your Feed</button>
          <button className="main-profile_text isactive">Your Feed</button>
        </div>
      </div>
      <PageContainer />
    </>
  );
}
