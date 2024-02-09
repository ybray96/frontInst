import React from "react";
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../Slider";
import iconbg1 from "../SVG/iconbg1.svg";
import iconbg2 from "../SVG/iconbg2.svg";
import axios from "axios";
import { useState, useEffect } from "react";

import Rectangle76 from "../images/Rectangle 76.png";
import Rectangle77 from "../images/Rectangle 77.png";
import Rectangle78 from "../images/Rectangle 78.png";
import Rectangle79 from "../images/Rectangle 79.png";

function HomeCard() {
  function NewsItem({ title, date, imageSrc }) {
    return (
      <div className=" rounded-xl w-full xl:flex lg:flex-col bg-white border border-gray-200  relative hover:underline transition duration-300 ease-in-out hover:bg-[#dcd9d9]">
        <img className="h-44 w-full rounded-t-xl" src={imageSrc} alt="" />

        <div className="relative p-5">
          <h5 className="lg:text-lg text-md font-semibold tracking-tight text-gray-900 md:h-16 lg:h-20">
            {title}
          </h5>

          <div className=" mb-2 absolute -top-14 h-[56px]   px-1 w-[78px] right-14 bg-stone-800">
            <p className=" font-normal text-white  whitespace-pre-line text-sm text-left   mt-2 px-1">
              {date}
            </p>
          </div>
          <div className="mb-2 absolute -top-14 w-[59px] h-[56px] right-0 bg-[#2C4FA4] hover:bg-black transition duration-500 ease-in-out flex items-center justify-center">
            <p className="font-normal text-white lg:text-4xl text-2xl">→</p>
          </div>
        </div>
      </div>
    );
  }

  const resources = [
    {
      href: "https://sun9-44.userapi.com/impg/eXfdWf2mII4PBXvpfRd702I7S1r1fB4HIdAn9A/TR5qS9pTwEU.jpg?size=227x128&quality=96&sign=f5051ec18d06053dbc23b1c13aeb7f20&type=album",
      imgSrc: "/resources/res1.png",
      altText: "Image",
      text: "Послания народу Казахстана",
    },
    {
      href: "https://www.gov.kz/memleket/entities/sci?lang=kk",
      imgSrc: Rectangle77,
      altText: "Image",
      text: "Уполномоченный орган",
    },
    {
      href: "https://quryltai.kz/kk",
      imgSrc: Rectangle76,
      altText: "Image",
      text: "Национальный Курултай",
    },
    {
      href: "https://e-memory.kz/kz/",
      imgSrc: Rectangle78,
      altText: "Image",
      text: "Государственная комиссия",
    },
    {
      href: "https://data-historians.kz/admin/professors",
      imgSrc: Rectangle79,
      altText: "Image",
      text: "База экспертов",
    },
  ];

  const settings = {
    slidesToShow: 5,
    dots: true,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    // nextArrow: <NextButton />,
  };
  const [news, setNews] = useState([]);
  useEffect(() => {
    // Функция для выполнения запроса к API
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/v1/news-list/",
          {
            withCredentials: true,
          }
        );
        setNews(data);
        // console.log("API подкл", data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className="flex flex-col mx-auto  max-w-screen-xl     px-4 py-2  ">
      <img
        src={iconbg1}
        className="w-[315px] h-[285px] absolute  right-0 hidden md:block"
      ></img>
      <div>
        <h1 className="text-[#505050] font-semibold text-xl mt-7 mb-6">
          Мероприятия
        </h1>
        <Slider1 />
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-48 ">
          <h1 className="text-[#333] font-semibold text-2xl whitespace-nowrap">
            О нас
          </h1>
          <span className="text-[#333] text-lg">
            Институт истории государства осуществляет научно-аналитическую и
            экспертную поддержку процесса формирования государственного и
            исторического сознания страны, а также системное и теоретическое
            обоснование новейшей истории Казахстана
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 gap-4 mt-20 ">
          <Link to="/ru/ourachievements">
            {" "}
            <div className="shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out">
              <p className="p-4 text-4xl  font-semibold transition duration-200 ease-in-out ">
                3382
              </p>
              <p className=" p-2   text-md transition duration-200 ease-in-out ">
                Популяризация
                <br /> авторских исследований
              </p>
            </div>
          </Link>

          <Link to="/ru/library">
            {" "}
            <div className=" shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out">
              <p className=" p-4  text-4xl  font-semibold transition duration-200">
                23
              </p>
              <p className="p-2  transition duration-200 text-md">
                Проведенных <br /> исследований
              </p>
            </div>
          </Link>
          <Link to="/ru/studies">
            {" "}
            <div className=" shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out">
              <p className="p-4 text-4xl transition duration-200  font-semibold">
                99
              </p>
              <p className="p-2 transition duration-200 text-md">
                Опубликованных <br /> монографий
              </p>
            </div>
          </Link>

          <Link to="/ru/aboutus/Management">
            {" "}
            <div className=" shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out">
              <p className="p-4 text-4xl transition duration-200  font-semibold">
                42
              </p>
              <p className="p-2 transition duration-200 text-md">
                Научных <br /> работника
              </p>
            </div>
          </Link>

          <img
            src={iconbg2}
            className="w-[315px] h-[285px] absolute  left-0 hidden md:block"
          ></img>
        </div>
      </div>

      <div>
        <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
          Новостной блок
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3  lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-8 px-2 whitespace-pre-line ">
          {news &&
            [...news]
              .reverse()
              .map((item) => (
                <Link to={`/ru/thenews/${item.id}`} key={item.id}>
                  <NewsItem
                    title={item.title}
                    date={item.date}
                    imageSrc={item.image}
                  />
                </Link>
              ))
              .sort((a, b) => b.key - a.key)}
        </div>
        <div className="flex justify-center">
          {" "}
          <Link to="/ru/newsblock" className="mt-4">
            <span className="text-blue-600 underline hover:text-purple-700">
              Показать все новости
            </span>
          </Link>
        </div>
        <div className="w-full mt-25 ">
          <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
            Ресурсы
          </h1>
          <Slider {...settings}>
            {resources.map((resource, index) => (
              <div key={index} className=" shadow-lg px-1 ">
                <a
                  href={resource.href}
                  className="flex flex-col text-black hover:scale-95 transition duration-300 ease-in-out "
                >
                  <img
                    src={resource.imgSrc}
                    alt={resource.altText}
                    className="h-full w-full object-cover rounded-md"
                  />
                  <div className="text-center bg-white rounded-b-md py-6 ">
                    <p className="text-black font-bold whitespace-nowrap  text-[13.2px] md:text-base lg:text-base xl:text-base underline overflow-hidden">
                      {resource.text}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HomeCard;
