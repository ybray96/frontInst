import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
function AchievementsCardKaz() {
  const [achievements, setAchievements] = useState([]);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const { data } = await axios.get(
          "http://91.147.92.207:3000/api/v1/achievements-list/",
          {
            withCredentials: true,
          }
        );
        setAchievements(data.data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchAchievements();
  }, []);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  const pageCount = Math.ceil(achievements.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedAchievements = achievements.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex flex-row  gap-2 mt-3 items-center w-[235px] h-[25px">
        <div className="text-lg  text-[#333333] font-bold">Басты</div>
        <div className="text-lg  font-bold text-[#8d8d8d]">&#62;</div>
        <div className="text-lg  text-[#8d8d8d] whitespace-nowrap">
          Біздің жетістіктер
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4">
        {displayedAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className="max-w-sm bg-white border border-gray-300 hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => openModal(achievement)}
          >
            <img
              className="h-48 w-96"
              src={`https://institut.hello-olzhas.kz${achievement.image}`}
              alt=""
            />
            <div className="p-4 flex flex-col">
              <div
                className="text-lg font-semibold tracking-tight text-gray-900 whitespace-pre-line"
                style={{ height: "50px" }}
              >
                {achievement.title_kk}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination at the bottom */}
      <div className="flex justify-center my-4">
        <ReactPaginate
           className="flex gap-4 items-center"
          pageCount={pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel={null}
          nextLabel={null}
          previousLinkClassName="hidden"
          nextLinkClassName="hidden"
          breakLabel={
            <span className="px-2 py-1 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer">
              ...
            </span>
          }
          pageClassName="px-3 py-1 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-lg"
        />
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="bg-[#E4E4E4] p-4 mb-4 w-3/4 h-full ">
            <div className="mx-auto overflow-y-auto p-4 ">
              <h2 className="text-3xl font-bold mb-4">
                {selectedAchievement.title_kk}
              </h2>

              <p className="text-lg text-[#333] mt-2 break-words">
                {selectedAchievement.description_kk}
              </p>

              <button
                className="mt-3 bg-[#2C4FA4] hover:bg-[#2f457d] rounded-lg text-white align-center text-lg py-2 px-8"
                onClick={closeModal}
              >
                   Жабық
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AchievementsCardKaz;
