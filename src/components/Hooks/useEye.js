import { useState } from "react";

const useVisualImpairmentScript = () => {
  // Состояние, чтобы отслеживать, был ли скрипт загружен
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Функция для загрузки скриптов асинхронно
  const loadScripts = async () => {
    try {
      // Загрузка первого скрипта
      await loadScript("https://lidrekon.ru/slep/js/jquery.js");
      // Загрузка второго скрипта
      await loadScript("https://lidrekon.ru/slep/js/uhpv-full.min.js");
      // Установка состояния, что скрипты были успешно загружены
      setScriptsLoaded(true);
    } catch (error) {
      console.error("Ошибка при загрузке скриптов:", error);
    }
  };

  // Функция для создания и добавления тега <script> в DOM
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  // Функция, которая будет вызвана при клике на изображение
  const handleVisualImpairmentScript = () => {
    // Проверяем, были ли скрипты загружены ранее
    if (!scriptsLoaded) {
      // Если нет, загружаем скрипты
      loadScripts();
    }

    // Реализуйте специальное действие, которое нужно выполнить при клике на кнопку
    // Например, можно запустить какую-то функциональность, связанную с загруженными скриптами,
    // или показать/скрыть определенные элементы на странице.
  };

  // Возвращение функции для обработки клика на изображение
  return handleVisualImpairmentScript;
};

export default useVisualImpairmentScript;
