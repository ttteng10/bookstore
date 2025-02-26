import styles from "./SearchBar.module.css";

export default function SearchBar({ searchInput, setSearchInput }) {
  function handleSearch(e) {
    setSearchInput(e.target.value);
  }
  return (
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
  );
}
