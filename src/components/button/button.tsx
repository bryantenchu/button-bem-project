import React, { FC } from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "default" | "dashed" | "text" | "link";
}

const Button: FC<ButtonProps> = ({ children, variant = "default" }) => {
  return <button className={`button button--${variant}`}>{children}</button>;
};

export default Button;
