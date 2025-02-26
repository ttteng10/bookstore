import { useContext, useState, useEffect } from "react";
import styles from "./BookInventory.module.css";
import { DataContext } from "../ListPage/ListPage";
import SearchBar from "./SearchBar/SearchBar";
import Pagination from "./Pagination/Pagination";

// 책 목록 페이지
export default function BookInventory() {
  const { BookData } = useContext(DataContext);
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState(BookData);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const newBooks = BookData.filter(
      (item) =>
        item.title.includes(searchInput) || item.author.includes(searchInput)
    );
    setBooks(newBooks);
    setCurrentPage(1);
  }, [searchInput, BookData]);

  return (
    <div className={styles.BookInventoryWrapper}>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Pagination
        books={books}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
