import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

function AppliedStudiesCardRu() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [openedItem, setOpenedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/applied-research-list/"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataArray = Array.isArray(data) ? data : [];

  const handleToggle = (index) => {
    setOpenedItem((prevOpenedItem) =>
      prevOpenedItem === index ? null : index
    );
  };

  useEffect(() => {
    const filtered = dataArray.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tasks.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.implementation_period
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(0);
  }, [searchTerm, dataArray]);

  const displayedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const mediaUrl = "http://127.0.0.1:8000/media/";
  return (
    <>
      <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-2">
        <div className="flex justify-between flex-row w-full gap-2 mt-3 items-center w-[235px] h-[25px]">
          <div className="flex gap-2 ">
            <div className="text-lg font-bold text-[#333333]">Главная</div>
            <div className="text-lg font-bold text-[#8d8d8d]">&#62;</div>
            <div className="text-lg text-[#8d8d8d]">Исследование</div>
          </div>
          <Link to="/ru">
            <p className="underline text-lg text-blue-500 hover:text-blue-700">
              Вернуться назад
            </p>
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-600 bg-opacity-40 mt-4"></div>
        <div>
          <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
            Научная библиотека
          </h1>
          <div>
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
                  className="text-gray-500 absolute right-12 top-4 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
            <div className="flex flex-col">
              {displayedData.map((item, index) => (
                <div key={item.title}>
                  <div
                    className="flex flex-col items-center bg-[#2C4FA4] border-t border-solid rounded-lg"
                    onClick={() => handleToggle(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <h1 className="text-white text-xl font-bold">Тема:</h1>
                    <p className="text-gray-200 uppercase text-lg line-clamp-2">
                      {item.title}
                    </p>
                  </div>

                  {openedItem === index && (
                    <div className="bg-white p-2">
                      <div className="flex flex-col">
                        <h1 className="text-[#333] text-xl font-bold mb-2">
                          Цель:
                        </h1>
                        <p className="text-[#333] text-xl font-normal whitespace-pre-line">
                          {item.target}
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <h1 className="text-[#333] text-xl font-bold mb-2">
                          Задания:
                        </h1>
                        <p
                          className="items-center space-y-2 text-lg text-[#333] mt-2"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              item.tasks.replace(/\/media\//g, mediaUrl)
                            ),
                          }}
                        ></p>
                      </div>

                      <p className="text-[#333] text-lg font-bold mt-2">
                        Срок реализации: {item.implementation_period}
                      </p>
                    </div>
                  )}

                  <div className="w-full h-[1px] bg-gray-600 bg-opacity-40 mt-4 mb-2"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-center my-4">
              <ReactPaginate
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
    </>
  );
}

export default AppliedStudiesCardRu;
