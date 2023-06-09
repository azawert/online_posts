import { FC, forwardRef } from "react";
import { menuData } from "./menu.data";
import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

interface IMenuProps {
  ref?: React.Ref<HTMLDivElement>;
}
export const Menu: FC<IMenuProps> = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={styles.menu_wrapper} ref={ref}>
      {menuData.map((menuItem) => (
        <Link to={menuItem.link} key={menuItem.label}>
          {menuItem.label}
        </Link>
      ))}
    </div>
  );
});
