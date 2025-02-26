import styles from "./Pagination.module.css";
import noImage from "../../../assets/images/noImage.png";

export default function Pagination({ books, setCurrentPage, currentPage }) {
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

  return (
    <div className={styles.BooksWrapper}>
      {currentBooks.map((item) => {
        return (
          <div className={styles.BookPreView} key={item.id}>
            <img
              src={item.bookImg === "" ? noImage : item.bookImg}
              alt="bookImg"
              className={styles.BookImg}
            />
            <div className={styles.BookInforms}>
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
              <h3 className={styles.BookInform}>{item.price}원</h3>
              <p className={`${styles.BookInform} ${styles.BookDiscount}`}>
                {item.discount}% 할인
              </p>
              <p className={`${styles.BookInform} ${styles.BookPoint}`}>
                적립 {item.point}P
              </p>
            </div>
            <div className={styles.BookQuantityBox}>
              <div className={styles.QuantityBtn}>-</div>
              <h4 className={styles.BookQuantity}>{item.quantity}</h4>
              <div className={styles.QuantityBtn}>+</div>
            </div>
          </div>
        );
      })}
      <div className={styles.PaginationBtns}>
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
      </div>
    </div>
  );
}
