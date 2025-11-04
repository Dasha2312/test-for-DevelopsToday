import { AnimatePresence, motion } from "framer-motion";

import IconClose from '../../assets/Icons/CloseIcon.svg?react'
import type { IToast } from './interface';

import styles from './toast-style.module.css'
import useToast from './useToast';

function Toast({message, toastType, isIconClose = false}: IToast) {
  const {isToastShow, closeToast, setIsToastShow} = useToast({initialState:false})

  return (
    <>
      <button type='button' onClick={() => setIsToastShow(true)}>Show toast</button>
      <AnimatePresence>
        {isToastShow && 
          <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            className={`${styles.toast} ${styles[`toast-${toastType}`]}`}
          >
            <div className={`${styles.toastInner} ${isIconClose ? styles.iconBtn : ''}`}>
              <div>{message}</div>
              {isIconClose && 
                <button type='button' aria-label="Close" className={styles.toastBtn} onClick={closeToast}>
                  <IconClose />
                </button>
              }
              </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
}

export default Toast;