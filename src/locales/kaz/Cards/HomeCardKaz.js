import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useState, useEffect } from "react";
import SliderKaz from "../SliderKaz";
import iconbg1 from "../../../components/SVG/iconbg1.svg";
import iconbg2 from "../../../components/SVG/iconbg2.svg";
import Rectangle75 from "../../../components/images/Rectangle 75.png";
import Rectangle76 from "../../../components/images/Rectangle 76.png";
import Rectangle77 from "../../../components/images/Rectangle 77.png";
import Rectangle78 from "../../../components/images/Rectangle 78.png";
import Rectangle79 from "../../../components/images/Rectangle 79.png";

function HomeCardKaz() {
  useEffect(() => {
    // При монтировании компонента, прокручиваем страницу наверх
    window.scrollTo(0, 0);
  }, []);
  function NewsItem({ title, date, imageSrc }) {
    return (
      <div className=" rounded-xl w-full xl:flex lg:flex-col bg-white border border-gray-200   hover:underline transition duration-300 ease-in-out hover:bg-[#dcd9d9]">
        <img className="h-44 w-full rounded-t-xl" src={imageSrc} alt="" />

        <div className="relative p-3">
          <h5 className="text-base  font-semibold  text-gray-900 md:h-16 lg:h-20 line-clamp-3">
            {title}
          </h5>

          <div className=" mb-2 absolute -top-12 h-[48px]   px-1 w-[60px] right-14 bg-stone-800">
            <p className=" font-normal text-white  whitespace-pre-line text-sm text-left   mt-2 px-1">
              {date}
            </p>
          </div>
          <div className="mb-2 absolute -top-12 w-[56px] h-[48px] right-0 bg-[#2C4FA4] hover:bg-black transition duration-500 ease-in-out flex items-center justify-center">
            <p className="font-normal text-white  text-2xl">→</p>
          </div>
        </div>
      </div>
    );
  }

  const resources = [
    {
      imgSrc: Rectangle75,
      altText: "Image",
      text: "Қазақстан халқына жолдау",
    },
    {
      href: "https://www.gov.kz/memleket/entities/sci?lang=kk",
      imgSrc: Rectangle77,
      altText: "Image",
      text: "Уәкілетті орган",
    },
    {
      href: "https://quryltai.kz/kk",
      imgSrc: Rectangle76,
      altText: "Image",
      text: "Ұлттық құрылтай",
    },
    {
      href: "https://e-memory.kz/kz/",
      imgSrc: Rectangle78,
      altText: "Image",
      text: "Мемлекеттік комиссия",
    },
    {
      href: "https://data-historians.kz/admin/professors",
      imgSrc: Rectangle79,
      altText: "Image",
      text: "Сарапшылар базасы",
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
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
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
          "http://admin.history-state.kz/api/v1/news-list/",
          {
            withCredentials: true,
          }
        );
        const limitedNews = data.slice(0, 8);
        setNews(limitedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // Функция для отображения нужных новостей на текущей странице
  const displayedNews = news.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Обработчик изменения страницы
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  // Рассчитываем общее количество страниц
  const pageCount = Math.ceil(news.length / itemsPerPage);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col mx-auto  max-w-screen-xl     px-4 py-2 font-nunito  ">
      <div>
        <img
          src={iconbg1}
          className="w-[315px] h-[285px] absolute  right-0 hidden md:block"
        ></img>
        <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
          Алдағы іс-шаралар
        </h1>
        <SliderKaz />
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-48">
          <h1 className="text-[#333] font-semibold text-2xl whitespace-nowrap">
            Біздің институт
          </h1>
          <span className="text-[#333] text-lg">
            Мемлекет тарихы институты елдің мемлекеттік және тарихи санасын
            қалыптастыру процесін ғылыми-талдамалық және сараптамалық қолдауды,
            сондай-ақ Қазақстанның жаңа тарихының жүйелі және теориялық
            негіздемесін жүзеге асырады
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 gap-4 mt-20 font-nunito  ">
          <Link to="/ourachievements">
            {" "}
            <div className="shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out rounded-md">
              <p className="p-4 text-4xl  font-semibold transition duration-200 ease-in-out ">
                3382
              </p>
              <p className=" p-2   text-base transition duration-200 ease-in-out ">
                Авторлық зерттеулерді <br /> кеңінен тарату
              </p>
            </div>{" "}
          </Link>

          <Link to="/studies">
            <div className="shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out rounded-md">
              <p className=" p-4  text-4xl  font-semibold transition duration-200">
                23
              </p>
              <p className="p-2  transition duration-200 text-base">
                Жүргізілген
                <br /> зерттеу
              </p>
            </div>
          </Link>
          <Link to="/library">
            {" "}
            <div className="shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out rounded-md">
              <p className="p-4 text-4xl transition duration-200  font-semibold">
                99
              </p>
              <p className="p-2 transition duration-200 text-base">
                Жарияланған <br />
                монография
              </p>
            </div>{" "}
          </Link>
          <Link to="/council">
            {" "}
            <div className="shadow-lg w-full h-[165px] bg-[#F9F9F9] hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out rounded-md">
              <p className="p-4 text-4xl transition duration-200  font-semibold">
                42
              </p>
              <p className="p-2 transition duration-200 text-base">
                Ғылыми <br />
                қызметкер
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
        <h1 className="text-[#505050]  font-semibold text-lg mt-7 mb-6">
          Соңғы жаңалықтар
        </h1>

        <div></div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4  lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-8 px-2 whitespace-pre-line ">
          {news &&
            [...news]
              .reverse()
              .map((item) => (
                <Link to={`/thenews/${item.id}`} key={item.id}>
                  <NewsItem
                    title={item.title_kk}
                    date={item.date}
                    imageSrc={item.image}
                  />
                </Link>
              ))
              .sort((a, b) => b.key - a.key)}
        </div>

        <div className="flex justify-center">
          {" "}
          <Link to="/newsblock" className=" mt-8">
            <span className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">
              Барлық жаңалықтарды көрсету
            </span>
          </Link>
        </div>

        {/* РЕСУРСЫ */}
        <div className="w-full mt-25 font-nunito   ">
          <h1 className="text-[#505050] font-semibold text-lg mt-7 mb-6">
            Ресурстар
          </h1>
          <Slider {...settings}>
            {resources.map((resource, index) => (
              <div key={index} className="  px-1 ">
                <a
                  href={resource.href}
                  className="flex flex-col text-black hover:scale-95 transition duration-300 ease-in-out "
                >
                  <img
                    src={resource.imgSrc}
                    alt={resource.altText}
                    className="h-[50%] w-full object-cover rounded-t-md"
                  />
                  <div className="text-center bg-white rounded-b-md py-6 ">
                    <p className="text-black font-bold whitespace-nowrap  text-[13.2px] md:text-base lg:text-base xl:text-base  overflow-hidden">
                      {resource.text}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeCardKaz;
