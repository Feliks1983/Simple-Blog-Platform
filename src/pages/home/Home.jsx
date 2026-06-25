import PageContainer from "../PageContainer/PageContainer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-baner">
        <div className="home-list">
          <span className="home-title_text">Realworld Blog</span>
          <p className="home-text">A place to share your knowledge.</p>
        </div>
      </div>
      <PageContainer />
    </>
  );
}
