// TheAchievementCardKaz.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TheAchievementCardKaz() {
  const { cardId } = useParams();
  const [historyItem, setHistoryItem] = useState(null);

  useEffect(() => {
    // Функция для загрузки данных из API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://admin.history-state.kz/api/v1/history/${cardId}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setHistoryItem(data); // Устанавливаем полученные данные в состояние
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Вызываем функцию загрузки данных
  }, [cardId]); // Запускаем useEffect при изменении cardId

  if (!historyItem) {
    return <p>Loading...</p>; // Пока данные загружаются, отображаем заглушку
  }

  // Далее вы можете использовать historyItem для отображения данных на странице
  return (
    <div>
      <h2>{historyItem.name}</h2>
      <p>{historyItem.full_text}</p>
      <p>Date: {historyItem.date}</p>
      {historyItem.image && (
        <img
          src={`http://admin.history-state.kz${historyItem.image}`}
          alt={historyItem.name}
        />
      )}
      <p>Category: {historyItem.category.name}</p>
    </div>
  );
}

export default TheAchievementCardKaz;
