import { Link } from "react-router-dom";
import "./pagecomponent/PageComponent.jsx";
import person from "../../../public/assets/icons/person.svg";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  onetextH2,
  onetextP,
  sourceH2,
  textP,
  freetextH2,
  freetextP,
} from "./pagecomponent/text.js";
import "./PageContainer.css";
import { useState, useEffect } from "react";

let page = 3;
const apiUser = `https://api.realworld.habsida.net/api/articles?page=${page}&limit=3`;

export default function PageContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(setError);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(apiUser);
        const data = await response.json();
        setUsers(data.apiUser);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="page">
      <div className="page-container">
        <div className="page-popular_tags">
          <span>Popular tags</span>
        </div>
        <div className="page-component_list">
          <button className="page-component_item">
            <span className="page-component_item-one">one</span>
          </button>
          <button className="page-component_item">
            <span className="page-component_item-something">something</span>
          </button>
          <button className="page-component_item">
            <span className="page-component_item-chinese">chinese</span>
          </button>
          <button className="page-component_item">
            <span className="page-component_item-english">english</span>
          </button>
          <button className="page-component_item">
            <span className="page-component_item-frensh">frensh</span>
          </button>
        </div>
      </div>
      {error && (
        <div className="error-message" style={{ color: "red", margin: "20px" }}>
          {error}
        </div>
      )}
      {loading ? (
        <div className="load">
          <img src="../../../public/assets/icons/refresh.svg" alt="" />
          <span>Loading</span>
        </div>
      ) : (
        <>
          <div className="page-component">
            <div className="page-heading">
              <div className="user-info">
                <div className="user-icon">
                  <img src={person} alt="person" />
                </div>
                <div className="user-name">
                  <Link className="header-user" to="/profile">
                    <span className="name">Name Famaly</span>
                  </Link>
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
                  <Link className="header-user" to="/profile">
                    <span className="name">Name Famaly</span>
                  </Link>
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
                  <Link className="header-user" to="/profile">
                    <span className="name">Name Famaly</span>
                  </Link>
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
      )}
      <ul className="pagination">
        <li>
          <a className="active" href="#">
            1
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">6</a>
        </li>
        <li>
          <a href="#">7</a>
        </li>
      </ul>
    </div>
  );
}
