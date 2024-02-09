import React, { useEffect, useState } from "react";
import logo from "../../../../../../components/images/logo.png";

import rec from "../../../PDF/recommendations.pdf";
import tiktok from "../../../SVG/tiktok.svg";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FooterEn from "../../../FooterEn";
import historybg from "../../../../../../components/images/achievement.png";
import TheHistoryCardInfoEn from "../TheHistoryCardInfoEn";
import useVisualImpairmentScript from "../../../../../../components/Hooks/useEye";

function HistoryCardInfoEn() {
  useEffect(() => {
    // При монтировании компонента, прокручиваем страницу наверх
    window.scrollTo(0, 0);
  }, []);
  function SocialLink({ href, iconSrc, alt }) {
    return (
      <a href={href}>
        <div className="border border-[#eaeaea] bg-[#e4e4e4] flex justify-center items-center w-12 h-12 rounded-full ">
          <img src={iconSrc} className="w-5" alt={alt} />
        </div>
      </a>
    );
  }
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(" ENG");
  const handleSpecialButtonClick = useVisualImpairmentScript();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();
  const handleLanguageChange = (language) => {
    // В зависимости от выбранного языка генерируйте соответствующую ссылку
    let link;
    switch (language) {
      case "ENG":
        link = `/en/history/${cardId}`;
        break;
      case "KAZ":
        link = `/history/${cardId}`;
        break;
      case "РУС":
        link = `/ru/history/${cardId}`;
        break;
      default:
        link = `/history/${cardId}`;
    }

    // Перенаправление на сгенерированную ссылку
    navigate(link);
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleState = (stateSetter) => {
    stateSetter((prevState) => !prevState);
  };
  const { cardId } = useParams();
  let cardDate = "";
  if (cardId === "1") {
    cardDate = `October 25, 1990`;
  } else if (cardId === "2") {
    cardDate = `December 16, 1991`;
  } else if (cardId === "3") {
    cardDate = `August 30, 1995`;
  } else if (cardId === "4") {
    cardDate = ``;
  } else if (cardId === "5") {
    cardDate = ``;
  } else if (cardId === "6") {
    cardDate = ``;
  } else if (cardId === "7") {
    cardDate = ``;
  } else if (cardId === "8") {
    cardDate = ``;
  } else if (cardId === "9") {
    cardDate = ``;
  }
  return (
    <div className="w-full bg-[#e4e4e4]  ">
      <div
        className="relative bg-cover bg-center xl:h-[500px] md:h-[50vh] h-[25vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${historybg})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // height: "50vh", // Set a fixed height for the image container
        }}
      >
        <div className="bg-transparent font-nunito ">
          <div className="p-2 ">
            <header>
              <nav className=" flex flex-col mx-auto  max-w-screen-xl">
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
                    <div className="hidden sm:flex flex-row items-center w-full h-10 px-2 rounded-lg bg-transparent">
                      
                    </div>

                    <div className="flex items-center">
                       <img
      className="hidden xl:block lg:block"
      id="specialButton"
      style={{ cursor: "pointer" }}
      src="/pdf/eye.png"
      alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
      title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
      onClick={handleSpecialButtonClick}
    />
                      {/* <img src={eye}></img> */}
                      {/* международка лого */}
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.4993 0.0633029C8.67581 0.28838 6.90854 0.944854 5.38503 1.9577C3.02241 3.52855 1.30202 5.82621 0.495727 8.499C0.30353 9.11796 0.116021 10.0605 0.0457054 10.6935C-0.0152351 11.2796 -0.0152351 12.7145 0.0457054 13.3006C0.55198 18.0554 3.91308 22.1162 8.50237 23.5041C9.12115 23.6964 10.0634 23.8839 10.6962 23.9543C11.2822 24.0152 12.7166 24.0152 13.3026 23.9543C16.0777 23.6589 18.6513 22.3975 20.6295 20.3624C21.9843 18.9604 22.9453 17.338 23.5031 15.4951C23.85 14.351 24 13.3006 24 11.9877C24 9.8307 23.4843 7.85659 22.4484 6.05129C20.5358 2.72202 17.2544 0.536902 13.4526 0.0633029C12.7448 -0.021101 11.2025 -0.021101 10.4993 0.0633029ZM11.5681 3.21438L11.5541 5.59644L11.1556 5.60582C10.0024 5.63865 8.58675 5.77463 7.33512 5.97626C6.9226 6.04191 6.5054 6.10756 6.40695 6.12162L6.22882 6.14976L6.30851 5.94344C6.46789 5.52142 6.97417 4.50388 7.23199 4.08186C8.12266 2.61886 9.25241 1.58726 10.4759 1.11366C10.7759 1.00112 11.3338 0.851072 11.5213 0.841694C11.5681 0.837005 11.5775 1.32467 11.5681 3.21438ZM12.9604 0.940165C13.0917 0.9683 13.3542 1.0527 13.5464 1.12773C14.723 1.59195 15.8105 2.57197 16.7059 3.9787C16.9309 4.33039 17.545 5.55424 17.6903 5.94344L17.77 6.14976L17.5919 6.12162C17.4934 6.10756 17.0762 6.04191 16.6637 5.97626C15.4121 5.77463 13.9964 5.63865 12.8432 5.60582L12.4447 5.59644L12.4307 3.21907L12.4213 0.837005L12.5713 0.865139C12.6557 0.879207 12.8338 0.91203 12.9604 0.940165ZM7.97734 1.81234C6.86635 2.93303 5.99912 4.30694 5.45534 5.80745C5.3569 6.07942 5.27721 6.3045 5.27252 6.31388C5.26784 6.31857 4.58811 6.44048 3.76776 6.58116C2.94741 6.72183 2.2255 6.84843 2.16925 6.8625C2.07549 6.88595 2.08018 6.85781 2.25831 6.54833C3.31305 4.668 5.03345 3.01275 6.92729 2.05617C7.36325 1.83578 8.2211 1.45597 8.30548 1.45128C8.31955 1.44659 8.17423 1.61071 7.97734 1.81234ZM16.1059 1.6154C18.4732 2.56728 20.5076 4.34445 21.7405 6.54833C21.9186 6.85781 21.9233 6.88595 21.8296 6.8625C21.7733 6.84843 21.0514 6.72183 20.2311 6.58116C19.4107 6.44048 18.731 6.31857 18.7263 6.31388C18.7216 6.3045 18.6419 6.07942 18.5435 5.80745C17.9997 4.30694 17.1325 2.93303 16.0215 1.81234C15.8246 1.61071 15.6699 1.44659 15.6793 1.44659C15.684 1.44659 15.8762 1.52161 16.1059 1.6154ZM11.5775 11.575H5.23502L5.26315 10.9514C5.31471 9.91511 5.46003 8.96322 5.74598 7.7675C5.90537 7.11571 5.91943 7.0782 6.03662 7.05475C6.10694 7.04069 6.60853 6.95628 7.14761 6.86719C8.77894 6.59991 9.92275 6.48268 10.9822 6.46862L11.5775 6.46393V11.575ZM13.9964 6.51082C15.0558 6.59522 17.0809 6.87188 17.9622 7.05475C18.0794 7.0782 18.0935 7.11571 18.2528 7.7675C18.5388 8.96322 18.6841 9.91511 18.7357 10.9514L18.7638 11.575H12.4213V6.46393H12.9088C13.1713 6.46393 13.6636 6.48737 13.9964 6.51082ZM4.89282 7.66903C4.6303 8.76628 4.40529 10.3934 4.40529 11.1999V11.575H0.833244L0.866058 11.139C0.898872 10.6466 1.0395 9.80257 1.17545 9.25394C1.28795 8.81317 1.58797 7.91286 1.64422 7.8519C1.66766 7.82377 2.43176 7.67372 3.33649 7.51429C4.24591 7.35486 4.99126 7.22356 4.99595 7.21887C5.00063 7.21418 4.95376 7.4205 4.89282 7.66903ZM20.6483 7.51898C21.5014 7.65965 22.2327 7.79563 22.2843 7.81439C22.5234 7.91286 23.0484 9.96669 23.1328 11.139L23.1656 11.575H19.5935V11.1999C19.5935 10.3934 19.3685 8.76628 19.106 7.67372C19.0404 7.40175 19.0216 7.22825 19.0498 7.23763C19.0779 7.24701 19.7998 7.37361 20.6483 7.51898ZM4.40529 12.7942C4.40529 13.6007 4.6303 15.2279 4.89282 16.3204C4.95845 16.5924 4.9772 16.7659 4.94907 16.7565C4.92094 16.7471 4.20372 16.6205 3.35055 16.4752C2.50208 16.3345 1.7661 16.1985 1.71454 16.1797C1.47546 16.0813 0.950437 14.0274 0.866058 12.8505L0.833244 12.4191H4.40529V12.7942ZM11.5775 17.5302H11.09C10.1384 17.5302 8.73675 17.3895 7.14761 17.1269C6.60853 17.0379 6.10694 16.9534 6.03662 16.9394C5.91943 16.9159 5.90537 16.8784 5.74598 16.2266C5.46003 15.0309 5.31471 14.079 5.26315 13.038L5.23502 12.4191H11.5775V17.5302ZM18.7357 13.038C18.6841 14.079 18.5388 15.0309 18.2528 16.2266C18.0935 16.8784 18.0794 16.9159 17.9622 16.9394C17.8919 16.9534 17.395 17.0379 16.8512 17.1269C15.2621 17.3895 13.8604 17.5302 12.9088 17.5302H12.4213V12.4191H18.7638L18.7357 13.038ZM23.1328 12.8505C23.0484 14.0274 22.5234 16.0813 22.2843 16.1797C22.2327 16.1985 21.5014 16.3345 20.6483 16.4752C19.7998 16.6205 19.0779 16.7471 19.0498 16.7565C19.0216 16.7659 19.0404 16.5924 19.106 16.3204C19.3685 15.2279 19.5935 13.6007 19.5935 12.7942V12.4191H23.1656L23.1328 12.8505ZM3.76776 17.413C4.58811 17.5537 5.26784 17.6756 5.27252 17.6803C5.27721 17.6896 5.3569 17.9147 5.45534 18.1867C5.99912 19.6872 6.86635 21.0611 7.97734 22.1818C8.17423 22.3834 8.32892 22.5475 8.31955 22.5475C8.31486 22.5475 8.12266 22.4725 7.89296 22.3787C5.52566 21.4269 3.49119 19.6497 2.25831 17.4458C2.08018 17.1363 2.07549 17.1082 2.16925 17.1316C2.2255 17.1457 2.94741 17.2723 3.76776 17.413ZM21.7405 17.4458C20.5076 19.6497 18.4732 21.4269 16.1059 22.3787C15.8762 22.4725 15.684 22.5475 15.6793 22.5475C15.6699 22.5475 15.8246 22.3834 16.0215 22.1818C17.1325 21.0611 17.9997 19.6872 18.5435 18.1867C18.6419 17.9147 18.7263 17.6896 18.7263 17.6803C18.7357 17.6709 21.4499 17.1879 21.8999 17.1129C21.9186 17.1129 21.8483 17.2629 21.7405 17.4458ZM7.47576 18.0413C8.643 18.2242 9.64149 18.3227 10.5931 18.3555C11.0197 18.3696 11.4134 18.3883 11.4744 18.4024L11.5775 18.4211V20.7891C11.5775 22.0927 11.5681 23.1571 11.5541 23.1571C11.54 23.1571 11.3713 23.1243 11.1791 23.0868C9.68836 22.7773 8.29611 21.6566 7.23199 19.9123C6.97417 19.4903 6.46789 18.4727 6.30851 18.0507L6.22882 17.8444L6.40695 17.8725C6.5054 17.8866 6.98823 17.9616 7.47576 18.0413ZM17.6903 18.0554C17.6481 18.1679 17.4794 18.529 17.32 18.8666C16.1527 21.3237 14.5167 22.8008 12.5994 23.129L12.4213 23.1618V18.4211L12.5291 18.4024C12.5854 18.3883 12.9791 18.3696 13.4057 18.3555C13.8323 18.3414 14.498 18.2992 14.8824 18.257C15.5949 18.1867 17.4419 17.9147 17.4794 17.8772C17.4887 17.8678 17.5591 17.8584 17.6341 17.8584H17.7653L17.6903 18.0554Z"
                      fill="white"
                    />
                  </svg> */}
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
                          <div className="absolute z-10 mt-3 ml-4 w-[80px] bg-black divide-y divide-gray-200 rounded-lg shadow-lg">
                            <ul>
                              <li
                                onClick={() => handleLanguageChange("ENG")}
                                className="cursor-pointer p-3"
                              >
                                ENG
                              </li>
                              <li
                                onClick={() => handleLanguageChange("KAZ")}
                                className="cursor-pointer p-3"
                              >
                                ҚАЗ
                              </li>
                              <li
                                onClick={() => handleLanguageChange("РУС")}
                                className="cursor-pointer p-3"
                              >
                                РУС
                              </li>
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
                              <div className=" flex items-center w-full h-10 px-4 py-1  bg-[#0069B5] relative">
                                <input
                                  type="search"
                                  placeholder="Search"
                                  className="flex w-full h-full px-3   bg-white rounded text-gray-600 bg-transparent focus:outline-none"
                                />
                                
                              </div>
                              <div className=" flex items-center w-full h-10 px-4 py-1  bg-[#0069B5] relative">
                                
                              </div>
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
                                      <Link to="/en/recommendations">
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
                                href="https://www.facebook.com/people/%D0%9C%D0%B5%D0%BC%D0%BB%D0%B5%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D1%80%D0%B8%D1%85%D1%8B-%D0%B8%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%D1%8B-%D0%98%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8-%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B0/100064573574874/?hc_location=stream"
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
                          <button className="text-white whitespace-nowrap font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex hover:scale-110  items-center">
                            Scientific publications
                          </button>
                          <a href={rec} download="Reccomendations.pdf">
                            <button className=" text-white whitespace-nowrap font-medium rounded-lg text-base px-5  py-2.5 text-left inline-flex hover:scale-110  items-center ">
                              Recommendations
                            </button>
                          </a>
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

        {/* <hr className="w-full h-[1px] bg-gray-500 bg-opacity-40 " /> */}
        <div className=" mt-16 sm:mt-48 xl:mt-[300px] lg:mt-[180px] md:mt-[250px] mx-auto max-w-screen-xl   ">
          <div className="p-4 text-white xl:text-3xl md:text-xl text-lg font-semibold text-left   ">
            {cardDate}
          </div>
        </div>
      </div>

      <TheHistoryCardInfoEn />
      <div className="w-full h-[1px] bg-[#D4D4D4]  mt-20"></div>
      <FooterEn />
    </div>
  );
}

export default HistoryCardInfoEn;
