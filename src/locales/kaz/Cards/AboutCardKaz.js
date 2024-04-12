import { React, useState, useEffect } from "react";
import yourPDF from "../PDF/ЖАРГЫКАЗ-РУС.pdf";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
function AboutCardKaz() {
  const downloadPdf = () => {
    // Создаем временную ссылку для скачивания PDF
    const link = document.createElement("a");
    link.href = yourPDF;
    link.download = "Жарғы.pdf"; // Имя файла, которое будет отображаться при скачивании

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
      // console.log(response.data);
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
    <div className="mb-[145px] flex flex-col mx-auto max-w-screen-xl   px-4 font-montserrat ">
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
                Институт туралы
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "leadership" && "active"
              }`}
            >
              <Link href="#info" onClick={() => handleMenuClick("info")}>
                {" "}
                Ереже
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
                Басшылық
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
                Құрылым
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "info" && "active"
              }`}
            >
              <Link href="#council" onClick={() => handleMenuClick("council")}>
                {" "}
                Ғылыми кеңес
              </Link>
            </li>
            <li
              className={`text-[#333] text-base font-semibold hover:underline ${
                activeMenuItem === "scientists" && "active"
              }`}
            >
              <Link href="#" onClick={() => handleMenuClick("scientists")}>
                {" "}
                Жас ғалымдар
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-full">
          {activeMenuItem === "about" && (
            <div id="about">
              <h1 className="mt-6 text-[#333] text-lg font-semibold">
                Институт туралы
              </h1>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    Институт туралы
                  </div>
                  <div className="p-2  text-lg">
                    <p>
                      {" "}
                      Қазақстанның қазіргі тарихын теориялық негіздеу,
                      мемлекеттік құрылыс және тарихи сананы қалыптастыру
                      процесін ғылыми-сараптамалық қамтамасыз ету функциясын
                      жүзеге асыру мақсатында мемлекеттік мекеме ретінде
                      құқықтық нысанада құрылған заңды тұлға мәртебесіндегі
                      коммерциялық емес ғылыми-зерттеу ұйымы
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mt-2 text-center">
                  <Link to="/aboutus/AboutInstitute/">
                    <button className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
                      Көбірек көрсету
                    </button>
                  </Link>
                </div>
              </div>
              <h1 className="mt-6 text-[#333] text-lg font-semibold">
                15 жыл ішінде біз келесі нәтижелерге қол жеткіздік
              </h1>

              <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>
              <div className="grid md:grid-cols-2 items-center space-y-2 overflow-hidden">
                <div className="flex items-center gap-2 ">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    23
                  </span>
                  <span className="">Жүргізілген зерттеу</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    99
                  </span>
                  <span>Жарияланған монографиялар</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    42
                  </span>
                  <span>Ғылыми қызметкерлер</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-5xl text-[#0069B5] font-semibold">
                    3382
                  </span>
                  <span className="">
                    Авторлық зерттеулерді <br /> кеңінен тарату
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
                Басшылық
              </h1>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    <h1 id="leadership" className="">
                      Басшылық
                    </h1>
                  </div>
                  <div className=" p-2">
                    {" "}
                    <div className="mt-5 text-[#333] text-lg font-normal">
                      Институт ұжымы жоғары кәсіби деңгейімен ерекшеленеді,
                      кейбір қызметкерлері ағылшын, түрік тілдерін еркін
                      меңгерген, бұл жоғары кәсіби кадрлық әлеует институттың
                      алға қойған мақсаттарын орындауында маңызды рөл атқарады
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2 text-center">
                <Link to="/aboutus/Management/">
                  <button className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
                    Басшылық көрсету
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
                Құрылым
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
                      {item.title_kk}
                    </div>
                    {expandedItemId === item.id && (
                      <div className="p-3">
                        <p
                          className="text-[#333] text-lg"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              item.full_text_kk.replace(
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
                Ғылыми кеңес
              </h1>

              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    Ғылыми Кеңес туралы ереже
                  </div>
                  <div className=" p-2">
                    <a
                      href="#council"
                      download="?.pdf"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Ережеге өту
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    Ғылыми кеңестің жұмыс жоспары
                  </div>
                  <div className=" p-2">
                    <a
                      href="#council"
                      download="?.pdf"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Жоспарға өту
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col font-normal">
                <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                  <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                    Ғылыми кеңестің құрамы
                  </div>
                  <div className=" p-2">
                    <Link
                      to="/council"
                      className="text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300   rounded-md"
                    >
                      Ғылыми кеңесті көрсету
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenuItem === "info" && (
            <div className="mt-6 flex-flex-col">
              <h1 id="info" className="mb-4 text-[#333] text-lg font-semibold">
                Ереже
              </h1>
              <div className="mt-4 border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                  Стратегия
                </div>
                <div className="p-2  flex flex-col">
                  <span className="mt-3 text-[#333] text-lg font-normal">
                    "МЕМЛЕКЕТ ТАРИХЫ ИНСТИТУТЫ" 2022-2026 жылдарына стратегиялық
                    даму жоспары
                  </span>
                  <a
                    href="#info"
                    download="Стратегия_2022-2026.pdf"
                    className="mt-3 mb-2 text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300 rounded-md text-center"
                  >
                    Жоспарға өту
                  </a>
                </div>
              </div>

              <div className="mt-4 border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                  Жарғы
                </div>
                <div className="p-2 flex flex-col items-center">
                  <span className="mt-3 text-[#333] font-normal text-lg">
                    Қазақстан Республикасы Ғылым және жоғары білім
                    министрлігінің "Мемлекет тарихы институты" республикалық
                    мемлекеттік мекемесінің жарғысы
                  </span>
                  <a
                    onClick={downloadPdf}
                    download="Устав_РГУ_ИИГ_МНиВО_РК.pdf"
                    className="mt-3 mb-2 text-[#2C4FA4] underline font-normal text-lg hover:text-blue-300 rounded-md"
                  >
                    Жарғыға өтіңіз
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
                  Жас ғалымдар
                </h1>
                <div className="mt-4 flex flex-col font-normal">
                  <div className="border-t border-b border-solid rounded-lg overflow-hidden shadow-md mb-4 bg-white">
                    <div className="bg-[#2C4FA4] text-white p-3 font-semibold cursor-pointer">
                      Жас ғалымдар
                    </div>
                    <div className=" p-2">
                      <p className="text-lg font-normal">
                        Институт ғылыми еңбектер шығаруда белсенді қызмет
                        атқаруда, сондай-ақ, ғылыми жарияланымдарға қатысады. 14
                        жыл ішінде 70-тен астам ғылыми жұмыстар жарық көрді.
                        Олардың қатарына Жоғары оқу орындарының тарихшы емес
                        мамандықтарына арналған "Қазіргі Қазақстан тарихы"
                        оқулығы, "Тәуелсіз Қазақстан тарихы" хретоматиясы, саяси
                        партиялар туралы анықтамалықтар, саяси технологиялар мен
                        терминдер жөніндегі сөздік, сондай-ақ көптеген
                        монографиялар мен кітаптар жатады.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mt-2 text-center">
                    <Link to="/young-scientists">
                      <button className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
                        Жас ғалымдар көрсету
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

export default AboutCardKaz;
