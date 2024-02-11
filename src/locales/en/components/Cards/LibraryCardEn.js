import React from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
function LibraryCardEn() {
  const NewsItem = ({ id, title, date, imageSrc, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white border border-gray-200 shadow-lg hover:scale-95 transition duration-300 ease-in-out font-nunito rounded-lg overflow-hidden w-full"
    >
      <img
        className="h-36 w-full object-cover rounded-t-lg"
        src={imageSrc}
        alt={title}
      />
      <div className="p-3">
        <h5 className="text-md font-semibold text-gray-900 mb-2">{title}</h5>
        <p className="text-sm font-normal text-[#222F49] mb-1">{date}</p>
      </div>
    </a>
  );

 // Стейт для хранения данных библиотеки
const [library, setLibrary] = useState([]);

// Запрос к API для получения данных библиотеки при загрузке компонента
useEffect(() => {
  const fetchLibrary = async () => {
    try {
      const { data } = await axios.get(
        "http://91.147.92.207:8000/api/v1/science-library-list/",
        {
          withCredentials: true,
        }
      );
      // Установка данных библиотеки в стейт с обратным порядком
      setLibrary(data.data.reverse());
    } catch (error) {
      console.error("Ошибка при получении библиотеки:", error);
    }
  };

  fetchLibrary();
}, []);

// Стейт для текущей страницы пагинации
const [currentPage, setCurrentPage] = useState(0);

// Количество элементов на странице
const itemsPerPage = 12;

// Стейт для хранения поискового запроса
const [searchTerm, setSearchTerm] = useState("");

// Стейт для хранения отфильтрованных данных библиотеки по поисковому запросу
const [filteredLibrary, setFilteredLibrary] = useState([]);

// Эффект, который выполняется при изменении поискового запроса или данных библиотеки
useEffect(() => {
  // Фильтрация библиотеки на основе поискового запроса
  const filtered = library.filter(
    (item) =>
      item.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.minidescription_en.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Установка отфильтрованных данных и сброс текущей страницы на первую
  setFilteredLibrary(filtered);
  setCurrentPage(0);
}, [searchTerm, library]);

// Отображаемая часть библиотеки для текущей страницы
const displayedLibrary = filteredLibrary.slice(
  currentPage * itemsPerPage,
  (currentPage + 1) * itemsPerPage
);

// Обработчик изменения страницы пагинации
const handlePageClick = ({ selected }) => {
  setCurrentPage(selected);
};

// Вычисление общего количества страниц пагинации
const pageCount = Math.ceil(filteredLibrary.length / itemsPerPage);

// Эффект, который выполняется при монтировании компонента для прокрутки вверх
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-2 font-nunito whitespace-pre-line">
      <div className="flex flex-row gap-2 mt-3 items-center w-[235px] h-[25px]">
        <div className="text-lg text-[#333333] font-bold">Main</div>
        <div className="text-lg font-bold text-[#8d8d8d]"></div>
        <div className="text-lg text-[#8d8d8d] whitespace-nowrap">
          Scientific Library
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#696969] bg-opacity-40 mt-4"></div>
      <div>
        <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
          Scientific Library
        </h1>
        <div>
        <div className="my-4 relative">
            <input
              type="text"
              placeholder="Find..."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {displayedLibrary.map((item) => (
              <NewsItem
                key={item.id}
                id={item.id}
                title={item.title_en}
                date={item.minidescription_en}
                imageSrc={`https://institut.hello-olzhas.kz${item.image}`}
                link={`http://91.147.92.207:8000/${item.file}`}
              />
            ))}
          </div>
          <div className="flex justify-center my-4 ">
            <ReactPaginate
              className="flex gap-2"
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              previousLabel={null}
              nextLabel={null}
              previousLinkClassName="hidden"
              nextLinkClassName="hidden"
              breakLabel={
                <span className="px-2 py-1 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
                  ...
                </span>
              }
              pageClassName="px-2 py-1 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryCardEn;
