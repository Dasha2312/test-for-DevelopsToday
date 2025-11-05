import { useState } from "react";

function useSubMenu(initState = false) {
  const [isOpen, setIsOpen] = useState(initState);

  function handleToggle() {
    setIsOpen(prev => !prev)
  }

  return {handleToggle, isOpen}
}

export default useSubMenu;