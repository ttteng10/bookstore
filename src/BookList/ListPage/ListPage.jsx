import BookInventory from "../BookInventory/BookInventory";
import ListHeader from "../ListHeader/ListHeader";
import styles from "./ListPage.module.css";
import { createContext, useState } from "react";
import { bookData } from "../../data/BookData.js";

export const DataContext = createContext({
  BookData: [],
});

export default function ListPage() {
  const [books, setBooks] = useState(bookData);
  const dataValue = {
    BookData: books,
  };
  return (
    <DataContext.Provider value={dataValue}>
      <div className={styles.ListPageWrapper}>
        <ListHeader title={"책 판매 수량 관리"} />
        <BookInventory />
      </div>
    </DataContext.Provider>
  );
}
