import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import yourPDF from "../PDF/Устав.pdf";
import DOMPurify from "dompurify";
import axios from "axios";
function AboutCardEn() {
  const downloadPdf = () => {
    // Создаем временную ссылку для скачивания PDF
    const link = document.createElement("a");
    link.href = yourPDF;
    link.download = "Charter.pdf"; // Имя файла, которое будет отображаться при скачивании

    // Добавляем ссылку на страницу и автоматически симулируем клик
    document.body.appendChild(link);
    link.click();

    // Удаляем временную ссылку
    document.body.removeChild(link);
  };

  const [activeMenuItem, setActiveMenuItem] = useState("about");
  const [items, setItems] = useState([]);

  const handleMenuClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const fetchInstituteStructure = async () => {
    try {
      const response = await axios.get(
        "http://admin.history-state.kz/api/v1/institutes-structure-list/"
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching institute structure:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const instituteStructureData = await fetchInstituteStructure();
      setItems(instituteStructureData);
    };

    fetchData();
  }, []);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setExpandedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };
  const mediaUrl = "http://admin.history-state.kz/media/";
  return (
    <div className="mb-[145px] flex flex-col mx-auto max-w-screen-xl   px-4 font-nunito ">
      <div className="flex flex-row w-full gap-2 mt-3 items-center w-[235px] h-[25px]">
        {/* ... */}
      </div>
      {/* Линия горизонтальная */}
      <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>

      <div className="flex flex-col md:flex-row">
        <div className=" w-1/2">
          <div className=""></div>
          <ul className="space-y-3">
            <li
              className={`mt-6 text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "about" && "active"
              }`}
            >
              <Link href="#about" onClick={() => handleMenuClick("about")}>
                About us
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "leadership" && "active"
              }`}
            >
              <Link href="#info" onClick={() => handleMenuClick("info")}>
                {" "}
                Ethics
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "institutestructure" && "active"
              }`}
            >
              <Link
                href="#leadership"
                onClick={() => handleMenuClick("leadership")}
              >
                Management
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "council" && "active"
              }`}
            >
              <Link
                href="#institutestructure"
                onClick={() => handleMenuClick("institutestructure")}
              >
                {" "}
                Structure of the Institute
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "info" && "active"
              }`}
            >
              <Link href="#council" onClick={() => handleMenuClick("council")}>
                {" "}
                Academic Council
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "scientists" && "active"
              }`}
            >
              <Link href="#" onClick={() => handleMenuClick("scientists")}>
                {" "}
                Young researchers
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-full">
          {activeMenuItem === "about" && (
            <div id="about">
              <h1 className="mt-6 text-[#333] text-lg font-semibold">
                About Us
              </h1>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    About Us
                  </div>
                  <div className="p-2 text-lg">
                    <p>
                      Non-commercial scientific research organization,
                      possessing the status of a legal entity, established in
                      the organizational and legal form of a state institution
                      to fulfill the functions of scientific-analytical support
                      of the process of building state formation and historical
                      consciousness, theoretical comprehension of the modern
                      history of Kazakhstan
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mt-2 text-center">
                  <Link to="/en/aboutus/AboutInstitute/">
                    <button className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
                      Show More
                    </button>
                  </Link>
                </div>
              </div>
              <h1 className="mt-6 text-[#333] text-lg font-semibold">
                Achievements in 15 Years of Existence
              </h1>
              <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>
              <div className="grid md:grid-cols-2 items-center space-y-2 overflow-hidden">
                <div className="flex items-center gap-2 ">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    23
                  </span>
                  <span>Conducted Research Studies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    99
                  </span>
                  <span>Published Monographs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    42
                  </span>
                  <span>Research Staff Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    3382
                  </span>
                  <span>
                    Popularization of <br />
                    Author's Research
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeMenuItem === "leadership" && (
            <div className="flex flex-col mt-6">
              <h1
                id="leadership"
                className="mb-2 text-[#333] text-lg font-semibold"
              >
                Leadership
              </h1>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    <h1 id="leadership" className="">
                      Leadership
                    </h1>
                  </div>
                  <div className=" p-2">
                    <div className="mt-3 text-[#333] text-lg font-normal">
                      The goal of the Institute of State History (hereinafter -
                      the Institute) is scientific-analytical and expert support
                      for the process of shaping the country's state and
                      historical identity, systemic and theoretical
                      justification of modern history of Kazakhstan.
                    </div>
                    <div className="mt-5 text-[#333] text-lg font-normal">
                      The Institute has a highly professional personnel
                      potential to carry out its mission. The Institute's team
                      is characterized by a high level of professionalism, and
                      some of the Institute's staff are fluent in English and
                      Turkish languages.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2 text-center">
                <Link to="/en/aboutus/Management/">
                  <button className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
                    Show Leadership
                  </button>
                </Link>
              </div>
            </div>
          )}

          {activeMenuItem === "institutestructure" && (
            <div className="mt-[60px]">
              <h1
                id="institutestructure"
                className="mb-5 text-[#333] text-lg font-semibold"
              >
                Institute Structure
              </h1>
              <div className="flex flex-col font-normal">
                {items.data.map((item) => (
                  <div
                    key={item.id}
                    className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white"
                  >
                    <div
                      className={`bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer ${
                        expandedItemId === item.id ? "expanded" : ""
                      }`}
                      onClick={() => handleItemClick(item.id)}
                    >
                      {item.title_en}
                    </div>
                    {expandedItemId === item.id && (
                      <div className="p-3">
                        <p
                          className="text-[#333] text-lg"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              item.full_text_en.replace(
                                /src=["']\/media\//g,
                                `src="${mediaUrl}`
                              )
                            ),
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeMenuItem === "council" && (
            <div className="mt-6 flex flex-col">
              <h1 id="info" className="mb-4 text-[#333] text-lg font-semibold">
                Academic Council
              </h1>

              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    Regulations on the Academic Council
                  </div>
                  <div className=" p-2">
                    <a
                      href="#council"
                      download="?.pdf"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Go to the regulations
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    The work plan of the Academic Council
                  </div>
                  <div className=" p-2">
                    <a
                      href="#council"
                      download="?.pdf"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Go to the plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    The composition of the Academic Council
                  </div>
                  <div className=" p-2">
                    <Link
                      to="/en/council"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Show the academic council
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenuItem === "info" && (
            <div className="mt-6 flex-flex-col">
              <h1 id="info" className="mb-4 text-[#333] text-lg font-semibold">
                Charter
              </h1>
              <div className="mt-4 border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                  Strategy
                </div>
                <div className="p-2  flex flex-col">
                  <span className="mt-3 text-[#333] text-lg font-normal">
                    Strategic Development Plan "Institute of State History"
                    2022-2026
                  </span>
                  <a
                    href="#info"
                    download="Strategy_2022-2026.pdf"
                    className="mt-3 mb-2 text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300 rounded-md text-center"
                  >
                    Go to the Charter
                  </a>
                </div>
              </div>

              <div className="mt-4 border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                  Charter
                </div>
                <div className="p-2 flex flex-col items-center">
                  <span className="mt-3 text-[#333] font-normal text-lg">
                    Republican State Institution "Institute of State History"
                    Ministry of Science and Higher Education of the Republic of
                    Kazakhstan
                  </span>
                  <a
                    onClick={downloadPdf}
                    download="Charter_ISH_MSE_RK.pdf"
                    className="mt-3 mb-2 text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300 rounded-md"
                  >
                    Go to the Charter
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeMenuItem === "scientists" && (
            <div className="mt-6 flex-flex-col">
              <div className="flex flex-col">
                <h1
                  id="scientists"
                  className="mt-6 text-[#333] text-lg font-semibold"
                >
                  Young Scientists
                </h1>
                <div className="mt-4 flex flex-col font-normal">
                  <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                    <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                      Young Scientists
                    </div>
                    <div className=" p-2">
                      <p className="text-lg font-normal">
                        The Institute actively publishes scientific works and
                        participates in scientific publications. Over 13 years
                        of its activity, more than 70 scientific works have been
                        published. This includes the textbook "Modern History of
                        Kazakhstan" for students of non-historical specialties,
                        the reader "Modern History of Kazakhstan," directories
                        on political parties, a dictionary of political
                        technologies and terms, as well as many monographs and
                        books.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mt-2 text-center">
                    <Link to="/en/young-scientists">
                      <button className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
                        Show Scientists
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutCardEn;
