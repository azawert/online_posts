import { FC, InputHTMLAttributes } from "react";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange,
  ...rest
}) => {
  return (
    <input onChange={onChange} {...rest}>
      {value}
    </input>
  );
};
