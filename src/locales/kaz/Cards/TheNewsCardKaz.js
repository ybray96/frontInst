import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useAddControlsAttribute } from "../../../components/customhooks/addControlsAttribute";

function TheNewsCardKaz() {
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
          `https://admin.history-state.kz/api/v1/news-list/${id}/`,
          {
            withCredentials: true,
          }
        );

        // Replace '/media/' with the dynamic media URL from the backend
        const mediaUrl = "https://admin.history-state.kz/media/"; // Replace with your actual media URL
        data.full_text = data.full_text_kk.replace(/\/media\//g, (match) => {
          return mediaUrl + match.replace("/media/", "");
        });

        setArticle(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticle();
  }, [id]);

  // Use the custom hook to add "controls" attribute to video elements
  const sanitizedFullText = useAddControlsAttribute(article.full_text);

  return (
    <div className="px-4 flex flex-col mx-auto max-w-screen-xl font-nunito">
      <div className="w-full">
        <div className="flex flex-col md:w-full">
          {article && (
            <div className="p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">{article.title_kk}</h2>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="mb-4 w-96 h-52 object-cover"
                />
              )}
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizedFullText,
                }}
                className="text-lg"
              />
            </div>
          )}

          <Link to="/newsblock" className="mt-4">
            <span className="text-blue-600 underline hover:text-purple-700">
              Қайту
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TheNewsCardKaz;
