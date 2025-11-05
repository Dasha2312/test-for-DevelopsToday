
import Menu from './Menu/Menu';
import styles from './SidebarMenu-style.module.css'
import CloseIcon from '../../assets/Icons/CloseIcon.svg?react'
import useSidebarMenu from './useSidebarMenu';
import { AnimatePresence, motion } from "framer-motion";
import type { IMenuItems } from './interface';

function SidebarMenu({menuItems}: { menuItems: IMenuItems[] }) {
  const {handleToggleSidebar, isOpen, handleCloseSidebar} = useSidebarMenu(false)
  return (
    <>
      <button type='button' onClick={handleToggleSidebar}>Show SideBar</button>

       <AnimatePresence>
        {isOpen && 
          <>
            <motion.div
              layout
              initial={{ opacity: 0, x: 350}}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 350 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={styles.sidebar}
            >
              <div className={styles.sidebarInner}>
                <button type='button' className={styles.sidebarBtn} onClick={handleCloseSidebar}>
                  <CloseIcon />
                </button>
                <div className={styles.menu}>
                  {menuItems.map(item => (
                    <Menu key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={handleCloseSidebar}
            />
          </>
        }
      </AnimatePresence>
    </>
  );
}

export default SidebarMenu;