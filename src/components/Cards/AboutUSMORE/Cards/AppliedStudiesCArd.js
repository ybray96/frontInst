import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselimg from "../../../images/pseudo.png";
import { Link } from "react-router-dom";

function AppliedStudiesCardKaz() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const NewsItem = ({ title, date, imageSrc }) => (
    <div className="max-w-sm bg-white border border-gray-300 rounded">
      <img className="h-56 w-96" src={imageSrc} alt="" />

      <div className="p-5 flex flex-col">
        <p
          className="text-lg font-semibold tracking-tight text-gray-900"
          style={{ height: "120px" }} // Fixed height for the title
        >
          {title}
        </p>

        <p
          className="font-normal text-gray-700 text-[#222F49]"
          style={{ height: "20px" }} // Fixed height for the date
        >
          {date}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col mx-auto max-w-screen-xl   px-4 py-2">
    <div className="flex justify-between flex-row w-full gap-2 mt-3 items-center w-[235px] h-[25px]">
      <div className="flex gap-2 ">
        <div className="text-lg  text-[#333333]">Басты</div>
        <div className="text-lg  font-bold text-[#8d8d8d]">&#62;</div>
        <div className="text-lg text-[#8d8d8d]">Зерттеулер</div>
      </div>
      <Link to="/">
        <a className=" text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
          Қайту
        </a>
      </Link>
    </div>
    {/* Линия */}
    <div className="w-full h-[1px] bg-gray-600 bg-opacity-40 mt-4"></div>

    <div className="w-full">
      <div className="flex flex-col  w-full ">
        <h1 className="mt-4 texxt-[#333] text-xl font-bold">
          Тақырып:
          <span className="font-semibold text-lg">
            {" "}
            «Қазіргі Қазақстандағы тарихи жады: әсер ету факторлары, Басты
            идеялар мен трендтер»
          </span>
        </h1>
        <span className="mt-4 text-[#333]  text-lg font-semibold">
          <span className="font-bold text-xl">Мақсаты:</span> <br/>Қазақстан Республикасы
          азаматтарының тарихи естеліктерін құруға әсер ететін мазмұндар,
          факторлар мен механизмдерді зерттеу
        </span>

        <div>
          <span className="mt-4 text-[#333] text-xl font-bold">
            Тапсырмалар:
          </span>
          <ul className=" mt-2 items-center space-y-2 text-lg font-semibold">
            <li>
              −Бұрынғы тарих туралы ұжымдық (әлеуметтік) идеялар
              көріністерінің мазмұнын зерделеу
            </li>
            <li>−Тарихи жадты құрудағы мемлекеттің рөлін зерделеу</li>
            <li>
              −Тарихи жадты құрудағы әлеуметтік топтардың қатысуын зерделеу
            </li>
          </ul>
        </div>
        <span className="mt-4 text-[#333] text-lg font-bold">
          Срок реализации: 2023-2025 годы.
        </span>

        <span className="mt-4   text-lg text-blue-500 font-semibold">
          15 жыл ішінде біз 23 тен астам зерттеу жүргіздік
        </span>
      </div>
    </div>

    {/* Линия */}
    <div className="w-full h-[2px] bg-gray-600 bg-opacity-40 mt-4"></div>
    {/* Форма поиска */}
    <div className="flex flex-col  w-full ">
      <h1 className="mt-4 texxt-[#333] text-xl font-bold">
        Тақырып:
        <span className="font-normal text-lg font-semibold ">
          {" "}
          «Ақмола облысының мәдени-тарихи бастаулары»
        </span>
      </h1>
      <span className="mt-4 text-[#333] text-lg font-semibold  ">
        <span className="font-bold text-xl">Мақсаты:</span> : Ақмола облысының тарихи
        және этномәдени бастауларын зерделеу, өңірдің мәдени-тарихи,
        этнодемографиялық және әлеуметтік-экономикалық дамуының ерекшеліктері
        мен үрдістерін анықтау
      </span>

      <div>
        <span className="mt-4 text-[#333] text-xl font-bold">
          Тапсырмалар:
        </span>
        <ul className=" mt-2 items-center space-y-2 font-normal text-lg font-semibold ">
          <li>
            −XIX–XXI ғасырлар кезеңінде аймақ аумағындағы әкімшілік-аумақтық
            өзгерістер мен демографиялық процестердің ерекшелігін көрсету.
          </li>
          <li>
            −Ақмола облысының XIX–XXI ғасырлардағы мәдени-тарихи дамуының
            қалыптасу процесін, ерекшеліктерін, маңызын сипаттау.
          </li>
          <li>−Өңір халқының қалыптасу кезеңдерін анықтау .</li>
          <li>
            −Қазіргі заманғы туристік саланы дамытудағы мәдени-тарихи әлеуетті
            көрсету.
          </li>
          <li>
            −Тұрақты әлеуметтік-экономикалық дамудың факторлары мен шарттарын
            анықтау.
          </li>
        </ul>
      </div>
      <span className="mt-4 text-[#333] text-lg font-bold">
        Срок реализации: 2023 год
      </span>

      <span className="mt-4  text-lg text-blue-500 font-semibold">
        15 жыл ішінде біз 23 тен астам зерттеу жүргіздік
      </span>
    </div>
    <form className="mt-7">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 pr-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Найдите нужное вам исследование"
          required
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
    </form>

   
  </div>
  );
}

export default AppliedStudiesCardKaz;
