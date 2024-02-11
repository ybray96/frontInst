import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function ResearchCard() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data } = await axios.get(
          `https://admin.history-state.kz/api/v1/foundation-study-list/${id}/`,
          {
            withCredentials: true,
          }
        );
        console.log("Article Data:", data);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div className="px-4 flex flex-col mx-auto max-w-screen-xl font-nunito">
      <div className="w-full">
        <div className="flex flex-col md:w-full">
          {article && (
            <div className="p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(article.full_text),
                }}
                className="text-lg"
              />
            </div>
          )}
          {article && article.related_articles && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Related Articles:</h3>
              <ul>
                {article.related_articles.map((relatedArticle) => (
                  <li key={relatedArticle.id}>
                    <Link to={`/ru/research/${relatedArticle.id}`}>
                      {relatedArticle.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link to="/ru/studies" className="mt-4">
            <span className="text-blue-600 underline hover:text-purple-700">
              Вернуться назад
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchCard;
