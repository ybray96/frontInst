import logo from "../../../../components/images/logo.png";
import React, { useState } from "react";
import arrow from "../../../../components/SVG/arrow.svg";
import tiktok from "../../../../components/SVG/tiktok.svg";
import { Link } from "react-router-dom";
import orcid from "../../../../components/imgwork/orcid.png";
import axios from "axios";

import { useEffect } from "react";
import FooterEn from "../FooterEn";
import useVisualImpairmentScript from "../../../../components/Hooks/useEye";

function CouncilEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const [showHistory, setShowHistory] = useState(false);
  // const handleSpecialButtonClick = useVisualImpairmentScript();
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
    // При монтировании компонента, прокручиваем страницу наверх
    window.scrollTo(0, 0);
  }, []);
  function SocialLink({ href, iconSrc, alt }) {
    return (
      <a href={href}>
        <div className="border border-[#eaeaea] bg-[#e4e4e4] flex justify-center items-center w-12 h-12 rounded-full">
          <img src={iconSrc} className="w-5" alt={alt} />
        </div>
      </a>
    );
  }
  const HeaderCouncil = () => {
    return (
      <>
        {" "}
        <div className="bg-transparent font-nunito ">
          <div className="p-2 ">
            <header>
              <nav className=" flex flex-col mx-auto  max-w-screen-xl    ">
                <div className=" relative flex  justify-between items-center sm:flex-row sm:items-center">
                  <Link to="/en">
                    <div href="#" className="flex items-center">
                      <img
                        src={logo}
                        className="w-12 h-12 sm:w-16 sm:h-16"
                        alt="Institute of the History of States "
                      />
                      <div className=" hidden md:flex flex-col text-center xl:pl-4  lg:pl-2  md:pl-1 ">
                        <span className="font-semibold text-white text-lg sm:text-xl text-left">
                          Institute
                        </span>
                        <span className=" font-semibold  text-left text-white text-lg sm:text-xl">
                          of State History
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4 sm:gap-4">
                    <div className=" lg:block hidden   hover:scale-110"></div>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="9"
                            viewBox="0 0 13 9"
                            fill="none"
                            className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M10.5048 0.760508C10.8759 0.342578 11.5174 0.309866 11.929 0.687889L12.2761 1.00664C12.6779 1.37564 12.7098 1.99858 12.3478 2.40672L7.24813 8.1565C6.85025 8.6051 6.14975 8.6051 5.75187 8.1565L0.652156 2.40672C0.290168 1.99858 0.322082 1.37564 0.723884 1.00664L1.07097 0.687889C1.48259 0.309866 2.12414 0.342578 2.49518 0.760508L5.75219 4.42911C6.15003 4.87723 6.84997 4.87723 7.24781 4.42911L10.5048 0.760508Z"
                              fill="white"
                            />
                          </svg>
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute z-10 mt-3 ml-4  w-[80px] bg-black  divide-y divide-gray-200 rounded-lg shadow-lg">
                            <ul>
                              <li
                                onClick={() => handleLanguageChange("ENG")}
                                className="cursor-pointer p-3"
                              >
                                ENG
                              </li>
                              <Link to="/council">
                                <li
                                  onClick={() => handleLanguageChange("KAZ")}
                                  className="cursor-pointer p-3"
                                >
                                  ҚАЗ
                                </li>
                              </Link>
                              <Link to="/ru/council">
                                {" "}
                                <li
                                  onClick={() => handleLanguageChange("RUS")}
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
                      <div className="lg:hidden">
                        <div className="" onClick={toggleNav}>
                          <svg
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
                          } lg:hidden fixed top-0 left-0 h-full bg-white transition-transform duration-400 ease-in-out lg:translate-x-0 lg:static lg:h-auto lg:bg-transparent lg:duration-0 md:ease-none md:opacity-100 lg:w-full max-w-screen-xl`}
                        >
                          <button
                            onClick={() => toggleState(setIsNavOpen)}
                            className="absolute top-5 right-3 text-white text-xl cursor-pointer"
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
                            <ul className="flex flex-col w-full  divide-y divide-gray-500  ">
                              <Link to="/en">
                                <li className="text-center  flex items-center px-2 py-1">
                                  <img src={logo} alt="" />
                                  <p className="text-[#333333] px-2 text-left font-medium text-xl">
                                    Institute <br /> of State History
                                  </p>
                                </li>
                              </Link>
                              <div className=" flex items-center w-full h-10 px-4 py-1  bg-[#0069B5] relative"></div>
                              <Link to="/en/aboutus">
                                <li>
                                  <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
                                    About institute
                                  </button>
                                </li>
                              </Link>
                              <li>
                                <div className="lg:hidden flex flex-col ">
                                  <button
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
                                    onClick={() => toggleState(setIsOpen)}
                                  >
                                    Research
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
                                    <div className="mt-2 space-y-2 flex flex-col bg-[#ffffff] divide-y divide-black ">
                                      <button
                                        className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center "
                                        onClick={() =>
                                          toggleState(setSubMenuOpen)
                                        }
                                      >
                                        Scientific Projects
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
                                          <Link to="/en/studies">
                                            <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-1 text-center inline-flex items-center">
                                              Fundamental Research
                                            </button>
                                          </Link>
                                          <Link to="/en/appliedstudies">
                                            <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-1 text-center inline-flex items-center ">
                                              Applied Research
                                            </button>
                                          </Link>
                                        </div>
                                      )}
                                      <Link to="/ru/recommendations">
                                        <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
                                          Recommendations
                                        </button>
                                      </Link>
                                      <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
                                        Scientific journals
                                      </button>
                                      <Link to="/en/expertvision">
                                        {" "}
                                        <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center">
                                          Expert opinions
                                        </button>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </li>
                              <li>
                                <Link to="/en/library">
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333]whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                                    type="button"
                                  >
                                    Scientific Library
                                    {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="9"
                                viewBox="0 0 13 9"
                                fill="none"
                                className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              >
                                <path
                                  d="M10.5048 0.760508C10.8759 0.342578 11.5174 0.309866 11.929 0.687889L12.2761 1.00664C12.6779 1.37564 12.7098 1.99858 12.3478 2.40672L7.24813 8.1565C6.85025 8.6051 6.14975 8.6051 5.75187 8.1565L0.652156 2.40672C0.290168 1.99858 0.322082 1.37564 0.723884 1.00664L1.07097 0.687889C1.48259 0.309866 2.12414 0.342578 2.49518 0.760508L5.75219 4.42911C6.15003 4.87723 6.84997 4.87723 7.24781 4.42911L10.5048 0.760508Z"
                                  fill="white"
                                />
                              </svg> */}
                                  </button>
                                </Link>
                              </li>
                              <li>
                                <Link to="/en/history">
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                                    type="button"
                                  >
                                    Modern History
                                  </button>
                                </Link>
                              </li>
                              <li>
                                <div className="relative">
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
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
                                    <div className="mt-2 space-y-2 flex flex-col">
                                      <a href="https://e-history.kz/kz">
                                        {" "}
                                        <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-base px-5 py-1 text-center inline-flex  items-center">
                                          E-history
                                        </button>
                                      </a>

                                      <button className="text-[#333333] whitespace-nowrap font-medium rounded-lg text-base px-5 py-1 text-center inline-flex  items-center">
                                        Archive 2025
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </li>
                              <Link to="/en/ourachievements">
                                <li>
                                  <button
                                    id="dropdownDividerButton"
                                    data-dropdown-toggle="dropdownDivider"
                                    className="text-[#333333]whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                                    type="button"
                                  >
                                    Our achievements
                                  </button>
                                </li>
                              </Link>
                            </ul>
                          </div>
                          <div className="flex flex-col md:w-1/3 mt-5 px-5">
                            <span className="text-base font-semibold">
                              Our SNS:
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
                                href="#"
                                iconSrc={tiktok}
                                alt="TikTok sIcon"
                              ></SocialLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ПК разрешение */}
                <div className=" hidden lg:flex flex-wrap justify-between items-center ">
                  <Link to="/en/aboutus" className="menu-button">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className=" text-white whitespace-nowrap font-medium rounded-lg text-base  py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      About institute
                    </button>
                  </Link>

                  <div className="relative">
                    <div className="">
                      <button
                        className=" text-white whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex hover:scale-110  items-center"
                        onClick={() => toggleState(setIsOpen)}
                      >
                        Research
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="9"
                          viewBox="0 0 13 9"
                          fill="none"
                          className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M10.5048 0.760508C10.8759 0.342578 11.5174 0.309866 11.929 0.687889L12.2761 1.00664C12.6779 1.37564 12.7098 1.99858 12.3478 2.40672L7.24813 8.1565C6.85025 8.6051 6.14975 8.6051 5.75187 8.1565L0.652156 2.40672C0.290168 1.99858 0.322082 1.37564 0.723884 1.00664L1.07097 0.687889C1.48259 0.309866 2.12414 0.342578 2.49518 0.760508L5.75219 4.42911C6.15003 4.87723 6.84997 4.87723 7.24781 4.42911L10.5048 0.760508Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                    <ul className="">
                      {isOpen && (
                        <div className="absolute  bg-black  top-full right-0 mt-2 space-y-2  shadow-md rounded-lg  ">
                          <button
                            className="text-white whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex hover:scale-110  items-center"
                            onClick={() => toggleState(setSubMenuOpen)}
                          >
                            Scientific Projects
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="9"
                              viewBox="0 0 13 9"
                              fill="none"
                              className={`w-2.5 h-2.5 ml-2.5 transition-transform transform ${
                                subMenuOpen ? "rotate-180" : ""
                              }`}
                            >
                              <path
                                d="M10.5048 0.760508C10.8759 0.342578 11.5174 0.309866 11.929 0.687889L12.2761 1.00664C12.6779 1.37564 12.7098 1.99858 12.3478 2.40672L7.24813 8.1565C6.85025 8.6051 6.14975 8.6051 5.75187 8.1565L0.652156 2.40672C0.290168 1.99858 0.322082 1.37564 0.723884 1.00664L1.07097 0.687889C1.48259 0.309866 2.12414 0.342578 2.49518 0.760508L5.75219 4.42911C6.15003 4.87723 6.84997 4.87723 7.24781 4.42911L10.5048 0.760508Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                          {subMenuOpen && (
                            <div>
                              <Link to="/en/studies">
                                <button className="block px-4 py-2 text-white hover:scale-110 w-full text-left">
                                  Fundamental Research
                                </button>
                              </Link>
                              <Link to="/en/appliedstudies">
                                {" "}
                                <button className="block px-4 py-2 text-white hover:scale-110 w-full text-left">
                                  Applied Research
                                </button>
                              </Link>
                            </div>
                          )}
                          <Link to="/en/recommendations">
                            <button className="block px-4 py-2 text-white hover:scale-110 w-full text-left">
                              Recommendations
                            </button>
                          </Link>
                          <button className="text-white whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex  items-center hover:scale-110">
                            Scientific Journals
                          </button>
                          <Link to="/en/expertvision">
                            {" "}
                            <button className="text-white whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex  items-center hover:scale-110">
                              Expert Opinions
                            </button>
                          </Link>
                          ;
                        </div>
                      )}
                    </ul>
                  </div>

                  <Link to="/en/library" className="menu-button">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-white whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      Scientific Library
                    </button>
                  </Link>

                  <Link to="/en/history" className="menu-button">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-white  whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      Modern History
                    </button>
                  </Link>

                  <div className="relative inline-block text-center">
                    <button
                      id="dropdownDividerButton"
                      className="text-white whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
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
                          {" "}
                          <button className="block px-4 py-2 text-white  w-full text-left hover:scale-110">
                            E-history
                          </button>
                        </a>

                        <a href="https://www.ulttykarhiv.kz/en/">
                          <button className="block px-4 py-2 text-white  w-full text-left hover:scale-110">
                            Archive 2025
                          </button>
                        </a>
                      </div>
                    )}
                  </div>

                  <Link to="/en/ourachievements" className="menu-button">
                    <button
                      id="dropdownDividerButton"
                      data-dropdown-toggle="dropdownDivider"
                      className="text-white  whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 mx-auto text-center inline-flex hover:scale-110 items-center"
                      type="button"
                    >
                      Our Achievements
                    </button>
                  </Link>
                </div>

                {/* Мобильный поиск */}
              </nav>
            </header>
          </div>
        </div>
      </>
    );
  };
  const CouncilPerson = () => {
    const [scientists, setScientists] = useState([]);

    const scientistsApiEndpoint =
      "http://91.147.92.207:3000/api/v1/scientists-sovet-list/";

    useEffect(() => {
      const fetchScientists = async () => {
        try {
          const { data } = await axios.get(scientistsApiEndpoint, {
            withCredentials: true,
          });
          setScientists(data.data);
        } catch (error) {
          console.error("Error fetching scientists data:", error);
        }
      };

      fetchScientists();
    }, []);

    return (
      <>
        {scientists.map((scientist) => (
          <div key={scientist.id} className="mb-6 w-full">
            <div className="px-2">
              <img
                src={`https://institut.hello-olzhas.kz${scientist.image}`}
                alt={scientist.name_en}
                className="w-full object-cover h-64 "
              />

              <div className="bg-[#2C4FA4] p-2 text-white rounded-b-md flex relative">
                <div>
                  <p className="text-lg">{scientist.name_en}</p>
                  <p className="text-[#CFCFCF] line-clamp-1">
                    {scientist.title_job_en}
                  </p>
                </div>
                <div className="mt-5">
                  {scientist.orcid && (
                    <a
                      href={scientist.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={orcid}
                        className="object-cover absolute right-2 top-8"
                        alt="ORCID"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="w-full bg-[#e4e4e4]  ">
      <div
        className="xl:h-[500px] md:h-full h-[150px]  relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(https://th.bing.com/th/id/OIG.HrXXqhDDdsqbVnpRok3O?w=1024&h=1024&rs=1&pid=ImgDetMain)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <HeaderCouncil />
      </div>
      <div className="max-w-screen-xl mx-auto font-nunito">
        <div className="mt-2 grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 xl:gap-0">
          <CouncilPerson />
        </div>
        <Link to="/en/aboutus">
          <button className="px-2 text-lg font-nunito hover:text-blue-400">
            Go back
          </button>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-[#D4D4D4] mt-20" />

      <FooterEn />
    </div>
  );
}

export default CouncilEn;
