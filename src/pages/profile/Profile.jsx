import PageContainer from "../PageContainer/PageContainer";
import "./Profile.css";
import BannerUserInfo from "../../component/banner/BannerUserInfo";

export default function Profile() {
  return (
    <>
      <BannerUserInfo />
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
