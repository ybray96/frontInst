import { useEffect, React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function WorkersCardEn() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [workersPerPage] = useState(10);
  useEffect(() => {
    const apiUrl = "http://admin.history-state.kz/api/v1/scientists-list/";

    if (!apiUrl.startsWith("http://") && !apiUrl.startsWith("https://")) {
      console.error("Invalid API URL protocol");
      return;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          console.error(
            "Invalid data format received from API:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when search changes
  };

  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = data.slice(indexOfFirstWorker, indexOfLastWorker);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg bg-gray-100 text-gray-800 p-4">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="table-search-users"
        className="block mt-2 p-4 text-sm border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm mt-4 border-collapse border border-gray-300">
          <thead className="text-xs uppercase bg-blue-500 text-white">
            <tr>
              <th className="p-4 border border-gray-300">ҒАЛЫМДАР</th>
              <th className="px-6 py-3 border border-gray-300">
                БІЛІМ ДӘРЕЖЕСІ
              </th>
              <th className="px-6 py-3 border border-gray-300">
                ОҚУҒА ТҮСКЕН ЖЫЛ
              </th>
              <th className="px-6 py-3 border border-gray-300">
                ҒЫЛЫМИ ТАҚЫРЫПТАР
              </th>
            </tr>
          </thead>
          <tbody>
            {currentWorkers
              .filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item, index) => (
                <tr
                  key={index}
                  className={`bg-gray-200 hover:bg-gray-300 border border-gray-300`}
                >
                  <td className="p-4 flex items-center border border-gray-300">
                    <img
                      src={`http://admin.history-state.kz${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <span className="ml-2">{item.name_en}</span>
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {item.degree_of_education_en}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {item.year_of_education_en}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {item.scientific_topics_en}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {Array.from(
              { length: Math.ceil(data.length / workersPerPage) },
              (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`text-sm px-3 py-2 leading-5 focus:outline-none ${
                      currentPage === i + 1
                        ? "text-white bg-blue-600"
                        : "text-blue-500 hover:bg-blue-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
      <Link to="/en/aboutus">
        <button className="text-blue-500  border border-blue-500 hover:border-purple-500 py-2.5 px-4 rounded hover:text-purple-700">Go back</button>
      </Link>
    </div>
  );
}

export default WorkersCardEn;
