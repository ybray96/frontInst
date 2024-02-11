import { useState, useEffect } from "react";
import axios from "axios";
import HeaderKaz from "../components/HeaderKaz";
import FooterKaz from "../components/FooterKaz";
import HomeCardKaz from "../Cards/HomeCardKaz";

function HomeKaz() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.history-state.kz/api/v1/main-list/"
        );

        const dataArray = response.data.data;

        if (dataArray && dataArray.length > 0) {
          const firstItem = dataArray[0];

          if (firstItem && firstItem.image) {
            const absoluteImageUrl = `https://admin.history-state.kz/${firstItem.image}`;
            setBackgroundImage(
              `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${absoluteImageUrl})`
            );
          } else {
            console.error("Путь к изображению недоступен.");
          }
        } else {
          console.error(
            "Никакие данные или пустой массив не возвращаются из API."
          );
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();

    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full absolute bg-[#e4e4e4] font-nunito">
      <div
        className="xl:h-[600px] md:h-full h-[150px] relative"
        style={{
          backgroundImage:
            backgroundImage ||
            `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <HeaderKaz />
        <div className="mt-64 sm:mt-36 mx-auto max-w-screen-xl font-['Montserrat']">
          <div className="p-4 text-white text-2xl sm:text-3xl font-semibold">
            <div className="text-[#F0D872] flex-col"></div>
          </div>
        </div>
      </div>
      <HomeCardKaz />
      <div className="w-full h-[1px] bg-[#D4D4D4] mt-20"></div>
      <FooterKaz />
    </div>
  );
}

export default HomeKaz;
