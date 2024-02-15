import { useState, useEffect } from "react";
import axios from "axios";

function useSearchHook() {
  const [query, setQuery] = useState("");
  const [selectedModel, setSelectedModel] = useState("news");
  const [searchResults, setSearchResults] = useState([]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSubmit = async () => {
    if (!query.trim()) {
      return;
    }
    try {
      let apiUrl = "http://admin.history-state.kz/api/v1/search/";

      if (selectedModel === "news") {
        apiUrl = "http://admin.history-state.kz/api/v1/news-list/";
      } else if (selectedModel === "science_library") {
        apiUrl = "http://admin.history-state.kz/api/v1/science-library-list/";
      } else if (selectedModel === "applied_research") {
        apiUrl = "http://admin.history-state.kz/api/v1/applied-research-list/";
      } else if (selectedModel === "recomendation") {
        apiUrl = "http://admin.history-state.kz/api/v1/recomendation-list/";
      } else if (selectedModel === "foundation_study") {
        apiUrl = "http://admin.history-state.kz/api/v1/foundation-study-list/";
      } else if (selectedModel === "expert_opinion") {
        apiUrl = "http://admin.history-state.kz/api/v1/expert-opinion-list/";
      }

      const response = await axios.get(apiUrl, {
        params: { query },
      });

      const lowercaseQuery = query.toLowerCase();

      // Проверка, являются ли данные в ответе массивом
      const responseData = Array.isArray(response.data) ? response.data : [];

      const lowercaseResults = responseData.map((result) => ({
        ...result,
        title: capitalizeFirstLetter((result.title || "").toLowerCase()),
        minidescription: capitalizeFirstLetter(
          (result.minidescription || "").toLowerCase()
        ),
        description: capitalizeFirstLetter(
          (result.description || "").toLowerCase()
        ),
      }));

      const filteredResults = lowercaseResults.filter(
        (result) =>
          result.title.toLowerCase().includes(lowercaseQuery.toLowerCase()) ||
          result.minidescription
            .toLowerCase()
            .includes(lowercaseQuery.toLowerCase()) ||
          result.description
            .toLowerCase()
            .includes(lowercaseQuery.toLowerCase()) ||
          result.minidescription
            .toLowerCase()
            .includes(lowercaseQuery.toLowerCase()) ||
          result.description
            .toLowerCase()
            .includes(lowercaseQuery.trim().toLowerCase())
      );

      console.log("Search results:", filteredResults);
      setSearchResults(filteredResults);

      // Передача результатов поиска функции обратного вызова
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
      handleSubmit(); // Perform search
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, selectedModel]);

  const onSearch = (results) => {
    console.log("Search results in useSearch callback:", results);
  };

  return {
    query,
    selectedModel,
    searchResults,
    setQuery,
    setSelectedModel,
    handleInputChange,
    handleClearClick,
  };
}

export default useSearchHook;
