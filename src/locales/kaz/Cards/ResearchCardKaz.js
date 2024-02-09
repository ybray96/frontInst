import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselimg from "../../../components/images/pseudo.png";
import React, { useState, useEffect } from "react";

function ResearchCardKaz() {
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
          `http://127.0.0.1:8000/api/v1/foundation-study-list/${id}/`,
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
  const mediaUrl = "http://127.0.0.1:8000/media/";

  // Assuming htmlContent is the HTML content and mediaUrl is the variable containing the replacement URL
  const sanitizedHtmlContent = article.full_text_kk
    ? DOMPurify.sanitize(article.full_text_kk.replace("/media/", mediaUrl))
    : "";

  return (
    <div className="px-4 flex flex-col mx-auto max-w-screen-xl font-nunito">
      <div className="w-full">
        <div className="flex flex-col md:w-full">
          {article && (
            <div className="p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">{article.title_kk}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizedHtmlContent,
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
                    <Link to={`/research/${relatedArticle.id}`}>
                      {relatedArticle.title_kk}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link to="/studies" className="mt-4">
            <span className="text-blue-600 underline hover:text-purple-700">
              Артқа қайту
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchCardKaz;
