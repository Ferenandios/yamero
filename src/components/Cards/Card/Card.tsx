import { FC } from "react";
import Preview from "./Preview/Preview";
import Text from "./Text/Text";
import styles from "./Card.module.css";
import { type CardProps } from "../../../types";
import React from "react";

const Card: FC<CardProps> = ({ book }): JSX.Element => {
  return (
    <>
      <button className={styles.card}>
        <Preview imageLinks={book.imageLinks} />
        <Text props={{ title: book.title, publisher: book.publisher }} />
      </button>
    </>
  );
};

export default Card;
