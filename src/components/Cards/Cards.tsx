import { FC } from "react";
import Card from "./Card/Card";
import styles from "./Cards.module.css";
import { useAppSelector } from "../../hook";
import React from "react";

const Cards: FC = (): JSX.Element => {
  const bookshelf = useAppSelector((state) => state.books.books);
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.inner}>
            {bookshelf.map((shelf) =>
              shelf.items.map((book) => <Card book={book.volumeInfo} />)
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
