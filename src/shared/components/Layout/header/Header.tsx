import { FC } from "react";

import "../Layout.scss";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Divider } from "../../divider/Divider";
import styles from "./header.module.scss";
interface IHeaderProps {
  isOpen: boolean;
  handleMenuClick: () => void;
}

export const Header: FC<IHeaderProps> = ({ handleMenuClick, isOpen }) => {
  return (
    <header style={{ position: "relative" }}>
      <div className={styles.icon_wrapper}>
        {isOpen ? (
          <IoCloseOutline size={30} onClick={handleMenuClick} />
        ) : (
          <FaBars size={25} onClick={handleMenuClick} />
        )}
      </div>
      <Divider />
    </header>
  );
};
