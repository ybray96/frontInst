import { Link, useParams } from "react-router-dom";
import { useState, React } from "react";
import { Link as Scroll } from "react-scroll";
function HistoryCard() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  const renderNewsCard = (imageSrc, title, date, linkTo) => (
    <div className="max-w-sm bg-white border border-gray-300  hover:scale-110 transition duration-300 ease-in-out rounded shadow">
      <Link to={linkTo}>  
        <img className="h-48 w-96" src={imageSrc} alt="" />
        <div className="p-5 flex flex-col">
          <p
            className="text-lg font-semibold tracking-tight text-gray-900"
            style={{ height: "90px" }}
          >
            {title}
          </p>
          {/* Uncomment the following lines if you want to display the date */}
          {/* <p className="font-normal text-gray-700 text-[#222F49]" style={{ height: "20px" }}>
            {date}
          </p> */}
        </div>
      </Link>
    </div>
  );
  return (
    <div className=" px-4 py-2 flex flex-col mx-auto max-w-screen-xl   font-nunito ">
      {/* карточки */}
      <div className="">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row gap-2 mt-3  items-center w-[235px] h-[25px]">
            <div className="text-lg  font-bold text-[#333333]">Басты</div>
            <div className="text-lg  font-bold text-[#8d8d8d]">&#62;</div>
            <div className="text-lg  text-[#8d8d8d]">Қазіргі тарих</div>
          </div>
          <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>

          <div className="flex flex-col sm:flex-row sm:gap-5 mt-5 ">
          <Scroll to="1990" smooth={true} duration={500}>
              <button className="text-center w-full text-lg sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black hover:text-white hover:border-transparent hover:bg-blue-500 mb-2 sm:mb-0">
                1990 ж
              </button>
            </Scroll>

            <Scroll to="2000" smooth={true} duration={500}>
              {" "}
              <button className="w-full text-lg  sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black hover:text-white hover:border-transparent hover:bg-blue-500 mb-2 sm:mb-0">
                2000 ж
              </button>
            </Scroll>
            <Scroll to="2010" smooth={true} duration={500}>
              {" "}
              <button className="w-full text-lg  sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black hover:text-white hover:border-transparent hover:bg-blue-500 mb-2 sm:mb-0">
                2010 ж
              </button>{" "}
            </Scroll>
            {/* <Scroll to="2020" smooth={true} duration={500}>
              {" "}
              <button className="w-full text-lg  sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black hover:text-white hover:border-transparent hover:bg-blue-500 mb-2 sm:mb-0">
                2020 ж
              </button>
            </Scroll> */}
          </div>
          <div className="mt-24">
              <div className="1990 mt-6" id="1990">
                <div className="flex flex-col items-center">
                  <button className="w-full text-lg sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black mb-2 sm:mb-0">
                    1990 ж
                  </button>
                  <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 gap-7">
                    {renderNewsCard(
                      "https://egemen.kz/media/2022/10/22/foto-1.jpg",
                      "Қазақстанның Тәуелсіздігі",
                      "1990",
                      "/history/1"
                    )}

                    {renderNewsCard(
                      "https://rus.azattyq-ruhy.kz/cache/imagine/main_page_full/uploads/news/2021/12/15/61ba2d4cf0fe3914007535.jpg",
                      "Независимость Казахстана",
                      "2000",
                      "/history/2"
                    )}

                    {renderNewsCard(
                      "https://www.gov.kz/uploads/2020/9/18/a90cabd5322012ae360e944c2abbbae8_original.229801.jpg",
                      "Қазақстан Республикасының Конституциясы",
                      "1990",
                      "/history/3"
                    )}
                  </div>
                </div>
              </div>

              <div className="2000 mt-6" id="2000">
                <div className="flex flex-col items-center">
                  <button className="w-full text-lg sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black mb-2 sm:mb-0">
                    2000 ж
                  </button>
                  <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 gap-7">
                    {renderNewsCard(
                      "https://sun9-8.userapi.com/impg/L_q6FvI_WgTQcxDxOomNFruCpjbfg3yzOH9mew/WNCtVP8XHkQ.jpg?size=974x548&quality=96&sign=335fecf1db3502ce63e543a474e513ae&type=album",
                      "Мәдени мұра",
                      "2000",
                      "/history/4"
                    )}

                    {renderNewsCard(
                      "https://gsmk.edu.kz/assets/images/resources/14.jpg",
                      "Әлемдік көшбасшылар мен дәстүрлі діндер көшбасшыларының бірінші съезді",
                      "2000",
                      "/history/5"
                    )}

                    {renderNewsCard(
                      "https://file.rendit.io/n/co6SmbzHfxgH2hqdA7eA.png",
                      "Ақпараттық хабарламалар",
                      "2000",
                      "/history/6"
                    )}
                  </div>
                </div>
              </div>

              <div className="2010 mt-6" id="2010">
                <div className="flex flex-col items-center">
                  <button className="w-full text-lg sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black mb-2 sm:mb-0">
                    2010 ж
                  </button>
                  <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 gap-7">
                
                      {renderNewsCard(
                        "https://tengrinews.kz/userdata/5c7b9b4d80a6570c317dfd63323aacf3.jpg",
                        "Азиада",
                        "",
                        "/history/7"
                      )}
          

          
                      {renderNewsCard(
                        "https://e-history.kz/storage/tmp/resize/kazakhstan_histories/1200_0_b5aef64d31f070b6f1877f25d113068e.jpg",
                        "ОБСЕ",
                        "",
                        "/history/8"
                      )}
            

                    {renderNewsCard(
                      "https://zakon-img3.object.pscloud.io/2017082817454524150_expo-2017.jpg",
                      "ЭКСПО ",
                      "",
                      "/history/9"
                    )}
                  </div>
                </div>
              </div>

              {/* <div className="2020 mt-6" id="2020">
                <div className="flex flex-col items-center">
                  <button className="w-full text-lg sm:w-auto inline-flex px-4 py-1 justify-center items-center rounded-xl border border-black mb-2 sm:mb-0">
                    2020 ж
                  </button>
                  <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 gap-7">
                    {renderNewsCard(
                       "https://egemen.kz/media/2022/10/22/foto-1.jpg",
                       "Егемендік декларациясы",
                       "1990",
                       "/history/1"
                    )}

                    {renderNewsCard(
                       "https://egemen.kz/media/2022/10/22/foto-1.jpg",
                       "Егемендік декларациясы",
                       "1990",
                       "/shistory/1"
                    )}

                    {renderNewsCard(
                       "https://egemen.kz/media/2022/10/22/foto-1.jpg",
                       "Егемендік декларациясы",
                       "1990",
                       "/history/1"
                    )}
                  </div>
                </div>
              </div> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
