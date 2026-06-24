import "./PageComponent.css";
import person from "../../../../public/assets/icons/person.svg";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  onetextH2,
  onetextP,
  sourceH2,
  textP,
  freetextH2,
  freetextP,
} from "./text.js";

export default function PageComponent() {
  return (
    <>
      <div className="page-component">
        <div className="page-heading">
          <div className="user-info">
            <div className="user-icon">
              <img src={person} alt="person" />
            </div>
            <div className="user-name">
              <span className="name"></span>
              <span className="data">data</span>
            </div>
          </div>
          <button className="button-likes">
            <img
              className="favorite"
              src="../../../public/assets/icons/favorite.svg"
              alt="favorite"
            />
            <span>0</span>
          </button>
        </div>
        <div className="page-content">
          <div className="page-content_text-semibold">
            <MarkdownPreview source={onetextH2} />
          </div>
          <div className="page-content_regular">
            <MarkdownPreview source={onetextP} />
          </div>
          <div className="page-tags">
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
          </div>
        </div>
      </div>
      <div className="page-component">
        <div className="page-heading">
          <div className="user-info">
            <div className="user-icon">
              <img src={person} alt="person" />
            </div>
            <div className="user-name">
              <span className="name">Name Famaly</span>
              <span className="data">data</span>
            </div>
          </div>
          <button className="button-likes">
            <img
              className="favorite"
              src="../../../public/assets/icons/favorite.svg"
              alt="favorite"
            />
            <span>0</span>
          </button>
        </div>
        <div className="page-content">
          <div className="page-content_text-semibold">
            <MarkdownPreview source={sourceH2} />
          </div>
          <div className="page-content_regular">
            <MarkdownPreview source={textP} />
          </div>
          <div className="page-tags">
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
          </div>
        </div>
      </div>
      <div className="page-component">
        <div className="page-heading">
          <div className="user-info">
            <div className="user-icon">
              <img src={person} alt="person" />
            </div>
            <div className="user-name">
              <span className="name">Name Famaly</span>
              <span className="data">data</span>
            </div>
          </div>
          <button className="button-likes">
            <img
              className="favorite"
              src="../../../public/assets/icons/favorite.svg"
              alt="favorite"
            />
            <span>0</span>
          </button>
        </div>
        <div className="page-content">
          <div className="page-content_text-semibold">
            <MarkdownPreview source={freetextH2} />
          </div>
          <div className="page-content_regular">
            <MarkdownPreview source={freetextP} />
          </div>
          <div className="page-tags">
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
            <div className="page-tag">
              <button>teg</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
