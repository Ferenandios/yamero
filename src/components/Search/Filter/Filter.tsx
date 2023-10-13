import { FC, useState } from "react";
import styles from "./Filter.module.css";
import React from "react";
import classNames from "classnames";

const buttonList = [
  "All",
  "Art",
  "Biography",
  "Computers",
  "History",
  "Medical",
  "Poetry",
];
const buttonSortByList = ["Relevance", "Newest"];

const Filter: FC = (): JSX.Element => {
  const [activeButton, setActiveButton] = useState<string>("All");
  const [activeSortByButton, setActiveSortByButton] =
    useState<string>("Relevance");

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.items}>
          {buttonList.map((buttonName) => (
            <button
              className={classNames(
                styles.button,
                activeButton === buttonName ? styles.active : null
              )}
              onClick={() => setActiveButton(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>

        <div className={styles.items}>
          {buttonSortByList.map((buttonName) => (
            <button
              className={classNames(
                styles.button,
                activeSortByButton === buttonName ? styles.active : null
              )}
              onClick={() => setActiveSortByButton(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
