import BannerDefault from "../../component/banner/BannerDefault";
import PageContainer from "../page-container/PageContainer";
import "./Home.css";
import Sidbar from "../../component/Sidbar";

export default function Home() {
  return (
    <div className="home-page">
      <BannerDefault />
      <div className="page-container">
        <Sidbar />
      </div>
      <PageContainer />
    </div>
  );
}
