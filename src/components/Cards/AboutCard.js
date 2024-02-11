import { Link } from "react-router-dom";
import { useState, React } from "react";
import yourPDF from "../PDF/Устав.pdf";
import { useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import orcid from "../../components/imgwork/orcid.png";

function AboutCard() {
  const downloadPdf = () => {
    // Создаем временную ссылку для скачивания PDF
    const link = document.createElement("a");
    link.href = yourPDF;
    link.download = "Устав.pdf"; // Имя файла, которое будет отображаться при скачивании

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
        "http://91.147.92.207:3000/api/v1/institutes-structure-list/"
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
  const mediaUrl = "http://91.147.92.207:3000/media/";
  const handleItemClick = (itemId) => {
    setExpandedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <div className="mb-[145px] flex flex-col mx-auto max-w-screen-xl   px-4  ">
      <div className="flex flex-row  gap-2 mt-3 items-center w-[235px] h-[25px]"></div>
      {/* Линия горизонтальная */}
      <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>

      <div className="flex flex-col md:flex-row">
        <div className=" w-1/2  ">
          <ul className="space-y-3">
            <li
              className={`mt-6 text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "about" && "active"
              }`}
            >
              <Link href="#about" onClick={() => handleMenuClick("about")}>
                О нас
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "leadership" && "active"
              }`}
            >
              <Link href="#info" onClick={() => handleMenuClick("info")}>
                {" "}
                Устав
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
                Руководство
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
                Структура института
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "info" && "active"
              }`}
            >
              <Link href="#council" onClick={() => handleMenuClick("council")}>
                {" "}
                Ученый совет
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "scientists" && "active"
              }`}
            >
              <Link href="#" onClick={() => handleMenuClick("scientists")}>
                {" "}
                Молодые ученые
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-full">
          {activeMenuItem === "about" && (
            <div id="about">
              <h1 className="mt-6 text-[#333] text-lg font-semibold">О нас</h1>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    О нас
                  </div>
                  <div className="p-2  text-lg">
                    <p>
                      {" "}
                      Некоммерческая научно-исследовательская организация,
                      обладающая статусом юридического лица, созданная в
                      организационно-правовой форме государственного учреждения
                      для осуществления функцией научно-аналитического
                      обеспечения процесса строительства государственного
                      формирования и исторического сознания, теоретического
                      осмысления современной истории Казахстана
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mt-2 text-center">
                  <Link to="/ru/aboutus/AboutInstitute/">
                    <button className="text-slate-800 text-xl font-normal  hover:text-blue-400 underline">
                      Показать больше
                    </button>
                  </Link>
                </div>
              </div>
              <h1 className="mt-6 text-[#333] text-lg font-semibold">
                За 15 лет существования мы достигли следущих результатов
              </h1>

              <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>
              <div className="grid md:grid-cols-2 items-center space-y-2 overflow-hidden">
                <div className="flex items-center gap-2 ">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    23
                  </span>
                  <span className="">Проведеных исследований</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    99
                  </span>
                  <span>Опубликованных монографий</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    42
                  </span>
                  <span>Научных работника</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    3382
                  </span>
                  <span className="">
                    Популяризация <br />
                    авторских исследований
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
                Руководство
              </h1>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    <h1 id="leadership" className="">
                      Руководство
                    </h1>
                  </div>
                  <div className=" p-2">
                    {" "}
                    <div className="mt-3 text-[#333] text-lg font-normal">
                      Цель Института истории государства (далее - Институт) -
                      научно-аналитическое и экспертное обеспечение процесса
                      формирования в стране государственного и исторического
                      самосознания, системное и теоретическое обоснование
                      современной истории Казахстана.
                    </div>
                    <div className="mt-5 text-[#333] text-lg font-normal">
                      Институт располагает высокопрофессиональным кадровым
                      потенциалом для выполнения своего предназначения.
                      Коллектив Института отличается высоким профессиональным
                      уровнем, некоторые сотрудники Института свободно владеют
                      английским, турецким языками.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2 text-center">
                <Link to="/ru/aboutus/Management/">
                  <button className="text-[#2C4FA4] text-xl font-normal hover:underline hover:text-blue-400">
                    Показать руководство
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
                Структура Института
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
                      {item.title}
                    </div>
                    {expandedItemId === item.id && (
                      <div className="p-3">
                        <p
                          className="text-[#333] text-lg"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              item.full_text.replace(
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
                Ученый совет
              </h1>

              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    Положение об ученом совете
                  </div>
                  <div className=" p-2">
                    <a
                      href="#council"
                      download="?.pdf"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Перейти к положению
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    План работы ученого совета
                  </div>
                  <div className=" p-2">
                    <a
                      href="#council"
                      download="?.pdf"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Перейти к плану
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    Состав ученого совета
                  </div>
                  <div className=" p-2">
                    <Link
                      to="/ru/council"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Показать ученый совет
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenuItem === "info" && (
            <div className="mt-6 flex-flex-col">
              <h1 id="info" className="mb-4 text-[#333] text-lg font-semibold">
                Устав
              </h1>
              <div className="mt-4 border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                  Стратегия
                </div>
                <div className="p-2  flex flex-col">
                  <span className="mt-3 text-[#333] text-lg font-normal">
                    Стратегический план развития «Института истории государства
                    «2022-2026»
                  </span>
                  <a
                    download="Стратегия_2022-2026.pdf"
                    className="mt-3 mb-2 text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300 rounded-md text-center"
                  >
                    Перейти к уставу
                  </a>
                </div>
              </div>

              <div className="mt-4 border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                  Устав
                </div>
                <div className="p-2 flex flex-col items-center">
                  <span className="mt-3 text-[#333] font-normal text-lg">
                    Республиканского государственного учреждения «Институт
                    истории государства» Министерства науки и высшего
                    образования Республики Казахстан
                  </span>
                  <a
                    onClick={downloadPdf}
                    className="mt-3 mb-2 text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300 rounded-md cursor-pointer"
                  >
                    Перейти к уставу
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
                  Молодые ученые
                </h1>
                <div className="mt-4 flex flex-col font-normal">
                  <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                    <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                      Молодые ученые
                    </div>
                    <div className=" p-2">
                      <p className="text-lg font-normal">
                        Институт активно издает научные труды и участвует в
                        научных публикациях. За 13 лет своей деятельности было
                        издано более 70 научных работ. Это включает учебник
                        "Современная история Казахстана" для студентов
                        неисторических специальностей, хрестоматию "Современная
                        история Казахстана", справочники о политических партиях,
                        словарь по политическим технологиям и терминам, а также
                        множество монографий и книг.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mt-2 text-center">
                    <Link to="/ru/young-scientists">
                      <button className="text-slate-800 text-xl font-normal hover:underline hover:text-blue-400">
                        Показать ученых
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

export default AboutCard;
