import { useState } from "react";

function usePasswordToggle(initialState: boolean = false) {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return {isVisible, toggleVisibility};
}

export default usePasswordToggle;