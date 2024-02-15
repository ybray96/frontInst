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
import useSearchHook, { useSearch } from "./components/Hooks/useSearch";
import SearchForm from "./components/Hooks/SearchForm";

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

  const {
    query,
    selectedModel,
    searchResults,
    setQuery,
    setSelectedModel,
    handleInputChange,
    handleClearClick,
    handleSubmit,
  } = useSearchHook();
  return (
    <>
      {/* <div className="bg-transparent max-w-screen-xl mx-auto z-50 absolute md:right-1/4 right-[3rem] lg:mt-4 md:mt-24 mt-[2rem]">
        <SearchForm
          query={query}
          selectedModel={selectedModel}
          searchResults={searchResults}
          setQuery={setQuery}
          setSelectedModel={setSelectedModel}
          onInputChange={handleInputChange}
          onClearClick={handleClearClick}
          onSubmit={handleSubmit}
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
{
  /* <div className="absolute z-50  mt-6 xl:right-[22%] lg:right-[10%] lg:block  hidden ">
        <img
          className="hidden xl:block lg:block mt-1 "
          id="specialButton"
          style={{ cursor: "pointer" }}
          src="/pdf/eye.png"
          alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
          title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ"
          onClick={handleSpecialButtonClick}
        />
      </div> */
}
