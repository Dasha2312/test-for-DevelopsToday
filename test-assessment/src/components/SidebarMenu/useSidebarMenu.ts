import { useState } from "react";

function useSidebarMenu(initState:boolean = false) {
  const [isOpen, setIsOpen] = useState(initState);

  function handleToggleSidebar() {
    setIsOpen(prev => !prev)
  }

  function handleCloseSidebar() {
    setIsOpen(false)
  }

  return {handleToggleSidebar, isOpen, handleCloseSidebar}
}

export default useSidebarMenu;