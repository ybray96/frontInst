import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";
import arrow from "../components/SVG/arrow.svg";
import tiktok from "../components/SVG/tiktok.svg";
import rec from "../components/PDF/recommendations.pdf";
import axios from "axios";
import ReactPaginate from "react-paginate";
import useVisualImpairmentScript from "../components/Hooks/useEye";
function SocialLink({ href, iconSrc, alt }) {
  return (
    <a href={href}>
      <div className="border border-[#eaeaea] bg-[#e4e4e4] flex justify-center items-center w-12 h-12 rounded-full">
        <img src={iconSrc} className="w-5" alt={alt} />
      </div>
    </a>
  );
}

function Recomendation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("РУС");
  const [showHistory, setShowHistory] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const toggleHistory = () =>
    setShowHistory((prevShowHistory) => !prevShowHistory);
  const toggleDropdown = () =>
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };
  const toggleNav = () => setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  const toggleState = (stateSetter) => stateSetter((prevState) => !prevState);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Функция для выполнения запроса к API
    const fetchRecommendations = async () => {
      try {
        const { data } = await axios.get(
          "https://admin.history-state.kz/api/v1/recomendation-list/",
          {
            withCredentials: true,
          }
        );
        setRecommendations(data.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, []);
  // const handleSpecialButtonClick = useVisualImpairmentScript();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);

  useEffect(() => {
    const filtered = recommendations.filter((item) =>
      item.file_name_ru.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecommendations(filtered);
    setCurrentPage(0);
  }, [searchTerm, recommendations]);

  const displayedRecommendations = filteredRecommendations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(filteredRecommendations.length / itemsPerPage);

  return (
    <div className="w-full absolute  font-nunito bg-[#e4e4e4] ">
      {/* url(${backgroundImage}) */}
      <div
        // background надо засунуть в backgroundImage Для адаптивного баннера
        className="xl:h-[500px] md:h-full h-[150px]  relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"https://inbusiness.kz/uploads/2022-9/BNVukF1C.webp"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-transparent font-nunito">
          <div className="p-2">
            <header>
              <nav className=" flex flex-col mx-auto  max-w-screen-xl">
                <div className=" relative flex  justify-between items-center sm:flex-row sm:items-center">
                  <Link to="/ru">
                    <div href="#" className="flex items-center ">
                      <img
                        src={logo}
                        className="w-12 h-12 sm:w-16 sm:h-16 "
                        alt="Институт истории государств"
                      />
                      <div className=" hidden md:flex flex-col text-center xl:pl-4  lg:pl-2  md:pl-1 ">
                        <span className="font-semibold text-white text-lg sm:text-xl text-left">
                          Институт
                        </span>
                        <span className=" font-semibold  text-left text-white text-lg sm:text-xl">
                          истории государства
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4 sm:gap-4">
                    <div className="hidden sm:flex flex-row items-center w-full h-10 px-2 rounded-lg bg-transparent"></div>
                    <div className="flex items-center">
                      {/* <img
                        className="hidden xl:block lg:block"
                        id="specialButton"
                        style={{ cursor: "pointer" }}
                        src="/pdf/eye.png"
                        alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
                        title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
                        onClick={handleSpecialButtonClick}
                      /> */}
                      <div className="relative inline-block text-white">
                        <button
                          id="dropdownDefaultButton"
                          onClick={toggleDropdown}
                          className="text-white bg-transparent rounded-lg text-base px-8 text-center inline-flex items-center"
                          type="button"
                        >
                          {selectedLanguage}
                          <img
                            src={arrow}
                            className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          ></img>
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute z-10 mt-3 ml-8   w-[80px] bg-black  divide-y divide-gray-200 rounded-lg shadow-lg">
                            <ul>
                              <Link to="/en/recommendations">
                                <li
                                  onClick={() => handleLanguageChange("ENG")}
                                  className="cursor-pointer p-3"
                                >
                                  ENG
                                </li>
                              </Link>

                              <Link to="/recommendations">
                                <li
                                  onClick={() => handleLanguageChange("KAZ")}
                                  className="cursor-pointer p-3"
                                >
                                  ҚАЗ
                                </li>
                              </Link>
                              <Link to="/ru/recommendations">
                                <li
                                  onClick={() => handleLanguageChange("РУС")}
                                  className="cursor-pointer p-3"
                                >
                                  РУС
                                </li>
                              </Link>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* БУРГЕР МЕНЮ */}
                    <div className="burger-menu z-50 ">
                      <div className="lg:hidden ">
                        <div className="" onClick={toggleNav}>
                          <svg
                            className="ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="20"
                            viewBox="0 0 35 20"
                            fill="none"
                          >
                            <path
                              d="M1.99609 1H33.9961"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M1.99609 10H33.9961"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M1.99609 19H33.9961"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div
                          className={`menu transform w-full ${
                            isNavOpen ? "translate-x-0" : "-translate-x-full"
                          } lg:hidden fixed  top-0 left-0 h-full fixed  bg-[#e4e4e4] transition-transform duration-400 ease-in-out lg:translate-x-0 lg:static lg:h-auto lg:bg-transparent lg:duration-0 lg:ease-none lg:opacity-100 lg:w-full max-w-screen-xl`}
                        >
                          <button
                            onClick={() => toggleState(setIsNavOpen)} // Call the function to close the menu
                            className="absolute top-5 right-3  text-xl cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="22"
                              viewBox="0 0 24 22"
                              fill="none"
                            >
                              <path
                                d="M1.69076 1L23 20.9279M1 21L22.3092 1.07211"
                                stroke="#333333"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                          <div className="w-full ">
                            <ul className="flex flex-col w-full divide-y divide-gray-500   ">
                              <Link to="/ru">
                                {" "}
                                <li className="text-center   flex items-center px-2 py-1">
                                  <img src={logo} alt="" />
                                  <p className="text-[#333333] px-2 text-left  font-medium  ">
                                    Институт <br /> истории государства
                                  </p>
                                </li>
                              </Link>

                              <Link to="/ru/aboutus">
                                <li className="">
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                  >
                                    Об институте
                                    {/* <img
                                src={arrow}
                                className="ml-2 w-2.5 h-2.5"
                              ></img> */}
                                  </button>
                                </li>
                              </Link>
                              <li>
                                <div className="lg:hidden flex flex-col">
                                  <button
                                    className=" text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                    onClick={() => toggleState(setIsOpen)}
                                  >
                                    Исследование
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="27"
                                      height="16"
                                      viewBox="0 0 27 16"
                                      fill="none"
                                      className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                                        isOpen ? "rotate-180" : ""
                                      }`}
                                    >
                                      <path
                                        d="M26.9162 0.659282C26.7843 0.397367 26.5258 0.156833 26.2832 0.0659645C26.0194 -0.0409395 25.5816 -0.0142135 25.3232 0.119416C25.2388 0.167523 22.5486 3.11273 19.3573 6.66194C16.166 10.2112 13.5286 13.1136 13.5023 13.1136C13.4759 13.1136 10.8385 10.2112 7.64719 6.66194C4.45592 3.11273 1.76575 0.167522 1.68135 0.119415C1.45453 0.00182104 1.00617 -0.0355954 0.768806 0.0445826C0.515615 0.130106 0.230774 0.38133 0.0989017 0.6379C-0.0329686 0.90516 -0.0329686 1.38623 0.0989017 1.67487C0.220224 1.93678 12.6214 15.7381 12.8798 15.8931C13.017 15.9786 13.1488 16 13.5128 16C13.9348 16 13.9823 15.9893 14.188 15.8396C14.515 15.5991 26.7896 1.93144 26.9056 1.67487C27.0269 1.40761 27.0322 0.88378 26.9162 0.659282Z"
                                        fill="#333333"
                                      />
                                    </svg>
                                  </button>

                                  {isOpen && (
                                    <div className="mt-2 space-y-2 flex flex-col  divide-y divide-black ">
                                      <button
                                        className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                        onClick={() =>
                                          toggleState(setSubMenuOpen)
                                        }
                                      >
                                        Научные проекты
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="27"
                                          height="16"
                                          viewBox="0 0 27 16"
                                          fill="none"
                                          className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                                            subMenuOpen ? "rotate-180" : ""
                                          }`}
                                        >
                                          <path
                                            d="M26.9162 0.659282C26.7843 0.397367 26.5258 0.156833 26.2832 0.0659645C26.0194 -0.0409395 25.5816 -0.0142135 25.3232 0.119416C25.2388 0.167523 22.5486 3.11273 19.3573 6.66194C16.166 10.2112 13.5286 13.1136 13.5023 13.1136C13.4759 13.1136 10.8385 10.2112 7.64719 6.66194C4.45592 3.11273 1.76575 0.167522 1.68135 0.119415C1.45453 0.00182104 1.00617 -0.0355954 0.768806 0.0445826C0.515615 0.130106 0.230774 0.38133 0.0989017 0.6379C-0.0329686 0.90516 -0.0329686 1.38623 0.0989017 1.67487C0.220224 1.93678 12.6214 15.7381 12.8798 15.8931C13.017 15.9786 13.1488 16 13.5128 16C13.9348 16 13.9823 15.9893 14.188 15.8396C14.515 15.5991 26.7896 1.93144 26.9056 1.67487C27.0269 1.40761 27.0322 0.88378 26.9162 0.659282Z"
                                            fill="#333333"
                                          />
                                        </svg>
                                      </button>

                                      {subMenuOpen && (
                                        <div className="flex flex-col space-y-2 border-t border-[#333333] pt-2">
                                          <Link to="/ru/studies">
                                            <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-1 text-center inline-flex items-center">
                                              Фундаментальные исследования
                                            </button>
                                          </Link>
                                          <Link to="/ru/appliedstudies">
                                            <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-1 text-center inline-flex items-center ">
                                              Прикладные исследования
                                            </button>
                                          </Link>
                                        </div>
                                      )}
                                      <Link to="/ru/recommendations">
                                        <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
                                          Рекомендации
                                        </button>
                                      </Link>
                                      {/* <a href={rec} download="Рекомендации.pdf">
                                    <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
                                      Рекомендации
                                    </button>
                                  </a> */}
                                      <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
                                        Научные журналы
                                      </button>
                                      <Link to="/ru/expertvision">
                                        {" "}
                                        <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center ">
                                          Экспертные мнения
                                        </button>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </li>
                              <li>
                                <Link to="/ru/library">
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                  >
                                    Научная библиотека
                                    {/* <img
                                src={arrow}
                                className="ml-2 h-2.5 w-2.5"
                              ></img> */}
                                  </button>
                                </Link>
                              </li>
                              <li>
                                <Link to="/ru/history">
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                  >
                                    Современная история
                                    {/* <img
                                src={arrow}
                                className="ml-2 h-2.5 w-2.5"
                              ></img> */}
                                  </button>
                                </Link>
                              </li>
                              <li>
                                <div className="relative">
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                    onClick={toggleHistory}
                                  >
                                    Digital History
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="27"
                                      height="16"
                                      viewBox="0 0 27 16"
                                      fill="none"
                                      className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                                        showHistory ? "rotate-180" : ""
                                      }`}
                                    >
                                      <path
                                        d="M26.9162 0.659282C26.7843 0.397367 26.5258 0.156833 26.2832 0.0659645C26.0194 -0.0409395 25.5816 -0.0142135 25.3232 0.119416C25.2388 0.167523 22.5486 3.11273 19.3573 6.66194C16.166 10.2112 13.5286 13.1136 13.5023 13.1136C13.4759 13.1136 10.8385 10.2112 7.64719 6.66194C4.45592 3.11273 1.76575 0.167522 1.68135 0.119415C1.45453 0.00182104 1.00617 -0.0355954 0.768806 0.0445826C0.515615 0.130106 0.230774 0.38133 0.0989017 0.6379C-0.0329686 0.90516 -0.0329686 1.38623 0.0989017 1.67487C0.220224 1.93678 12.6214 15.7381 12.8798 15.8931C13.017 15.9786 13.1488 16 13.5128 16C13.9348 16 13.9823 15.9893 14.188 15.8396C14.515 15.5991 26.7896 1.93144 26.9056 1.67487C27.0269 1.40761 27.0322 0.88378 26.9162 0.659282Z"
                                        fill="#333333"
                                      />
                                    </svg>
                                  </button>

                                  {showHistory && (
                                    <div className="mt-2 space-y-2 flex flex-col  ">
                                      <a href="https://e-history.kz/kz">
                                        {" "}
                                        <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-1 text-center inline-flex items-center">
                                          E-history
                                        </button>
                                      </a>

                                      <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-1 text-center inline-flex items-center">
                                        Архив 2025
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </li>
                              <Link to="/ru/ourachievements">
                                <li>
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                    type="button"
                                  >
                                    Наши достижения
                                  </button>
                                </li>
                              </Link>
                            </ul>
                          </div>
                          <div className="flex flex-col md:w-1/3 mt-5 px-5">
                            <span className="text-base font-semibold">
                              Наши соц.сети:
                            </span>
                            <div className="flex gap-5 mt-5">
                              <SocialLink
                                href="https://www.facebook.com/people/%D0%9C%D0%B5%D0%BC%D0%BB%D0%B5%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D1%80%D0%B8%D1%85%D1%8B-%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%D1%8B-%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8-%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B0/100064573574874/?hc_location=stream"
                                iconSrc="https://file.rendit.io/n/VJ2UfL7VAYQGCgU6UWPK.svg"
                                alt="Facebook Icon"
                              />
                               <SocialLink
                                href="https://www.instagram.com/tarih_institut?igsh=MzRlODBiNWFlZA%3D%3D"
                                iconSrc="https://file.rendit.io/n/6wEPX2PmaqoCS1OaUDsj.svg"
                                alt="Instagram Icon"
                              />
                              <SocialLink
                                href="https://twitter.com/tarih_institut"
                                iconSrc={tiktok}
                                alt="TikTok Icon"
                              ></SocialLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ПК разрешение */}
                <div className="hidden lg:flex flex-col md:flex-row md:justify-between items-center">
                  <Link to="/ru/aboutus">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-white whitespace-nowrap font-medium rounded-lg text-base  px-2  py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      Об институте
                      {/* <img src={arrow} className="ml-2 w-2.5 h-2.5"></img> */}
                    </button>
                  </Link>

                  <div className="relative">
                    <div className="">
                      <button
                        className="text-white whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 text-center inline-flex hover:scale-110  items-center"
                        onClick={() => toggleState(setIsOpen)}
                      >
                        Исследование
                        <img
                          src={arrow}
                          className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        ></img>
                      </button>
                    </div>
                    <ul>
                      {isOpen && (
                        <div className="absolute  bg-black  top-full right-0 mt-2 space-y-2  shadow-md rounded-lg">
                          <button
                            className="text-white whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 text-center inline-flex hover:scale-110  items-center"
                            onClick={() => toggleState(setSubMenuOpen)}
                          >
                            Научные проекты
                            <img
                              src={arrow}
                              className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                                subMenuOpen ? "rotate-180" : ""
                              }`}
                            ></img>
                          </button>

                          {subMenuOpen && (
                            <div className="">
                              <Link to="/ru/studies">
                                <button className="block px-4 py-2 text-white hover:scale-110 w-full text-left">
                                  Фундаментальные исследования
                                </button>
                              </Link>
                              <Link to="/ru/appliedstudies">
                                <button className="block px-4 py-2 text-white hover:scale-110 w-full text-left">
                                  Прикладные исследования
                                </button>
                              </Link>
                            </div>
                          )}

                          <Link to="/ru/recommendations">
                            <button className="block px-4 py-2 text-white hover:scale-110 w-full text-left">
                              Рекомендации
                            </button>
                          </Link>
                          {/* <a href={rec} download="Рекомендации.pdf">
                        <button className="text-white whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 text-left inline-flex hover:scale-110  items-center ">
                          Рекомендации
                        </button>
                      </a> */}

                          <button className="text-white whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 text-center inline-flex  items-center hover:scale-110">
                            Научные журналы
                          </button>
                          <Link to="/ru/expertvision">
                            {" "}
                            <button className="text-white whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 text-center inline-flex  items-center hover:scale-110">
                              Экспертные мнения
                            </button>
                          </Link>
                        </div>
                      )}
                    </ul>
                  </div>

                  <Link to="/ru/library">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-white whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      Научная библиотека
                      {/* <img src={arrow} className="ml-2 w-2.5 h-2.5 "></img> */}
                    </button>
                  </Link>

                  <Link to="/ru/history">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-white  whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      Современная история
                      {/* <img src={arrow} className="ml-2 w-2.5 h-2.5"></img> */}
                    </button>
                  </Link>

                  <div className="relative inline-block text-center">
                    <button
                      id="dropdownDividerButton"
                      className="text-white whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                      onClick={toggleHistory}
                    >
                      Digital History
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                          showHistory ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="9"
                          viewBox="0 0 13 9"
                          fill="none"
                          className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                            showHistory ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M10.5048 0.760508C10.8759 0.342578 11.5174 0.309866 11.929 0.687889L12.2761 1.00664C12.6779 1.37564 12.7098 1.99858 12.3478 2.40672L7.24813 8.1565C6.85025 8.6051 6.14975 8.6051 5.75187 8.1565L0.652156 2.40672C0.290168 1.99858 0.322082 1.37564 0.723884 1.00664L1.07097 0.687889C1.48259 0.309866 2.12414 0.342578 2.49518 0.760508L5.75219 4.42911C6.15003 4.87723 6.84997 4.87723 7.24781 4.42911L10.5048 0.760508Z"
                            fill="white"
                          />
                        </svg>
                      </svg>
                    </button>

                    {showHistory && (
                      <div className="absolute top-10 right-6 mt-2 bg-black text-white shadow-lg rounded-md">
                        <a href="https://e-history.kz/kz">
                          <button className="block px-4 py-2 text-white  w-full text-left hover:scale-110">
                            E-history
                          </button>
                        </a>
                        <a href="https://www.ulttykarhiv.kz/ru/">
                          <button className="block px-4 py-2 text-white  w-full text-left hover:scale-110">
                            Архив 2025
                          </button>
                        </a>
                      </div>
                    )}
                  </div>
                  <Link to="/ru/ourachievements">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-white  whitespace-nowrap font-medium rounded-lg text-base px-2 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      Наши достижения
                    </button>
                  </Link>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>

      <div className="mb-[145px] flex flex-col mx-auto max-w-screen-xl   px-4  ">
        <div className="text-2xl text-gray-800 whitespace-nowrap my-2 ">
          <h1 className="text-center">Рекомендации</h1>
        </div>
        <div className="my-4 relative">
          <input
            type="text"
            placeholder="Поиск..."
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
        <div className="table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center space-y-4 sm:space-y-0 pb-4">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
            </div>
            <table className="w-full text-sm text-left text-gray-500 border border-gray-300">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[#0069B5] border-b border-gray-300 border-r "
                  >
                    НАЗВАНИЕ ФАЙЛА
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[#0069B5] w-1/6 border-b border-gray-300"
                  >
                    СКАЧАТЬ
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedRecommendations.map((recommendation, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-b border-gray-300 border-r"
                    >
                      {recommendation.file_name_ru}
                    </th>
                    <td className="px-4 py-4 border-b border-gray-300">
                      <a
                        download
                        href={`https://admin.history-state.kz/${recommendation.file}`}
                        className="font-medium text-white hover:underline w-1/6 bg-[#0069B5] py-1 px-2 rounded-full"
                      >
                        СКАЧАТЬ
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center my-4">
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
      <div className="w-full h-[1px] bg-[#D4D4D4]  mt-20"></div>
      <Footer />
    </div>
  );
}

export default Recomendation;
