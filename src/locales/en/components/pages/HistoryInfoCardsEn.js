import React from "react";
import HeaderEn from "../HeaderEn";
import FooterEn from "../FooterEn";
import historybg from "../images/Achievement.png";
import TheAchievementCardEn from "../Cards/TheAchievementCardEn";
// import historybg from "../images/historybg.png"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function HistoryInfoCardsEn() {
  useEffect(() => {
    // При монтировании компонента, прокручиваем страницу наверх
    window.scrollTo(0, 0);
  }, []);
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
    <div className="w-full absolute bg-[#e4e4e4]">
      <div
        className="xl:h-[500px] md:h-full h-[150px]  relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${historybg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px", // Set a fixed height for the image container
        }}
      >
        <HeaderEn />

        {/* <hr className="w-full h-[1px] bg-white font-serif " /> */}
        <div className=" mt-32 sm:mt-52 mx-auto max-w-screen-xl   ">
          <div className="p-4 text-white xl:text-3xl md:text-xl text-lg font-semibold text-left   ">
            {cardDate}
          </div>
        </div>
      </div>
      <TheAchievementCardEn />
      <div className="w-full h-[1px] bg-[#D4D4D4]  mt-20"></div>

      <FooterEn />
    </div>
  );
}

export default HistoryInfoCardsEn;
