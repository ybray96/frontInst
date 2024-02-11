import { useEffect, useState } from "react";
import React from "react";
import DOMPurify from "dompurify";
import axios from "axios";
import ReactPaginate from "react-paginate";

import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

function StudiesCard() {
  const [foundationStudyData, setFoundationStudyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.history-state.kz/api/v1/foundation-study-list/"
        );
        
        setFoundationStudyData(response.data.data);
      } catch (error) {
        console.error("Error fetching foundation study data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to get the displayed studies on the current page
  const displayedStudies = [...foundationStudyData]
    .reverse()
    .filter((studyItem) => {
      return (
        studyItem.title_en.toLowerCase().indexOf(searchText.toLowerCase()) !==
        -1
      );
    });

  // Handler for changing the page
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Handler for handling search input changes
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(0); // Сброс на первую страницу при изменении поискового запроса
  };
  const NewsItem = ({ title, date, imageSrc }) => (
    <div className=" rounded-xl w-full xl:flex lg:flex-col bg-white border border-gray-200  relative hover:underline transition duration-300 ease-in-out hover:bg-[#dcd9d9]">
      <img
        className="h-44 w-full rounded-t-xl"
        src={`https://admin.history-state.kz${imageSrc}`}
        alt=""
      />

      <div className="relative p-5">
        <h5 className="lg:text-lg text-md font-semibold tracking-tight text-gray-900 md:h-16 lg:h-20 line-clamp-1">
          {title}
        </h5>

        <div className=" mb-2 absolute -top-14 h-[56px]   px-1 w-[78px] right-14 bg-stone-800">
          <p className=" font-normal text-white  whitespace-pre-line text-sm text-left   mt-5  break-words ">
            {date}
          </p>
        </div>
        <div className=" mb-2 absolute -top-14  w-[59px] h-[56px] right-0 bg-[#2C4FA4]">
          <p className=" font-normal text-white text-4xl p-2 px-3 rounded hover:bg-black  transition duration-500 ease-in-out  ">
            →
          </p>
        </div>
      </div>
    </div>
  );
  // Calculate the total number of pages
  const pageCount = Math.ceil(displayedStudies.length / itemsPerPage);

  // Display the studies on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const currentDisplayedStudies = displayedStudies.slice(startIndex, endIndex);
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl   px-4 py-2 font-nunito">
      <div className="flex justify-between flex-row w-full gap-2 mt-3 items-center">
        <div className="flex gap-2 ">
          <div className="text-lg font-bold   text-[#333333]">Main</div>
          <div className="text-lg  font-bold text-[#8d8d8d]">&#62;</div>
          <div className="text-lg text-[#8d8d8d]">Researches</div>
        </div>
        <Link to="/en">
          <p className=" underline  text-lg  text-blue-500  hover:text-blue-700 ">
            Go back
          </p>
        </Link>
      </div>
      {/* Линия */}
      <div className="w-full h-[1px] bg-gray-600 bg-opacity-40 mt-4"></div>
      <h1 className=" md:font-bold text-[#333] md:text-xl font-semibold text-md ">
        {" "}
        «Foreign Policy and regions of Independent Kazakhstan (1991-2021
        years.)»
      </h1>
      <div className="w-full">
        <div className="flex flex-col  w-full ">
          <span className="mt-4 text-[#333]  text-lg">
            <span className="font-bold">Target:</span> Content research, aspects
            and features of the development of the regions of Kazakhstan over
            the years independence in the system of foreign policy of the
            Republic of Kazakhstan, analysis of the development of Kazakhstan's
            regions in the system of cooperation with by foreign countries.
          </span>

          <div>
            <span className="mt-4 text-[#333] text-lg font-bold">Tasks:</span>
            <ul className=" mt-2 items-center space-y-2 font-normal text-lg">
              <li>
                - Analyze conceptual and methodological approaches studying the
                processes of development of the country's regions in the system
                of external politics of the Republic of Kazakhstan;
              </li>
              <li>
                -To identify the characteristic features and features of the
                implementation of the regional state policies;
              </li>
              <li>
                -To reveal the tools and mechanisms of regional development as
                factors of interrelation of domestic and foreign policy of
                Kazakhstan;
              </li>
              <li>
                -Show targets and formation features regional investment policy;
              </li>
              <li>
                -To summarize the place and role of migration policy in
                socio-economic development of the regions;
              </li>
              <li>
                -To study the trends and prospects of regional cooperation
                Kazakhstan with foreign countries.
              </li>
            </ul>
          </div>
          <span className="mt-4 text-[#333] text-lg font-bold">
            Implementation period: 2023-2025.
          </span>

          <span className="mt-4 text-[#333]  text-base text-blue-500 font-semibold">
            For 15 years we have already conducted more than 23 studies
          </span>
        </div>
      </div>

      {/* Линия */}
      <div className="w-full h-[2px] bg-gray-600 bg-opacity-40 mt-4"></div>
      {/* Форма поиска */}

      <div>
        <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
          Latest Research
        </h1>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 pr-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search studies"
            value={searchText}
            onChange={handleSearchChange}
          />
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-7 mt-4">
          {currentDisplayedStudies.map((studyItem) => (
            <Link
              key={studyItem.id}
              to={`/en/research/${studyItem.id}`} // Use the 'id' property as the identifier
            >
              <NewsItem
                title={studyItem.title_en}
                date={studyItem.date}
                imageSrc={studyItem.image}
              />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-4 ">
          <ReactPaginate
             className="flex gap-4 items-center"
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
            pageClassName="px-3 py-1 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-lg"
          />
        </div>
        {/* <a className="underline text-[#222F49]">
          <p className="text-center text-xl mt-7">Показать все исследования</p>
        </a> */}
      </div>
    </div>
  );
}

export default StudiesCard;
