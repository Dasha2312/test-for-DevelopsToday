import useSubMenu from "./useSubMenu";
import styles from './SubMenu-style.module.css'
import type { IMenuItems } from "../interface";
import Menu from "../Menu/Menu";

function SubMenu({item}: {item: IMenuItems}) {
  const {handleToggle, isOpen} = useSubMenu(false);

  return (
    <div className={styles.menuItem}>
      <button onClick={handleToggle} className={styles.subMenuBtn}>
        {item.label} {isOpen ? '-' : '+'}
      </button>
      {isOpen && item.subMenu && (
        <div className={styles.subMenu}>
          {item.subMenu?.map(sub  => (
            <Menu key={sub.label} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SubMenu;