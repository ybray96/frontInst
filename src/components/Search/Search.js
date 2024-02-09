import React, { useState } from "react";
// import useSearch from "../Hooks/UseGlobalSearch";
import { Link } from "react-router-dom";

import logo from "../../components/images/logo.png";

// function Search() {
  // const { query, setQuery, model, setModel, results, error, performSearch } =
    // useSearch();
  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     performSearch();
  //   }
  // };
  // return (
  //   <div className="bg-gray-100 min-h-screen">
  //     <div href="#" className="flex items-center max-w-screen-xl mx-auto ">
  //       <img
  //         src={logo}
  //         className="w-12 h-12 sm:w-16 sm:h-16 "
  //         alt="Институт истории государств"
  //       />
  //       <div className=" hidden md:flex flex-col text-center xl:pl-4  lg:pl-2  md:pl-1 ">
  //         <span className=" text-[#3B82F6] text-lg sm:text-xl text-left">
  //           Институт
  //         </span>
  //         <span className="  text-left text-[#3B82F6] text-lg sm:text-xl">
  //           истории государства
  //         </span>
  //       </div>
  //     </div>
  //     <div className="max-w-screen-xl mx-auto p-8 bg-gray-200 rounded-md shadow-xl mt-4 ">
  //       <div className="flex items-center mb-4">
  //         <input
  //           type="text"
  //           placeholder="Enter search query"
  //           value={query}
  //           onChange={(e) => setQuery(e.target.value)}
  //           onKeyPress={handleKeyPress}
  //           className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  //         />

  //         <button
  //           onClick={performSearch}
  //           className="bg-blue-500 text-white p-3 ml-2 rounded-md hover:bg-blue-600 focus:outline-none"
  //         >
  //           <img
  //             src="https://file.rendit.io/n/azsEk5RWNTwxdKXVqpPn.svg"
  //             alt="Search Icon"
  //             className="w-5 h-5"
  //           />
  //         </button>
  //       </div>

  //       {/* Display search results or error */}
  //       {results && results.length > 0 ? (
  //         <div className="bg-white p-6 rounded-md shadow-md">
  //           <h2 className="text-lg font-semibold mb-4">Результаты поиска:</h2>
  //           <pre className="overflow-auto max-h-[75vh]">
  //             {JSON.stringify(results, null, 2)}
  //           </pre>
  //         </div>
  //       ) : (
  //         <div className="bg-white p-6 rounded-md shadow-md">
  //           <h2 className="text-lg font-semibold mb-4">
  //             {results ? "Ничего не найдено" : "Введите запрос для поиска"}
  //           </h2>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
// }

// export default Search;
