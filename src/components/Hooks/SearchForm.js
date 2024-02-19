import React from "react";
import { Link } from "react-router-dom";

const SearchForm = ({
  query,
  selectedModel,
  searchResults,
  setQuery,
  setSelectedModel,
  onInputChange,
  onClearClick,
  onSubmit,
}) => {
  const getModelLink = () => {
    switch (selectedModel) {
      case "expert_opinion":
        return "/ru/expertvision";
      case "foundation_study":
        return "/ru/studies";
      case "recomendation":
        return "/ru/recommendations";
      case "applied_research":
        return "/ru/appliedstudies";
      case "science_library":
        return "/ru/library";
      case "news":
        return "/ru/newsblock";
      case "young-scientists":
        return "/ru/young-scientists";
      default:
        return "/";
    }
  };
  return (
    <form onSubmit={onSubmit} className="text-center">
      <div className="flex justify-center md:mr-2 mr-0  ">
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="bg-[#2F457D] hover:bg-[#263764] border-[#2F457D] hover:border-[#263764] text-sm border-4 mr-2 text-white py-1 px-2 rounded md:w-full w-1/2 "
        >
          <option value="science_library">Научная библиотека</option>
          <option value="applied_research">Прикладные исследования</option>
          <option value="recomendation">Рекомендации</option>
          <option value="foundation_study">Фундаментальные исследования</option>
          <option value="expert_opinion">Экспертные мнения</option>
          <option value="news">Новости</option>
          <option value="young-scientists">Молодые ученые</option>
        </select>

        <Link to={getModelLink()}>
          <button
            type="submit"
            className="bg-[#2F457D] hover:bg-[#263764] border-[#2F457D] hover:border-[#263764] text-sm border-4 text-white py-1 px-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SearchForm;
