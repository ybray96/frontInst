import { useEffect, useState } from 'react';

export const useAddControlsAttribute = (htmlString) => {
  const [modifiedHtml, setModifiedHtml] = useState("");

  useEffect(() => {
    const addControlsAttribute = () => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
      const videoElements = doc.querySelectorAll("video, iframe[src*='youtube.com']");

      for (let i = 0; i < videoElements.length; i++) {
        videoElements[i].setAttribute("controls", "");
        if (videoElements[i].tagName === "IFRAME") {
          videoElements[i].setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        }
      }

      setModifiedHtml(doc.documentElement.innerHTML);
    };

    addControlsAttribute();
  }, [htmlString]);

  return modifiedHtml;
};
