import "./Article.css";
import Markdown from "react-markdown";
import person from "../../../public/assets/icons/person.svg";
import BannerArticle from "../../component/banner/BannerArticle";



const articlePageText = `
Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut
cupiditate est facere omnis possimus. Tenetur similique nemo illo
soluta molestias facere quo. Ipsam totam facilis delectus nihil
quidem soluta vel est omnis.
`;

export default function Article() {
  return (
    <div className="article-page">
      <div className="article-baner">
        <BannerArticle />
        <div className="article-page_container">
          <div className="article-page_text">
            <Markdown>{articlePageText}</Markdown>
          </div>
          <div className="article-page_tags">
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
            <div className="article-page_tag">
              <button>teg</button>
            </div>
          </div>
          <div className="info">
            <div className="user-info">
              <div className="user-icon">
                <img src={person} alt="person" />
              </div>
              <div className="user-name">
                <span className="name">Name Family</span>
                <span className="data">data</span>
              </div>
            </div>
            <div className="button-container">
              <button className="button-text">Favorite article</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
