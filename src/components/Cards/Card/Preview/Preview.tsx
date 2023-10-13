import React, { FC } from "react";
import styles from "./Preview.module.css";
import { type PreviewProps } from "../../../../types";

const Preview: FC<PreviewProps> = ({ imageLinks }): JSX.Element => {
  return (
    <>
      <div className={styles.preview}>
        <img src={imageLinks.thumbnail} alt="Preview" />
      </div>
    </>
  );
};

export default Preview;
