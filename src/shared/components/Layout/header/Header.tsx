import { FC } from "react";

import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Divider } from "../../divider/Divider";

interface IHeaderProps {
  isOpen: boolean;
  handleMenuClick: () => void;
}

export const Header: FC<IHeaderProps> = ({ handleMenuClick, isOpen }) => {
  return (
    <header>
      <div>
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
