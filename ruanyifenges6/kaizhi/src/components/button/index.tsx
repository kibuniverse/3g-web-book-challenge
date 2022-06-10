import * as React from "react";
import { type } from "./type";

type IProps = {
  text: string;
  onClick: () => void;
  style: Record<string, string>;
  type: type;
};

const Button: React.FC<IProps> = (props) => {
  const { onClick = () => {}, text = "", type } = props;
  return <div onClick={onClick}>{text}</div>;
};

export default Button;
