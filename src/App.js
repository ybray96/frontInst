import "./App.css";
import { useEffect } from "react";

// import { HashRouter, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
// РУС
import Home from "./pages/Home";
import Research from "./pages/Research";
import AboutUs from "./pages/AboutUs";
import TheNews from "./pages/TheNews";
import Library from "./pages/Library";
import Studies from "./pages/Studies";
import OurAchievements from "./pages/OurAchievements";
import History from "./pages/History";
import NewsBlock from "./pages/NewsBlock";
// АНГЛ
import HomeEn from "./locales/en/components/pages/HomeEn";
import ResearchEn from "./locales/en/components/pages/ResearchEn";
import AboutUsEn from "./locales/en/components/pages/AboutUsEn";
import TheNewsEn from "./locales/en/components/pages/TheNewsEn";
import LibraryEn from "./locales/en/components/pages/LibraryEn";
import StudiesEn from "./locales/en/components/pages/StudiesEn";
import OurAchievementsEn from "./locales/en/components/pages/OurAchievementsEn";
import HistoryEn from "./locales/en/components/pages/HistoryEn";
import NewsBlockEn from "./locales/en/components/pages/NewsBlockEn";

// КАЗ
import HomeKaz from "./locales/kaz/pages/HomeKaz";
import AboutUsKaz from "./locales/kaz/pages/AboutUsKaz";
import TheNewsKaz from "./locales/kaz/pages/TheNewsKaz";
import LibraryKaz from "./locales/kaz/pages/LibraryKaz";
import StudiesKaz from "./locales/kaz/pages/StudiesKaz";
import ResearchKaz from "./locales/kaz/pages/ResearchKaz";
import HistoryKaz from "./locales/kaz/pages/HistoryKaz";
import OurAchievementsKaz from "./locales/kaz/pages/OurAchievementsKaz";
import NewsBlockKaz from "./locales/kaz/pages/NewsBlockKaz";

import WorkersKaz from "./locales/kaz/pages/WorkersKaz";
import Workers from "./pages/Workers";
import WorkersEn from "./locales/en/components/pages/WorkersEn";
import AboutInstitute from "./components/Cards/AboutUSMORE/Cards/AboutInstitute";
import Management from "./components/Cards/AboutUSMORE/Cards/Management";
import ManagementKZ from "./locales/kaz/Cards/AboutUSMORE/Cards/ManagementKZ";
import AboutInstituteKZ from "./locales/kaz/Cards/AboutUSMORE/Cards/AboutInstituteKZ";
import AboutInstituteEn from "./locales/en/components/Cards/AboutUSMORE/Cards/AboutInstituteEn";
import ManagementEn from "./locales/en/components/Cards/AboutUSMORE/Cards/ManagementEn";
import HistoryInfoCards from "./locales/kaz/pages/TheAchievementKaz";
import HistoryInfoCardsRU from "./pages/HistoryInfoCardsRu";
import AchivMore from "./pages/AchivMore";
import AchivMoreKz from "./locales/kaz/pages/AchivMoreKaz";
import AchivMoreEn from "./locales/en/components/pages/AchivMoreEn";
import AppliedStudiesKaz from "./locales/kaz/pages/AppliedStudiesKaz";
import AppliedStudiesEn from "./locales/en/components/pages/AppliedStudiesEn";
import ExVision from "./pages/ExVision";
import ExVisionKaz from "./locales/kaz/pages/ExVisionKaz";
import EXVisionEn from "./locales/en/components/pages/ExVisionEn";
import "./App.css";

import AppliedStudiesRu from "./pages/AppliedStudiesRu";
import HistoryCardInfoEn from "./locales/en/components/Cards/AboutUSMORE/pages/HistoryCardInfoEn";
import Recomendation from "./pages/Recomendation";
import RecomendationKZ from "./locales/kaz/pages/Recomendation";
import RecomendationEn from "./locales/en/components/pages/RecomendationEn";
import Council from "./pages/Council";
import CouncilKaz from "./locales/kaz/pages/CouncilKaz";
import CouncilEn from "./locales/en/components/Cards/CouncilEn";
import Search from "./components/Search/Search";
import axios from "axios";
import useVisualImpairmentScript from "./components/Hooks/useEye";
function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("news");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }
    try {
      const response = await axios.get(
        "http://91.147.92.207:3000/api/v1/search/",
        {
          params: { query, model: selectedModel },
        }
      );

      const lowercaseQuery = query.toLowerCase();
      const lowercaseResults = response.data.map((result) => ({
        ...result,
        title: (result.title || "").toLowerCase(),
        description: (result.description || "").toLowerCase(),
      }));

      const filteredResults = lowercaseResults.filter(
        (result) =>
          result.title.toLowerCase().includes(lowercaseQuery.toLowerCase()) ||
          result.description
            .toLowerCase()
            .includes(lowercaseQuery.toLowerCase()) ||
          result.title
            .toLowerCase()
            .includes(lowercaseQuery.trim().toLowerCase()) ||
          result.description
            .toLowerCase()
            .includes(lowercaseQuery.trim().toLowerCase())
      );

      console.log("Search results:", filteredResults);
      setSearchResults(filteredResults);
      onSearch(filteredResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    if (!inputValue.trim()) {
      setSearchResults([]);
    }
  };

  const handleClearClick = () => {
    setQuery("");
    setSearchResults([]);
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleSubmit({ preventDefault: () => {} }); // Perform search
    }, 300);

    return () => clearTimeout(delaySearch); // Cleanup previous timeouts
  }, [query, selectedModel]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[18rem] mx-auto my-4 p-2 bg-transparent rounded-md absolute right-[-1.5rem]"
    >
      <div className="flex items-center border-b  border-[#2F457D] py-2 sm:py-0 sm:space-x-4">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="..."
        />
        {query && (
          <button
            type="button"
            onClick={handleClearClick}
            className="flex-shrink-0 text-white focus:outline-none font-bold mr-2"
          >
            X
          </button>
        )}
        {/* <button
          type="submit"
          className="flex-shrink-0 bg-[#2F457D] hover:bg-[#263764] border-[#2F457D] hover:border-[#263764] text-sm border-4 text-white py-1 px-2 rounded ml-2 mb-2"
        >
         Найти
        </button> */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.36943 0.0199147C6.32021 0.026946 6.162 0.0515553 6.01786 0.0726491C5.39911 0.16054 4.55888 0.427727 3.9788 0.719524C1.91513 1.75663 0.526458 3.61288 0.0870046 5.92265C0.00262961 6.36913 -0.0149485 7.58905 0.055364 8.08476C0.28388 9.66679 0.983489 11.066 2.10497 12.184C3.81005 13.8785 6.21825 14.5957 8.57724 14.1105C9.56513 13.9066 10.5811 13.4531 11.3616 12.8695L11.5901 12.6973L14.1917 15.2918C15.8511 16.9441 16.839 17.9039 16.9233 17.9391C17.1132 18.0269 17.4331 18.0164 17.6229 17.918C17.862 17.7914 17.9851 17.591 17.9991 17.2992C18.0097 17.1199 17.9991 17.0215 17.9534 16.923C17.9112 16.8316 17.0499 15.9422 15.2956 14.1844L12.7011 11.5828L12.789 11.4773C12.9612 11.2664 13.2811 10.7672 13.4569 10.4226C13.9245 9.52968 14.1706 8.64023 14.2479 7.58554C14.3991 5.56405 13.6468 3.56015 12.1913 2.09765C11.0839 0.986712 9.67411 0.276555 8.12372 0.0515553C7.78271 0.0023366 6.62958 -0.0152415 6.36943 0.0199147ZM8.03232 1.59843C9.83232 1.8832 11.4425 3.11015 12.2089 4.77304C13.2003 6.9246 12.7573 9.3996 11.0804 11.073C8.87958 13.2773 5.36396 13.2738 3.16669 11.066C2.32997 10.2223 1.79911 9.18515 1.59872 8.00741C1.53193 7.60312 1.5249 6.68905 1.58466 6.32695C1.80615 5.02265 2.34404 3.97499 3.24404 3.10663C4.21786 2.17148 5.39208 1.64413 6.75615 1.53163C7.0163 1.51054 7.70185 1.5457 8.03232 1.59843Z"
            fill="white"
          />
        </svg>
      </div>
      {searchResults.length > 0 && (
        <div className="mt-4">
          <SearchResultList results={searchResults} />
        </div>
      )}
    </form>
  );
}

function SearchResultList({ results }) {
  return (
    <div className="flex flex-col max-h-screen overflow-auto">
      {results && results.length > 0
        ? results.map((result) => (
            <div
              key={result.id}
              className="bg-gray-200 p-4 border-b  border-[#162B67] shadow-md"
            >
              <h2 className="text-base font-semibold">{result.title}</h2>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))
        : ""}
    </div>
  );
}

function App() {
  const routeskaz = [
    { path: "/", element: <HomeKaz /> },
    { path: "/expertvision", element: <ExVisionKaz /> },
    { path: "/aboutUs", element: <AboutUsKaz /> },
    { path: "/newsblock", element: <NewsBlockKaz /> },
    { path: "/thenews/:id", element: <TheNewsKaz /> },
    { path: "/studies", element: <StudiesKaz /> },
    { path: "/library", element: <LibraryKaz /> },
    { path: "/research/:id", element: <ResearchKaz /> },
    { path: "/history", element: <HistoryKaz /> },
    { path: "/ourachievements", element: <OurAchievementsKaz /> },
    { path: "/history/:cardId", element: <HistoryInfoCards /> },
    { path: "/young-scientists", element: <WorkersKaz /> },
    { path: "/aboutus/AboutInstitute", element: <AboutInstituteKZ /> },
    { path: "/aboutus/Management", element: <ManagementKZ /> },
    { path: "/theachievement/:cardId", element: <AchivMoreKz /> },
    { path: "/appliedstudies", element: <AppliedStudiesKaz /> },
    { path: "/recommendations", element: <RecomendationKZ /> },
    { path: "/council", element: <CouncilKaz /> },
  ];
  const routesRu = [
    { path: "/ru", element: <Home /> },
    { path: "/ru/expertvision", element: <ExVision /> },
    { path: "/ru/theachievement/:cardId", element: <AchivMore /> },
    { path: "/ru/ourachievements", element: <OurAchievements /> },
    { path: "/ru/studies", element: <Studies /> },
    { path: "/ru/newsblock", element: <NewsBlock /> },
    { path: "/ru/library", element: <Library /> },
    { path: "/ru/research/:id", element: <Research /> },
    { path: "/ru/aboutus", element: <AboutUs /> },
    { path: "/ru/thenews/:id", element: <TheNews /> },
    { path: "/ru/history", element: <History /> },
    { path: "/ru/history/:cardId", element: <HistoryInfoCardsRU /> },
    { path: "/ru/young-scientists", element: <Workers /> },
    { path: "/ru/aboutus/AboutInstitute", element: <AboutInstitute /> },
    { path: "/ru/aboutus/Management", element: <Management /> },
    { path: "/ru/appliedstudies", element: <AppliedStudiesRu /> },
    { path: "/ru/recommendations", element: <Recomendation /> },
    { path: "/ru/council", element: <Council /> },
    // {path:"/search", element: <Search/>}
  ];

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  // const handleSpecialButtonClick = useVisualImpairmentScript();
  return (
    <>
      {/* <div className="bg-transparent max-w-screen-xl mx-auto z-50 absolute md:right-1/4   right-[5rem] md:mt-0 mt-[2rem]">
        <SearchForm onSearch={handleSearch} />
      </div> */}
      {/* <div className="absolute z-50  mt-6 xl:right-[22%] lg:right-[10%] lg:block  hidden ">
        <img
          className="hidden xl:block lg:block"
          id="specialButton"
          style={{ cursor: "pointer" }}
          src="/pdf/eye.png"
          alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
          title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
          onClick={handleSpecialButtonClick}
        />
      </div> */}
      <Router>
        <Routes>
          {/* Казахская версия сайта */}

          {routeskaz.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Русская версия сайта */}

          {routesRu.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Английская версия сайта*/}
          <Route path="/en" element={<HomeEn />}></Route>
          <Route path="/en/expertvision" element={<EXVisionEn />}></Route>
          <Route path="/en/aboutus" element={<AboutUsEn />}></Route>
          <Route path="/en/studies" element={<StudiesEn />}></Route>
          <Route path="/en/research/:id" element={<ResearchEn />}></Route>
          <Route path="/en/library" element={<LibraryEn />}></Route>
          <Route path="/en/history" element={<HistoryEn />}></Route>
          <Route
            path="/en/ourachievements"
            element={<OurAchievementsEn />}
          ></Route>
          <Route
            path="/en/theachievement/:cardId"
            element={<AchivMoreEn />}
          ></Route>
          <Route path="/en/thenews/:id" element={<TheNewsEn />}></Route>
          <Route path="/en/newsblock" element={<NewsBlockEn />}></Route>
          <Route
            path="/en/history/:cardId"
            element={<HistoryCardInfoEn />}
          ></Route>
          <Route path="/en/young-scientists" element={<WorkersEn />}></Route>
          <Route
            path="/en/aboutus/AboutInstitute"
            element={<AboutInstituteEn />}
          >
            {" "}
          </Route>
          <Route
            path="/en/aboutus/Management"
            element={<ManagementEn />}
          ></Route>
          <Route
            path="/en/appliedstudies"
            element={<AppliedStudiesEn />}
          ></Route>
          <Route
            path="/en/recommendations"
            element={<RecomendationEn />}
          ></Route>
          <Route path="/en/council" element={<CouncilEn />}></Route>
        </Routes>

        <ScrollToTop
          smooth={true}
          className="items-center flex px-2 animate-bounce"
        />
      </Router>
    </>
  );
}

export default App;
