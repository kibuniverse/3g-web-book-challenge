import * as React from "react";

type IProps = {
  title: string;
  content: string;
};

const Card: React.FC<IProps> = (props) => {
  const { onClick = () => {}, text = "" } = props;
  return <div onClick={onClick}>{text}</div>;
};

export default Card;
