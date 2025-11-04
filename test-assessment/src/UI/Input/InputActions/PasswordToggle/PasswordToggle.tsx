import Eye from '../../../../assets/Icons/Eye.svg?react'
import EyeClose from '../../../../assets/Icons/EyeClose.svg?react'
import type { IPasswordToggle } from '../../interface';

import styles from './PasswordToggle-style.module.css'


function PasswordToggle({onTogglePassword, isVisible}: IPasswordToggle) {
  return (
    <div onClick={onTogglePassword} className={styles.passwordType}>
      {isVisible ? <Eye /> : <EyeClose />}
    </div>
  );
}

export default PasswordToggle;