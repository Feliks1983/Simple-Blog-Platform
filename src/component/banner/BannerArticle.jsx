import person from "../../../public/assets/icons/person.svg";
import Markdown from "react-markdown";

const articleText = `
If we quantify the alarm, we can get to the FTP pixel through the
online SSL interface!
`;

export default function BannerArticle() {
  return (
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
  );
}
