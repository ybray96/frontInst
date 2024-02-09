import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselimg from "../images/pseudo.png";
import { Link } from "react-router-dom";

function AppliedStudiesCard() {
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
      <a href="#">
        <img className="h-56 w-96" src={imageSrc} alt="" />
      </a>

      <div className="p-5 flex flex-col">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-gray-900"
          style={{ height: "60px" }} // Fixed height for the title
        >
          {title}
        </a>

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
          <div className="text-lg  text-[#333333]">Главная</div>
          <div className="text-lg  font-bold text-[#8d8d8d]">&#62;</div>
          <div className="text-lg text-[#8d8d8d]">Исследования</div>
        </div>
        <Link to="/en">
          <p className=" underline  text-lg  text-blue-500  hover:text-blue-700">
            Вернуться назад
          </p>
        </Link>
      </div>
      {/* Линия */}
      <div className="w-full h-[1px] bg-gray-600 bg-opacity-40 mt-4"></div>

      <div className="w-full">
        <div className="flex flex-col  w-full ">
          <h1 className="mt-4 texxt-[#333] text-lg font-bold">
            Тема:
          <span className="font-normal">  «Историческая память в современном Казахстане: факторы влияния,
            основные идеи и тренды»</span>
          </h1>
          <span className="mt-4 text-[#333]  text-lg">
            <span className="font-bold">Цель:</span> : Исследование содержания,
            факторов и механизмов, оказывающих влияние на формирование
            исторической памяти граждан Республике Казахстан
          </span>

          <div>
            <span className="mt-4 text-[#333] text-lg font-bold">Задачи:</span>
            <ul className=" mt-2 items-center space-y-2 font-normal">
              <li>
              −Изучить содержание проявлений коллективных (социальных)
                представлений об историческом прошлом
              </li>
              <li>
              −Изучить роль государства в формировании исторической памяти
              </li>
              <li>
              −Изучить участие социальных групп в формировании исторической
                памяти
              </li>
            </ul>
          </div>
          <span className="mt-4 text-[#333] text-lg font-bold">
            Срок реализации: 2023-2025 годы.
          </span>

          <span className="mt-4 text-[#333]  text-base text-blue-500 font-semibold">
            За 15 лет мы уже провели более 23 исследований
          </span>
          
        </div>
        
      </div>

      {/* Линия */}
      <div className="w-full h-[2px] bg-gray-600 bg-opacity-40 mt-4"></div>
      {/* Форма поиска */}
      <div className="flex flex-col  w-full ">
          <h1 className="mt-4 texxt-[#333] text-lg font-bold">
            Тема:
          <span className="font-normal">  «Культурно-исторические истоки Акмолинской области»</span>
          </h1>
          <span className="mt-4 text-[#333]  text-lg">
            <span className="font-bold">Цель:</span> : Изучение исторических и этнокультурных истоков Акмолинской области, выявление специфики и тенденций культурно-исторического, этнодемографического и социально-экономического развития региона
          </span>

          <div>
            <span className="mt-4 text-[#333] text-lg font-bold">Задачи:</span>
            <ul className=" mt-2 items-center space-y-2 font-normal">
              <li>
              −Показать специфику административно-территориальных изменений и демографических процессов на территории региона в период в XIX–XXI вв.
              </li>
              <li>
              −Охарактеризовать процесс формирования, особенности, значение культурно-исторического развития Акмолинской области в XIX–XXI вв.
              </li>
              <li>
              −Выявить этапы формирования населения региона
              </li>
              <li>
              −Показать культурно-исторический потенциал для развития современной туристической сферы
              </li>
              <li>
              −Определить факторы и условия устойчивого социально-экономического развития
              </li>
            </ul>
          </div>
          <span className="mt-4 text-[#333] text-lg font-bold">
          Срок реализации: 2023 год
          </span>

          <span className="mt-4 text-[#333]  text-base text-blue-500 font-semibold">
            За 15 лет мы уже провели более 23 исследований
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

      <div>
        <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
          Последние исследования
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3  lg:grid-cols-3 gap-7 ">
          <Link>
            <NewsItem
              title="Популяризация отечественной истории в рамках платформы «Digital history»"
              date="27 июля 2023"
              imageSrc="https://file.rendit.io/n/hWICl1Hk6PFsVcEcpZ41.png"
            />
          </Link>

          <Link to="/ru/research">
            <NewsItem
              title="Развитие казахской книги в начале ХХ века"
              date="12 июля 2023"
              imageSrc="https://ru.baribar.kz/wp-content/uploads/2020/09/ed1375131855f25ec1f587529d3fa981.jpg"
            />
          </Link>
          <Link>
            <NewsItem
              title="Памятники древнетюркской письменности"
              date="12 июля 2023"
              imageSrc="https://e-history.kz/storage/tmp/resize/news/1200_0_DgnfAMr4Jf38EjfGTlkqX106IhLJFXA2lJ2jU4D1.jpg"
            />
          </Link>
          <Link>
            <NewsItem
              title="К.Токаев о новой идеологической стратегии Казахстана"
              date="12 июля 2023"
              imageSrc="https://akorda.kz/assets/media/upload/anounces/61646310445436529b90bb91427d9db1.JPG"
            />
          </Link>
          <Link>
            {" "}
            <NewsItem
              title="Кенесары – последний хан Золотой орды"
              date="12 июля 2023"
              imageSrc="https://silkadv.com/sites/default/files/Kazahstan/Goroda/Astana/Kenesary_mon/0_2_IMG_1618-min.JPG"
            />
          </Link>
          <Link>
            <NewsItem
              title="История казахской дипломатии"
              date="12 июля 2023"
              imageSrc="https://e-history.kz/storage/tmp/resize/news/1200_0_7W9UTktU0aS9YGv8KNqzppDShhA9zfjNFym8bhBn.jpg"
            />
          </Link>
        </div>
        {/* <a className="underline text-[#222F49]">
          <p className="text-center text-xl mt-7">Показать все исследования</p>
        </a> */}
      </div>
    </div>
  );
}

export default AppliedStudiesCard;
