import React from "react";
import './Button.scss';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  return <button className="py-[30px]">{props.label}</button>;
};

export default Button;
