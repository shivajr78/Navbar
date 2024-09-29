import { menuItemsData } from "../menuItemsData";
import MenuItems from "./MenuItems";
const Navbar = () => {
    const depthLevel = 0;
  return (
    <div>
      <nav className="main-nav">
        <ul className="menus">
          {menuItemsData.map((menu, index) => {
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
