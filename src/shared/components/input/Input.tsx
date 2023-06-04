import { FC, InputHTMLAttributes, PropsWithChildren } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./input.module.scss";

interface IInputProps
  extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  value: string;
  deleteInputValue: () => void;
}

export const Input: FC<IInputProps> = ({
  deleteInputValue,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className={styles.input__wrapper}>
      <input type={"text"} onChange={onChange} {...rest} value={value} />
      {value && <TiDeleteOutline onClick={deleteInputValue} />}
    </div>
  );
};
