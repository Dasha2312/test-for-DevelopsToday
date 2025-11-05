import type { IMenuItem } from "./interface";
import styles from './MenuItem-style.module.css'

function MenuItem({label, link}: IMenuItem) {
  return (
    <a href={link} className={styles.menuItem}>
      {label}
    </a>
  );
}

export default MenuItem;