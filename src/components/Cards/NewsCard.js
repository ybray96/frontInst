import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselimg from "../images/pseudo.png";
import { Link } from "react-router-dom";
import newsiconbg1 from "../SVG/newsiconbg1.svg";
import newsiconbg2 from "../SVG/newsiconbg2.svg";
import newsiconbg3 from "../SVG/newsiconbg3.svg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
function NewsCard() {
  // Состояния для поискового запроса, новостей, фильтрованных новостей и текущей страницы
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  // Дополнительные состояния для управления выбранной новостью и недавними новостями
  const [selectedId, setSelectedId] = useState(null);
  const [recentNews, setRecentNews] = useState([]);

  // Конфигурация для отзывчивого карусельного компонента
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const NewsItem = ({ title, date, imageSrc, link, onClick }) => (
    <Link
      to={link}
      onClick={onClick}
      className="rounded-xl w-full xl:flex lg:flex-col bg-white border border-gray-200 relative hover:underline transition duration-300 ease-in-out hover:bg-[#dcd9d9]"
    >
      <img
        className="h-44 w-full rounded-t-xl object-fill"
        src={imageSrc}
        alt=""
      />
      <div className="relative p-5">
        <h5 className="lg:text-lg text-md font-semibold tracking-tight text-gray-900 md:h-16 lg:h-24">
          {title}
        </h5>
        <div className=" mb-2 absolute -top-14 h-[56px]   px-1 w-[78px] right-14 bg-stone-800">
          <p className=" font-normal text-white  whitespace-pre-line text-sm text-left   mt-2 px-1">
            {date}
          </p>
        </div>
        <div className="mb-2 absolute -top-14 w-[59px] h-[56px] right-0 bg-[#2C4FA4] hover:bg-black transition duration-500 ease-in-out flex items-center justify-center">
          <p className="font-normal text-white lg:text-4xl text-2xl">→</p>
        </div>
      </div>
    </Link>
  );

  const NewsItemRecent = ({ title, date, imageSrc, link, onClick }) => (
    <Link
      to={link}
      onClick={onClick}
      className="rounded-xl w-full xl:flex lg:flex-col bg-white border border-gray-200 relative hover:underline transition duration-300 ease-in-out hover:bg-[#dcd9d9]"
    >
      <img
        className="h-44 w-full rounded-t-xl object-fill"
        src={imageSrc}
        alt=""
      />
      <div className="relative p-5">
        <h5 className="lg:text-lg text-md font-semibold tracking-tight text-gray-900 md:h-16 lg:h-24">
          {title}
        </h5>
        <div className=" mb-2 absolute -top-14 h-[56px]   px-1 w-[78px] right-14 bg-stone-800">
          <p className=" font-normal text-white  whitespace-pre-line text-sm text-left   mt-2 px-1">
            {date}
          </p>
        </div>
        <div className="mb-2 absolute -top-14 w-[59px] h-[56px] right-0 bg-[#2C4FA4] hover:bg-black transition duration-500 ease-in-out flex items-center justify-center">
          <p className="font-normal text-white lg:text-4xl text-2xl">→</p>
        </div>
      </div>
    </Link>
  );

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          "http://admin.history-state.kz/api/v1/news-list/",
          { withCredentials: true }
        );
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const fetchRecentNews = async () => {
      try {
        const { data } = await axios.get(
          "http://91.147.92.207/api/v1/news-list/",
          { withCredentials: true }
        );
        setRecentNews(data.slice(-6).reverse());
      } catch (error) {
        console.error("Error fetching recent news:", error);
      }
    };

    fetchRecentNews();
  }, []);

  useEffect(() => {
    const filtered = news.filter((item) =>
      item.title_ru.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedId !== null) {
      // Если выбрана новость, фильтруем по id
      setFilteredNews(filtered.filter((item) => item.id === selectedId));
    } else {
      // Если нет выбранной новости, просто фильтруем
      setFilteredNews(filtered);
      setCurrentPage(0); // Сбрасываем на первую страницу при изменении поискового запроса
    }
  }, [news, searchTerm, selectedId]);

  // Обработчик изменения страницы пагинации
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    setSelectedId(null);
  };

  // Отображаемая часть новостей для текущей страницы
  const displayedNews = [...filteredNews]
    .sort((a, b) => b.id - a.id)
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Обработчик клика по новости
  const handleNewsClick = (id) => {
    setSelectedId(id);
  };

  // Вычисление общего количества страниц пагинации
  const pageCount = Math.ceil(filteredNews.length / itemsPerPage);
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl   px-4 py-2  ">
      <div className="flex flex-row w-full gap-2 mt-3 items-center w-[235px] h-[25px]">
        <div className="text-lg font-['Source_Serif_Pro'] text-[#333333]">
          Главная
        </div>

        <div className="text-lg font-['Source_Serif_Pro'] font-bold text-[#8d8d8d]">
          &#62;
        </div>
        <div className="text-lg font-['Source_Serif_Pro'] text-[#8d8d8d]">
          Новостной блок
        </div>
      </div>
      <img
        src={newsiconbg1}
        className="w-[315px] h-[285px] absolute  left-0 hidden md:block"
      ></img>
      <div className="w-full h-[1px] bg-[#FFFFFF] bg-opacity-40 mt-4"></div>
      <div>
        <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
          Актуальные новости
        </h1>
        <div>
          <div className="my-4 relative">
            <input
              type="text"
              placeholder="Найти новость..."
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

          <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-8 whitespace-pre-line">
            {displayedNews.map((item) => (
              <NewsItem
                key={item.id}
                title={item.title_ru}
                date={item.date}
                imageSrc={item.image}
                link={`/ru/thenews/${item.id}`}
                onClick={() => handleNewsClick(item.id)}
              />
            ))}
          </div>
          <div className="flex justify-center my-4 ">
            <ReactPaginate
              className="flex gap-4 items-center"
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              previousLabel={null} // Устанавливаем null, чтобы скрыть стрелку "Предыдущая"
              nextLabel={null} // Устанавливаем null, чтобы скрыть стрелку "Следующая"
              previousLinkClassName="hidden" // Скрываем стрелку "Предыдущая"
              nextLinkClassName="hidden" // Скрываем стрелку "Следующая"
              breakLabel={
                <span className="px-2 py-1 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
                  ...
                </span>
              }
              pageClassName="px-3 py-1 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-lg"
            />
          </div>
        </div>

        <div className="mt-4 max-w-screen-xl mx-auto font-nunito">
          <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
            Недавние новости
          </h1>
          <div>
            <Carousel
              responsive={responsive}
              infinite={true}
              containerClass="max-w-screen-xl mx-auto"
              itemClass="p-3" // Adjust padding as needed
            >
              {recentNews.map((item) => (
                <NewsItemRecent
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  imageSrc={item.image}
                  link={`/ru/thenews/${item.id}`}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
