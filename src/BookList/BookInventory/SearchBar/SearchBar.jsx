import { useContext } from "react";
import styles from "./SearchBar.module.css";
import { DataContext } from "../../ListPage/ListPage";

//책 검색바 구현
export default function SearchBar({ searchInput, setSearchInput }) {
  const { setPageState } = useContext(DataContext);
  function handleSearch(e) {
    setSearchInput(e.target.value);
  }
  function AddButtonClick() {
    setPageState("addBook");
  }
  return (
    <div className={styles.SearchbarWrapper}>
      <div className={styles.BookInventorySearchBar}>
        <p className={styles.SearchBarTitle}>현재 수량</p>
        <input
          type="text"
          placeholder="책 이름, 저자를 입력하세요"
          className={styles.SearchBar}
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.AddBtnWrapper}>
        <div className={styles.AddButton} onClick={AddButtonClick}>
          추가
        </div>
      </div>
    </div>
  );
}
