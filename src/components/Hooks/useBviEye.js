// useBviHook.js
import { useState, useEffect } from 'react';

const useBviHook = () => {
  // Состояние для отслеживания того, открыто ли окно
  const [isWindowOpened, setWindowOpened] = useState(false);

  // Функция для обработки клика и открытия окна
  const openWindow = () => {
    // Проверяем, было ли окно уже открыто
    if (!isWindowOpened) {
      // Открываем окно
      new window.isvek.Bvi();
      // Устанавливаем состояние, что окно открыто
      setWindowOpened(true);
    }
  };

  // Эффект для проверки при загрузке компонента
  useEffect(() => {
    // Проверяем, было ли окно уже открыто при загрузке
    const wasWindowOpened = localStorage.getItem('isWindowOpened') === 'true';
    if (wasWindowOpened) {
      setWindowOpened(true);
    }
  }, []);

  // Эффект для сохранения состояния в localStorage
  useEffect(() => {
    // Сохраняем состояние в localStorage
    localStorage.setItem('isWindowOpened', isWindowOpened);
  }, [isWindowOpened]);

  return { isWindowOpened, openWindow };
};

export default useBviHook;
