import React from "react";

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
  return (
    <form onSubmit={onSubmit} className="">
      <div className="flex items-center border-b  border-[#2F457D] py-2 sm:py-0 sm:space-x-4">
        <input
          type="text"
          value={query}
          onChange={onInputChange}
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Search..."
        />
        {query && (
          <button
            type="button"
            onClick={onClearClick}
            className="flex-shrink-0 text-white focus:outline-none font-bold mr-2"
          >
            X
          </button>
        )}

        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="flex-shrink-0 bg-[#2F457D] hover:bg-[#263764] border-[#2F457D] hover:border-[#263764] text-sm border-4 text-white py-1 px-2 rounded ml-2 mb-2  "
        >
          <option value="news">News</option>
          <option value="science_library">Science Library</option>
          <option value="applied_research">Applied Research</option>
          <option value="recomendation">Recomendation</option>
          <option value="foundation_study">Foundation Study</option>
          <option value="expert_opinion">Expert Opinion</option>
        </select>

        <button
          type="submit"
          className="flex-shrink-0 bg-[#2F457D] hover:bg-[#263764] border-[#2F457D] hover:border-[#263764] text-sm border-4 text-white py-1 px-2 rounded ml-2 mb-2"
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
      </div>

      {searchResults.length > 0 && (
        <div className="mt-4">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="bg-gray-200 p-4 border-b  border-[#162B67] shadow-md"
            >
              <h2 className="text-base font-semibold">{result.title}</h2>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchForm;
