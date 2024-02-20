import { useState, React } from "react";
import HeaderEn from "../HeaderEn";
import FooterEn from "../FooterEn";
import HomeCardEn from "../Cards/HomeCardEn";
import december from "../../../../components/images/16dec.jpg";
import Newyear from "../../../../components/images/NewYear/NewYear.png"
import { useEffect } from "react";
import axios from "axios";
function HomeEn() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://admin.history-state.kz/api/v1/main-list/"
        );

        // console.log("API Response:", response.data);

        const dataArray = response.data.data;

        if (dataArray && dataArray.length > 0) {
          const firstItem = dataArray[0];

          if (firstItem && firstItem.image) {
            

            const absoluteImageUrl = `http://admin.history-state.kz/${firstItem.image}`;
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
    <div className="w-full  bg-[#e4e4e4] font-montserrat ">
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
        <HeaderEn />

        <div className=" mt-64 sm:mt-36 mx-auto max-w-screen-xl   font-['Montserrat']">
          <div className="">
            <div className="text-[#F0D872] flex-col  ">
              {/* <h2 className="text-5xl font-bold"> 15 қараша</h2>
              <p className="">Ұлттық валюта күні</p>
         */}
            </div>
          </div>
        </div>
      </div>

      <HomeCardEn />
      <div className="w-full h-[1px] bg-[#D4D4D4]  mt-20"></div>
      <FooterEn />
    </div>
  );
}

export default HomeEn;
