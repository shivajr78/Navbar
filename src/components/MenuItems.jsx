import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropDown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onmouseenter = () => {
    setDropDown(true);
  };
  const onmouseleave = () => {
    setDropDown(false);
  };
  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onmouseenter}
      onMouseLeave={onmouseleave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropDown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow"></span>
            )}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
