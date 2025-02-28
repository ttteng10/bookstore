import BookInventory from "../BookInventory/BookInventory";
import ListHeader from "../ListHeader/ListHeader";
import styles from "./ListPage.module.css";
import { createContext, useState } from "react";
import { bookData } from "../../data/BookData.js";
import BookDetail from "../BookDetail/BookDetail.jsx";
import BookAdd from "../BookAdd/BookAdd.jsx";

export const DataContext = createContext({
  BookData: [],
  setBooks: () => {},
  setPageState: () => {},
  selectBook: {},
  setSelectBook: () => {},
  currentPage: Number,
  setCurrentPage: () => {},
});

//전체 페이지 관리
export default function ListPage() {
  const [books, setBooks] = useState(bookData);
  const [pageState, setPageState] = useState("bookList");
  const [selectBook, setSelectBook] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const dataValue = {
    BookData: books,
    setBooks: setBooks,
    setPageState: setPageState,
    selectBook: selectBook,
    setSelectBook: setSelectBook,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
  };
  return (
    <DataContext.Provider value={dataValue}>
      <div className={styles.ListPageWrapper}>
        <ListHeader title={"책 판매 수량 관리"} />
        {pageState === "bookList" && <BookInventory />}
        {pageState === "detailBook" && <BookDetail />}
        {pageState === "addBook" && <BookAdd />}
      </div>
    </DataContext.Provider>
  );
}
