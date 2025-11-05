import type { IMenuItems } from "../interface";

import SubMenu from "../SubMenu/SubMenu";
import MenuItem from "../MenuItem/MenuItem";

function Menu({item}: {item: IMenuItems}) {

  if(item.subMenu) {
    return (
      <SubMenu item={item} />
    )
  }

  return <MenuItem link={item.link} label={item.label} />;
}

export default Menu;