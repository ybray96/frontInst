import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import prevarrow from "../kaz/components/SVG/prevarrow.svg";
import nextarrow from "../kaz/components/SVG/nextarrow.svg";
import axios from "axios";
const SliderKaz = () => {
  const [sliderData, setSliderData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://admin.history-state.kz/api/v1/mainslider-list/"
      );
      setSliderData(response.data.data.reverse());
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrevClick = () => {
    const prevSlide = (activeSlide - 1 + sliderData.length) % sliderData.length;
    setActiveSlide(prevSlide);
  };

  const handleNextClick = () => {
    const nextSlide = (activeSlide + 1) % sliderData.length;
    setActiveSlide(nextSlide);
  };

  const [nextSlide, setNextSlide] = useState(null);
  const handleCardClick = (index) => {
    setNextSlide((index + 1) % sliderData.length);
    setSelectedSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="w-full flex items-center justify-center ">
      <button
        onClick={handlePrevClick}
        className=" xl:block  absolute left-[200px]  bg-white p-2 sm:m-40 md:m-4 m-0 lg:m-40 rounded-full text-gray-800 hover:bg-gray-200 focus:outline-none"
      >
        <img src={prevarrow} className="w-6 h-6" />
      </button>
      <div className="relative">
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          selectedItem={activeSlide}
          // autoPlay={true}
        >
          {sliderData.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div
                className={`w-full relative  cursor-pointer hover:brightness-90 hover:scale-95  transition-transform duration-300  ${
                  selectedSlide === index ? "selected-slide" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                {/* Изображение слайда */}
                <img
                  src={`https://admin.history-state.kz${item.image}`}
                  alt={`Слайд ${index + 1}`}
                   className="w-full  lg:h-64 md:h-48 h-48 rounded object-cover "
                />
                {/* Дополнительная информация о слайде */}
                <div className="absolute inset-0 flex flex-col justify-between text-white text-left p-4">
                  <p className="text-white text-base md:text-lg font-semibold whitespace-pre-line">
                    {item.date}
                  </p>
                </div>
              </div>
              <div
                className="w-1/3 relative cursor-pointer hover:brightness-90  hover:scale-95 transition-transform duration-300"
                onClick={() => handleCardClick((index + 1) % sliderData.length)}
              >
                {/* Изображение слайда */}
                <img
                  src={`https://admin.history-state.kz${
                    sliderData[(index + 1) % sliderData.length].image
                  }`}
                  alt={`Слайд ${((index + 1) % sliderData.length) + 1}`}
                   className="w-full  lg:h-64 md:h-48 h-48 rounded object-cover "
                  onClick={() =>
                    handleCardClick((index + 1) % sliderData.length)
                  }
                />
                {/* Дополнительная информация о слайде */}
                <div className="absolute inset-0 flex flex-col justify-between text-white text-left p-4">
                  <p className="text-white text-base md:text-lg font-semibold break-words">
                    {sliderData[(index + 1) % sliderData.length].date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <button
        onClick={handleNextClick}
        className="  xl:block   absolute xl:right-[20vh] lg:right-[-10vh] md:right-[10vh] right-[5vh]  sm:m-40 md:m-4 m-0 lg:m-40  bg-white p-2 rounded-full text-gray-800 hover:bg-gray-200 focus:outline-none"
      >
        <img src={nextarrow} className="w-6 h-6" />
      </button>

      <SlideModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={sliderData[selectedSlide]}
        nextData={sliderData[nextSlide]}
      />
    </div>
  );
};

const SlideModal = ({ isOpen, onClose, data, nextData }) => {
  const [modalOpacity, setModalOpacity] = useState(0);

  useEffect(() => {
    let isMounted = true;

    if (isOpen) {
      // Start with opacity 0
      setModalOpacity(0);

      // Use a setTimeout to delay setting opacity to 1, creating a fade-in effect
      const timeout = setTimeout(() => {
        if (isMounted) {
          setModalOpacity(1);
        }
      }, 300); // Adjust the duration as needed

      return () => {
        isMounted = false;
        clearTimeout(timeout);
      };
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto`}
    >
      <div
        className={`bg-white p-3 rounded-lg transform max-w-lg opacity-${
          modalOpacity * 100
        } transition-transform ease-in-out`}
      >
        {data.date && (
          <p className="text-black text-sm md:text-base lg:text-lg font-semibold mb-2">
            {data.date}
          </p>
        )}
        {data.title && (
          <p className="text-[#333] text-lg md:text-xl lg:text-2xl font-semibold break-words mb-4">
            {data.title}
          </p>
        )}
        <img
          src={`https://admin.history-state.kz${data.image}`}
          alt={`Slide Image`}
          className="w-full h-48 rounded object-cover mb-4"
        />
        <button
          onClick={onClose}
          className="block w-full mt-4 p-2 bg-[#3365e2] rounded-md focus:outline-none text-white transition-all duration-300 ease-in-out hover:bg-[#2F457D]"
        >
          Жабу
        </button>
      </div>
    </div>
  );
};
export default SliderKaz;
