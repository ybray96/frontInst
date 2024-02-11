import { useEffect, useState } from "react";

const useVisualImpairmentScript = () => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Проверяем, загружены ли скрипты
        if (!scriptsLoaded) {
          await loadScript("https://lidrekon.ru/slep/js/jquery.js");
          await loadScript("https://lidrekon.ru/slep/js/uhpv-full.min.js");
          setScriptsLoaded(true); // Устанавливаем флаг после загрузки
        }
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    const loadScript = (src) => {
      const timestamp = new Date().getTime();
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `${src}?v=${timestamp}`;
        script.async = true;
        script.onload = () => resolve(); // resolve without parameters
        script.onerror = (error) => reject(error); // reject with error parameter
        document.body.appendChild(script);
      });
    };

    loadScripts();

    return () => {
      // Clean up on component unmount
      // Также можно добавить проверку scriptsLoaded перед удалением
      if (scriptsLoaded) {
        document.body.removeChild(
          document.querySelector(
            'script[src="https://lidrekon.ru/slep/js/jquery.js"]'
          )
        );
        document.body.removeChild(
          document.querySelector(
            'script[src="https://lidrekon.ru/slep/js/uhpv-full.min.js"]'
          )
        );
      }
    };
  }, [scriptsLoaded]);

  const handleSpecialButtonClick = () => {
    // Реализуйте специальное действие, которое должно выполняться при нажатии кнопки
    // Например, можно вызвать функциональность, связанную с загруженными скриптами
    // или показать/скрыть определенные элементы на странице.
  };

  return handleSpecialButtonClick;
};

export default useVisualImpairmentScript;
