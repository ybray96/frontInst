import React, { useState, useRef } from "react";
import arrow2 from "./SVG/arrow2.svg";
import tiktok from "./SVG/tiktok.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "@emailjs/browser";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function Modal({ closeModal }) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_t77ab16",
          "template_yayq0vs",
          form.current,
          "UpkUBem8ddL2aSUQ7"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsFormSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 px-4 font-montserrat">
        <div className="bg-white rounded-lg p-8 flex-col items-center xl:max-w-[80vw] max-w-[90vw]">
          <div className="flex items-center">
            <form className="w-full  " ref={form} onSubmit={sendEmail}>
              <div className="flex gap-4 items-center justify-between mb-2">
                <h1 className="text-black text-2xl font-semibold">
                  Оставить заявку.
                </h1>
              </div>
              <div className="gap-4 flex-col ">
                <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-2">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="user_name"
                      className="p-2 text-lg focus:outline-none border rounded w-full"
                      placeholder="Ваше имя*"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      name="user_phone"
                      className="p-2 text-lg focus:outline-none border rounded w-full"
                      placeholder="Номер телефона*"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="user_email"
                      className="p-2 text-lg focus:outline-none border rounded w-full"
                      placeholder="Почта*"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <div className="">
                      <DatePicker
                        name="user_data"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className="p-2  text-lg focus:outline-none border rounded "
                        placeholderText="Выбрать дату..."
                        locale={ru}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  value="send"
                  type="submit"
                  className=" mt-4 text-white text-lg font-normal bg-[#2C4FA4] p-2 rounded-lg hover:bg-[#2c2ea4] w-full "
                >
                  {isFormSubmitted ? "Форма отправлена!" : "Связаться с нами"}
                </button>
                <div className="mt-4 ">
                  {/* <Calendar className="text-lg font-montserrat border-none rounded-xl font-bold" /> */}
                </div>
              </div>
            </form>
            <img src=""></img>
          </div>
          <div className="">
            <button
              onClick={closeModal}
              className=" text-white text-lg font-normal bg-red-600 p-2 rounded-lg hover:bg-red-500 w-full"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <footer className="flex flex-col mx-auto max-w-screen-xl   mb-5 px-4 py-2 font-montserrat ">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-5 font-montserrat">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="flex flex-col gap-5 md:w-1/5">
            {/* <span className="text-xl font-semibold text-[#333] text-center">
              Прием граждан:
            </span> */}

            <button
              className="  mt-3 bg-[#2C4FA4] hover:bg-[#2f457d] rounded-lg text-white align-center text-lg font-semibold py-4 px-5 whitespace-nowrap "
              onClick={openModal}
            >
              Записаться на прием
            </button>
            {isModalOpen && <Modal closeModal={closeModal} />}
          </div>
     <div className="flex flex-col  mt-5 md:mt-5">
            <center>
              {" "}
              <span className="font-semibold text-xl text-[#333]">
                Обратная связь:
              </span>
              <br />
              <a href="tel:+7172752568 ">+7 172 75 25 68 </a>
            </center>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between ">
            <div className="flex flex-col md:w-1/3">
              {/* <span className="text-xl font-semibold whitespace-nowrap text-center">
                Наши соц.сети:
              </span> */}
              <div className="flex gap-5 mt-5 mx-auto ">
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
                  alt="Twitter Icon"
                ></SocialLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, iconSrc, alt }) {
  return (
    <a href={href}>
      <div className="border border-[#eaeaea] bg-[#e4e4e4] flex justify-center items-center w-12 h-12 rounded-full">
        <img src={iconSrc} className="w-5" alt={alt} />
      </div>
    </a>
  );
}

export default Footer;
