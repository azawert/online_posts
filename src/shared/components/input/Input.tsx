import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import { TiDeleteOutline } from "react-icons/ti";

interface IInputProps
  extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  value: string;
}

export const Input: FC<IInputProps> = ({
  children,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <input type={"text"} onChange={onChange} {...rest} value={value} />
      {value && <TiDeleteOutline />}
    </div>
  );
};
