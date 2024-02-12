import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";

function ResearchCardEn() {
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
          `http://admin.history-state.kz/api/v1/foundation-study-list/${id}/`,
          {
            withCredentials: true,
          }
        );
        console.log("Article Data:", data);

        data.full_text_en = replaceMediaUrl(data.full_text_en);
        setArticle(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticle();
  }, [id]);
  const replaceMediaUrl = (htmlContent) => {
    // Replace '/media/' with the dynamic media URL from the backend
    return htmlContent.replace(/\/media\//g, (match) => {
      // Replace this with the actual media URL from the backend
      return `https://institut.hello-olzhas.kz${match}`;
    });
  };

  return (
    <div className="px-4 flex flex-col mx-auto max-w-screen-xl font-nunito">
      <div className="w-full">
        <div className="flex flex-col md:w-full">
          {article && (
            <div className="p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">{article.title_en}</h2>
              <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.full_text_en),
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
                    <Link to={`/en/research/${relatedArticle.id}`}>
                      {relatedArticle.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link to="/en/studies" className="mt-4">
            <span className="text-blue-600 underline hover:text-purple-700">
              Go back
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchCardEn;
