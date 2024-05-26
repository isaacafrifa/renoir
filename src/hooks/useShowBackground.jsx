import { useState, useEffect } from "react";

/**
 * Custom hook that manages the visibility state of a background element.
 * 
 * This hook initializes the background visibility state to false, and sets it to true
 * after the component mounts. It is useful for implementing effects such as fading in
 * a background image or overlay when a component is loaded.
 *
 * @returns {boolean} showBackground - A boolean indicating whether the background should be shown.
 */

const useShowBackground = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return showBackground;
};

export default useShowBackground;
