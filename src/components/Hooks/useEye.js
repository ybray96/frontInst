import { useEffect } from "react";

const useVisualImpairmentScript = () => {
  useEffect(() => {
    // Функция для загрузки скриптов асинхронно
    const loadScripts = async () => {
      try {
        // Загрузка первого скрипта
        await loadScript("https://lidrekon.ru/slep/js/jquery.js");
        // Загрузка второго скрипта
        await loadScript("https://lidrekon.ru/slep/js/uhpv-full.min.js");
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

    // Вызов функции загрузки скриптов при монтировании компонента
    loadScripts();

    // Функция для очистки при размонтировании компонента
    return () => {
      // Удаление первого скрипта из DOM
      document.body.removeChild(
        document.querySelector(
          'script[src="https://lidrekon.ru/slep/js/jquery.js"]'
        )
      );
      // Удаление второго скрипта из DOM
      document.body.removeChild(
        document.querySelector(
          'script[src="https://lidrekon.ru/slep/js/uhpv-full.min.js"]'
        )
      );
    };
  }, []);

  // Функция, которая будет вызвана при клике на изображение
  const handleVisualImpairmentScript = () => {
    // Реализуйте специальное действие, которое нужно выполнить при клике на кнопку
    // Например, можно запустить какую-то функциональность, связанную с загруженными скриптами,
    // или показать/скрыть определенные элементы на странице.
  };

  // Возвращение функции для обработки клика на изображение
  return handleVisualImpairmentScript;
};

export default useVisualImpairmentScript;
