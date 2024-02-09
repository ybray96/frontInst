import exicon from "../../../components/images/Rectangle 141.png";

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import prevarrow from "../components/SVG/prevarrow.svg";
import nextarrow from "../components/SVG/nextarrow.svg";
import { Link } from "react-router-dom";

import axios from "axios";
import DOMPurify from "dompurify";
import SliderKaz from "../SliderKaz";
function ExVisionCard() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/expert-opinion-list/"
        );
         // Add this line
        setNewsData(response.data.data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl   px-4 py-2">
      <div className="flex flex-wrap gap-2">
        <div className="text-lg text-[#333333]">Басты</div>
        <div className="text-lg font-bold text-[#8d8d8d]">&#62;</div>
        <div className="text-lg text-[#8d8d8d]">Сарапшы ұстанымы</div>
      </div>
      <h1 className="mb-4 mt-4 text-zinc-800 text-[28px] font-semibold font-['Source Serif Pro']">
      Сарапшы ұстанымы
      </h1>
    <SliderKaz/>
      <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4 mb-6"></div>
      <div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
          {newsData.map((newsItem, index) => (
            <Link key={index} to={newsItem.link}>
              <NewsItem
                title={newsItem.title_kk}
                date={newsItem.date}
                imageSrc={newsItem.logo}
                description={newsItem.description_kk}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {[...Array(Math.ceil(newsData.length / itemsPerPage)).keys()].map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber + 1)}
                className={`px-4 py-2 mx-1 border rounded ${
                  currentPage === pageNumber + 1
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {pageNumber + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function NewsItem({ title, description, imageSrc, date }) {
 

  return (
    <div className="w-full xl:flex lg:flex-col bg-white border border-gray-200 hover:scale-105 hover:transition-transform rounded-lg">
    <div className="p-5 flex items-center">
      <img
        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
        src={`http://127.0.0.1:8000${imageSrc}`}
        alt=""
      />
      <div className="pl-2">
        <h5 className="md:text-left text-base font-normal tracking-tight text-gray-900 overflow-hidden line-clamp-1">
          {title}
        </h5>
        <p className="mt-2 line-clamp-2 text-sm whitespace-nowrap  ">{date}</p>
      </div>
    </div>
    <div className="flex-grow">
      <p
        className="mb-3 font-normal text-gray-700 line-clamp-2 px-5"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  </div>
  );
}
export default ExVisionCard;
