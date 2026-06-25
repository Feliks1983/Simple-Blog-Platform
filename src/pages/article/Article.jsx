import "./Article.css";
import person from "../../../public/assets/icons/person.svg";
import Markdown from "react-markdown";

const articleText = `
If we quantify the alarm, we can get to the FTP pixel through the
online SSL interface!
`;

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
        <div className="article-wrapper">
          <div className="article-text">
            <div className="article-text_p">
              <Markdown>{articleText}</Markdown>
            </div>
            <div className="user-info_baner">
              <div className="user-icon_baner">
                <img src={person} alt="person" />
              </div>
              <div className="user-name_baner">
                <span className="name_baner">Name Famaly</span>
                <span className="data-baner">data</span>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}
