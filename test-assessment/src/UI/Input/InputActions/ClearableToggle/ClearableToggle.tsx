import CloseIcon from '../../../../assets/Icons/CloseIcon.svg?react';

import styles from './ClearableToggle-style.module.css';

interface IClearableToggle {
  onClickIcon: () => void
}

function ClearableToggle({onClickIcon}: IClearableToggle) {
  return (
    <span onClick={onClickIcon} className={styles.closeIcon}><CloseIcon /></span>
  );
}

export default ClearableToggle;