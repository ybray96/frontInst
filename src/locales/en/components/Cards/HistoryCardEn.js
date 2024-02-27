import React, { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal"; // Импортируйте компонент Modal
import DOMPurify from "dompurify";

function HistoryCard() {
  const [isActive, setIsActive] = useState(false);
  const [categories, setCategories] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);

  useEffect(() => {
    // Fetch categories from the backend API
    axios
      .get("http://admin.history-state.kz/api/v1/categories-history/")
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setCategories(response.data.data);
          setLoadingCategories(false);
        } else {
          console.error("Invalid response format. Expected an array.");
          setLoadingCategories(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      });

    // Fetch history data from the backend API
    fetch("http://admin.history-state.kz/api/v1/history/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched history data:", data);
        setHistoryData(data.data); // Use data.data to access the actual array of history items
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const openModal = (historyItem) => {
    setSelectedHistoryItem(historyItem);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSwitch = (category) => {
    setSelectedCategory(category);
  };

  // Filter historyData based on selectedCategory
  const filteredHistoryData = selectedCategory
    ? historyData.filter((item) => item.category === selectedCategory)
    : historyData;
  return (
    <div className="px-4 py-2 flex flex-col mx-auto max-w-screen-xl font-montserrat">
      {/* Модальное окно */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="History Item Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto"
      >
        {selectedHistoryItem && (
          <div className="bg-white p-4 sm:p-8 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] my-4 rounded-lg shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-2xl text-[#2F457D] font-bold hover:text-gray-800 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-3xl font-bold mb-4 text-[#2F457D]">
              {selectedHistoryItem.name_en}
            </h2>
            <p className="text-sm sm:text-base mb-2 text-gray-600">
              Date: {selectedHistoryItem.date}
            </p>
            <div
              className="text-sm sm:text-base mb-4 text-gray-800"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(selectedHistoryItem.full_text_en),
              }}
            />
          </div>
        )}
      </Modal>

      <div className="">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row gap-2 mt-3 items-center w-[235px] h-[25px]">
            {/* ... (previous code) */}
          </div>
          <div className="w-full h-[1px] bg-gray-500 bg-opacity-40 mt-4"></div>

          {/* Switch to toggle between different categories and show all achievements */}
          <div className="grid grid-cols-12 mt-4 space-y-2">
            <button
              className={`mr-2 px-4 py-2 border rounded-full focus:outline-none ${
                selectedCategory === null
                  ? "bg-[#2F457D] text-white"
                  : "bg-white text-[#2F457D] border-[#2F457D]"
              }`}
              onClick={() => handleSwitch(null)}
            >
              Все
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`mr-2 px-4 py-2 border rounded-full focus:outline-none ${
                  selectedCategory === category.id
                    ? "bg-[#2F457D] text-white"
                    : "bg-white text-[#2F457D] border-[#2F457D]"
                }`}
                onClick={() => handleSwitch(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Display filtered historyData */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Array.isArray(filteredHistoryData) &&
              filteredHistoryData.map((historyItem) => (
                <div key={historyItem.id} className="history-card px-4">
                  <button onClick={() => openModal(historyItem)}>
                    {historyItem.image && (
                      <img
                        src={`http://admin.history-state.kz${historyItem.image}`}
                        alt={historyItem.name_en}
                        className="history-image rounded-t-lg"
                      />
                    )}
                    <div className="history-text bg-gray-300 p-4">
                      <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#2F457D]">
                        {historyItem.name_en}
                      </h2>
                    </div>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
