import { useContext } from "react";
import styles from "./Pagination.module.css";
import noImage from "../../../assets/images/noImage.png";
import { DataContext } from "../../ListPage/ListPage";

export default function Pagination({ books, setCurrentPage, currentPage }) {
  const { setBooks, setPageState, setSelectBook } = useContext(DataContext);

  const booksPerPage = 10;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = books.slice(startIndex, startIndex + booksPerPage);
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  let pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  function bookClick(book) {
    setPageState("detailBook");
    setSelectBook(book);
  }

  function minusBtn(id) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, quantity: +book.quantity - 1 } : book
      )
    );
  }

  function plusBtn(id) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, quantity: +book.quantity + 1 } : book
      )
    );
  }

  function DeleteClick(id) {
    const newBookData = books.filter((item) => item.id !== id);
    console.log(newBookData);
    setBooks(newBookData);
  }

  return (
    <div className={styles.BooksWrapper}>
      {currentBooks.map((item) => {
        return (
          <div className={styles.BookPreView} key={item.id}>
            <img
              src={item.bookImg === "" ? noImage : item.bookImg}
              alt="bookImg"
              className={styles.BookImg}
              onClick={() => bookClick(item)}
            />
            <div className={styles.BookInforms} onClick={() => bookClick(item)}>
              <p className={`${styles.BookInform} ${styles.BookTitle}`}>
                {item.title.length > 9
                  ? `${item.title.slice(0, 9)}...`
                  : item.title}
              </p>
              <p className={`${styles.BookInform} ${styles.BookAuthor}`}>
                저자{" "}
                {item.author.length > 9
                  ? `${item.author.slice(0, 9)}...`
                  : item.author}
              </p>
              <h3 className={styles.BookInform}>
                {item.price.toLocaleString()}원
              </h3>
              <p className={`${styles.BookInform} ${styles.BookDiscount}`}>
                {item.discount}% 할인
              </p>
              <p className={`${styles.BookInform} ${styles.BookPoint}`}>
                적립 {item.point}P
              </p>
            </div>
            <div className={styles.BookQuantityBoxs}>
              <div className={styles.BookButtonBox}>
                <div
                  className={styles.QuantityBtn}
                  onClick={() => minusBtn(item.id)}
                >
                  -
                </div>
                <h4 className={styles.BookQuantity}>{item.quantity}</h4>
                <div
                  className={styles.QuantityBtn}
                  onClick={() => plusBtn(item.id)}
                >
                  +
                </div>
                <div
                  className={styles.DeleteBtn}
                  onClick={() => DeleteClick(item.id)}
                >
                  삭제
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.PaginationBtns}>
        <div
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`${styles.PaginationBtn} ${
            currentPage === 1 ? styles.Disabled : ""
          }`}
        >
          ◀
        </div>
        {startPage > 1 && (
          <>
            <div
              onClick={() => setCurrentPage(1)}
              className={styles.PaginationBtn}
            >
              1
            </div>
            <div className={styles.PaginationEllipsis}>...</div>
          </>
        )}
        {pageNumbers.map((page) => (
          <div
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${styles.PaginationBtn} ${
              currentPage === page ? styles.ActivePage : ""
            }`}
          >
            {page}
          </div>
        ))}
        {endPage < totalPages && (
          <>
            <div className={styles.PaginationEllipsis}>...</div>
            <div
              onClick={() => setCurrentPage(totalPages)}
              className={styles.PaginationBtn}
            >
              {totalPages}
            </div>
          </>
        )}
        <div
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`${styles.PaginationBtn} ${
            currentPage === totalPages ? styles.Disabled : ""
          }`}
        >
          ▶
        </div>
      </div>
    </div>
  );
}
