import { useEffect, useState } from "react";
import { getTopics } from "./utils/api";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ topics, setTopics }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [areButtonsHidden, setAreButtonsHidden] = useState(true);

  useEffect(() => {
    getTopics()
      .then((data) => {
        setTopics(data);
      })
      .then(() => {
        setIsLoading(false);
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [topics, setTopics]);

  function menuToggle() {
    setAreButtonsHidden((prevValue) => !prevValue);
  }

  return !isLoading ? (
    <div className={`nav-bar ${isMobile ? "mobile-view" : ""}`}>
      <div className="mobile-menu-icon" onClick={menuToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="white" fillRule="evenodd" d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535ZM18.75 16a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75ZM18 12.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5h12ZM18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
        </svg>
      </div>
      {!isMobile && (
        <>
          <Link className="link" to={`/articles`}>
            <button className={`topic-btn`} id={`${location.pathname === "/articles" ? "active" : ""}`}>
              All articles
            </button>
          </Link>
          {topics.map((topic) => (
            <Link className="link" to={`/articles/topics/${topic.slug}`} key={topic.slug}>
              <button className="topic-btn" id={`${location.pathname === `/articles/topics/${topic.slug}` ? "active" : ""}`}>
                <p>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</p>
              </button>
            </Link>
          ))}
        </>
      )}
      {isMobile && (
        <div className={`mobile-buttons ${areButtonsHidden ? "hidden" : ""}`}>
          <Link className="link" to={`/articles`}>
            <button className={`topic-btn`} id={`${location.pathname === "/articles" ? "active" : ""}`}>
              All articles
            </button>
          </Link>
          {topics.map((topic) => (
            <Link className="link" to={`/articles/topics/${topic.slug}`} key={topic.slug}>
              <button className="topic-btn" id={`${location.pathname === `/articles/topics/${topic.slug}` ? "active" : ""}`}>
                <p>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</p>
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  ) : (
    <p>No data</p>
  );
}
