import { Link } from "react-router-dom";
import PageContainer from "../PageContainer/PageContainer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-baner">
        <div className="home-list">
          <Link className="home-title_text" to="articles/:slug">
            Realworld Blog
          </Link>
          <p className="home-text">A place to share your knowledge.</p>
        </div>
      </div>
        <PageContainer />
    </>
  );
}
