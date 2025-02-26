import { useContext, useState } from "react";
import styles from "./BookInventory.module.css";
import { DataContext } from "../ListPage/ListPage";
import SearchBar from "./SearchBar/SearchBar";

export default function BookInventory() {
  const { BookData } = useContext(DataContext);
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([...BookData]);

  return (
    <div className={styles.BookInventoryWrapper}>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
}
