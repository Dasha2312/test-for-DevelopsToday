import { useEffect, useState } from "react";
import type { IUseToast } from "./interface";

function useToast({initialState=false, duration=5000}: IUseToast) {
  const [isToastShow, setIsToastShow] = useState(initialState);

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setIsToastShow(false)
    }, duration)

    return () => clearTimeout(setTimer) 
  }, [isToastShow])

  function closeToast() {
    setIsToastShow(false)
  }

  return {isToastShow, closeToast, setIsToastShow};
}

export default useToast;