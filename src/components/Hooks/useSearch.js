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
      let apiUrl = "https://admin.history-state.kz/api/v1/search/";
      console.log("API URL:", apiUrl);
      if (selectedModel === "science_library") {
        apiUrl = "https://admin.history-state.kz/api/v1/science-library-list/";
      } else if (selectedModel === "applied_research") {
        apiUrl = "https://admin.history-state.kz/api/v1/applied-research-list/";
      } else if (selectedModel === "recomendation") {
        apiUrl = "https://admin.history-state.kz/api/v1/recomendation-list/";
      } else if (selectedModel === "foundation_study") {
        apiUrl = "https://admin.history-state.kz/api/v1/foundation-study-list/";
      } else if (selectedModel === "expert_opinion") {
        apiUrl = "https://admin.history-state.kz/api/v1/expert-opinion-list/";
      } 
      
      // else if (selectedModel === "news") {
      //   apiUrl = "https://admin.history-state.kz/api/v1/news-list/";
      // }

      const response = await axios.get(apiUrl, {
        params: { query },
      });

      console.log("1 Данные ответа перед обработкой:", response.data.data);

      const lowercaseQuery = query.toLowerCase();

      // Проверка, являются ли данные в ответе массивом
      const responseData = Array.isArray(response.data.data)
        ? response.data.data
        : [];

      const lowercaseResults = responseData.map((result) => {
        const lowercaseTitle = result.title
          ? capitalizeFirstLetter(result.title)
          : "";
        const lowercaseMinidescription = result.minidescription
          ? capitalizeFirstLetter(result.minidescription)
          : "";
        const lowercaseDescription = result.description
          ? capitalizeFirstLetter(result.description)
          : "";
        const lowercaseFullText = result.full_text
          ? capitalizeFirstLetter(result.full_text)
          : "";
        const lowercaseFileName = result.file_name
          ? capitalizeFirstLetter(result.file_name)
          : "";

        return {
          ...result,
          title: lowercaseTitle,
          minidescription: lowercaseMinidescription,
          description: lowercaseDescription,
          full_text: lowercaseFullText,
          file_name: lowercaseFileName,
        };
      });

      const filteredResults = lowercaseResults.filter((result) => {
        const lowercaseTitle = result.title ? result.title.toLowerCase() : "";
        const lowercaseAnonsText = result.anons_text
          ? result.anons_text.toLowerCase()
          : "";
        const lowercaseFullText = result.full_text
          ? result.full_text.toLowerCase()
          : "";
        const lowercaseFileName = result.file_name
          ? result.file_name.toLowerCase()
          : "";
        const lowercaseQueryTrimmed = lowercaseQuery.trim().toLowerCase();

        return (
          lowercaseTitle.includes(lowercaseQueryTrimmed) ||
          lowercaseAnonsText.includes(lowercaseQueryTrimmed) ||
          lowercaseFullText.includes(lowercaseQueryTrimmed) ||
          lowercaseFileName.includes(lowercaseQueryTrimmed)
        );
      });

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
