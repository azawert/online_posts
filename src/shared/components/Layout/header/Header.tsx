import { ChangeEvent, FC } from "react";

import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Divider } from "../../divider/Divider";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Input } from "../../input/Input";
import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../../../store/actions/searchActions";

interface IHeaderProps {
  isOpen: boolean;
  handleMenuClick: () => void;
}

export const Header: FC<IHeaderProps> = ({ handleMenuClick, isOpen }) => {
  const { searchValue } = useTypedSelector((state) => state.search);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchValue(e.target.value));
  };
  return (
    <header>
      <div>
        {isOpen ? (
          <IoCloseOutline size={30} onClick={handleMenuClick} />
        ) : (
          <FaBars size={25} onClick={handleMenuClick} />
        )}
        <Input value={searchValue} onChange={handleChange} />
      </div>
      <Divider />
    </header>
  );
};
