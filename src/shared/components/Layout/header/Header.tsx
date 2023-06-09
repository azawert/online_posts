import { FC, useRef } from "react";

import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Divider } from "../../divider/Divider";
import { Menu } from "../../menu/Menu";
import { useOnClickOutside } from "../../../../hooks/useOutsideClick";

interface IHeaderProps {
  isOpen: boolean;
  handleMenuClick: () => void;
}

export const Header: FC<IHeaderProps> = ({ handleMenuClick, isOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, handleMenuClick);
  return (
    <header>
      <div>
        {isOpen ? (
          <IoCloseOutline size={30} onClick={handleMenuClick} />
        ) : (
          <FaBars size={25} onClick={handleMenuClick} />
        )}
      </div>
      {isOpen && <Menu ref={menuRef} />}
      <Divider />
    </header>
  );
};
