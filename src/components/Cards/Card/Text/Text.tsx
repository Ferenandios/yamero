import React from "react";
import { FC } from "react";
import { type TextProps } from "../../../../types";

const Text: FC<TextProps> = ({ props }): JSX.Element => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.publisher}</p>
    </div>
  );
};

export default Text;
