import axios from "axios";

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import prevarrow from "../SVG/prevarrow.svg";
import nextarrow from "../SVG/nextarrow.svg";
import { Link } from "react-router-dom";
import SliderKaz from "../Slider";
function ExVisionCard() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://admin.history-state.kz/api/v1/expert-opinion-list/"
        );
        //  // Add this line
        setNewsData(response.data.data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Стейт для хранения поискового запроса
  const [searchTerm, setSearchTerm] = useState("");

  // Стейт для хранения отфильтрованных данных экспертного мнения по поисковому запросу
  const [filteredNewsData, setFilteredNewsData] = useState([]);

  // Эффект, который выполняется при изменении поискового запроса или данных экспертного мнения
  useEffect(() => {
    // Фильтрация данных экспертного мнения на основе поискового запроса
    const filtered = newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Установка отфильтрованных данных и сброс текущей страницы на первую
    setFilteredNewsData(filtered);
    setCurrentPage(1);
  }, [searchTerm, newsData]);
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl   px-4 py-2">
      <div className="flex flex-wrap gap-2">
        <div className="text-lg text-[#333333]">Главная</div>
        <div className="text-lg font-bold text-[#8d8d8d]">&#62;</div>
        <div className="text-lg text-[#8d8d8d]">Экспертное мнение</div>
      </div>
      <h1 className="mb-4 mt-4 text-zinc-800 text-[28px] font-semibold font-['Source Serif Pro']">
        Экспертное мнение
      </h1>
      <SliderKaz />
      <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4 mb-6"></div>
      <div className="my-4 relative">
        <input
          type="text"
          placeholder="Найти ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full p-4 pl-10 pr-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
        {searchTerm && (
          <button
            className="text-gray-500 absolute right-12 top-4 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            onClick={() => setSearchTerm("")}
            aria-label="Clear"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
        <button
          type="submit"
          className="text-gray-500 absolute right-4 top-4 focus:ring-4 focus:outline-none focus:ring-blue-300"
          aria-label="Search"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
      <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
          {filteredNewsData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          ).map((newsItem, index) => (
            <Link key={index} to={newsItem.link}>
              <NewsItem
                title={newsItem.title}
                date={newsItem.date}
                imageSrc={newsItem.logo}
                description={newsItem.description}
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
          src={`http://admin.history-state.kz${imageSrc}`}
          alt=""
        />
        <div className="pl-2">
          <h5 className="md:text-left text-base font-normal tracking-tight text-gray-900 overflow-hidden line-clamp-1">
            {title}
          </h5>
          <p className="mt-2 line-clamp-2 text-sm whitespace-nowrap  ">
            {date}
          </p>
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
