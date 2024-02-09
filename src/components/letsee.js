import React, { useState, useEffect } from 'react';

const LetseePanel = () => {
  const [enabled, setEnabled] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [hideImages, setHideImages] = useState(false);
  const [colors, setColors] = useState('bonw');

  useEffect(() => {
    // Load options from local storage or cookies
    const options = loadOptions();
    options2Panel(options);
    applyPanel(options);
  }, []);

  const loadOptions = () => {
    try {
      const options = JSON.parse(localStorage.getItem('letsee'));
      return options || {};
    } catch (e) {
      return {};
    }
  };

  const saveOptions = (options) => {
    localStorage.setItem('letsee', JSON.stringify(options));
  };

  const options2Panel = (options) => {
    setEnabled(!!options.enabled);
    setFontSize(options.font_size || 17);
    setHideImages(!!options.hide_images);
    setColors(options.colors || 'bonw');
  };

  const applyPanel = (options) => {
    // Your applyPanel logic here
    // It should update the CSS based on the provided options
  };

  const togglePanel = () => {
    setEnabled(!enabled);
    applyPanel({ enabled: !enabled, font_size: fontSize, hide_images: hideImages, colors });
    saveOptions({ enabled: !enabled, font_size: fontSize, hide_images: hideImages, colors });
  };

  return (
    <div className={`letsee-panel ${enabled ? 'letsee-active' : ''}`}>
      <div>
        <span>Размер шрифта:</span>
        <a
          href="#"
          className={`letsee-change-fontsize letsee-fontsize-small ${fontSize === 17 ? 'letsee-fontsize-active' : ''}`}
          data-letsee-fontsize="17"
          onClick={() => setFontSize(17)}
        >
          A
        </a>
        <a
          href="#"
          className={`letsee-change-fontsize letsee-fontsize-medium ${fontSize === 21 ? 'letsee-fontsize-active' : ''}`}
          data-letsee-fontsize="21"
          onClick={() => setFontSize(21)}
        >
          A
        </a>
        <a
          href="#"
          className={`letsee-change-fontsize letsee-fontsize-large ${fontSize === 25 ? 'letsee-fontsize-active' : ''}`}
          data-letsee-fontsize="25"
          onClick={() => setFontSize(25)}
        >
          A
        </a>
      </div>
      <div>
        <label htmlFor="letsee-hide-images">
          Отключить изображения
          <input
            type="checkbox"
            id="letsee-hide-images"
            className="letsee-hide-images"
            checked={hideImages}
            onChange={() => setHideImages(!hideImages)}
          />
        </label>
      </div>
      <div>
        <span>Цвета:</span>
        <a
          href="#"
          className={`letsee-colors letsee-colors-bonw ${colors === 'bonw' ? 'letsee-colors-active' : ''}`}
          data-letsee-colors="bonw"
          onClick={() => setColors('bonw')}
        >
          <span>A</span>
        </a>
        <a
          href="#"
          className={`letsee-colors letsee-colors-wonb ${colors === 'wonb' ? 'letsee-colors-active' : ''}`}
          data-letsee-colors="wonb"
          onClick={() => setColors('wonb')}
        >
          <span>A</span>
        </a>
      </div>
      <div>
        <a href="#" className="letsee-turn-off" onClick={togglePanel}>
          Выключить
        </a>
      </div>
    </div>
  );
};

export default LetseePanel;
