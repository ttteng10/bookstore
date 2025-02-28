import { useContext, useState } from "react";
import styles from "./BookDetail.module.css";
import { DataContext } from "../ListPage/ListPage";
import noImage from "../../assets/images/noImage.png";

export default function BookDetail() {
  const {
    BookData,
    setBooks,
    selectBook,
    setSelectBook,
    setPageState,
    currentPage,
    setCurrentPage,
  } = useContext(DataContext);
  const [editState, setEditState] = useState(false);
  const [bookQuantity, setBookQuantity] = useState(selectBook.quantity);

  function backBtn() {
    setPageState("bookList");
  }

  function editClick() {
    if (editState) {
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === selectBook.id ? { ...book, quantity: bookQuantity } : book
        )
      );
      setSelectBook((prevBook) => ({
        ...prevBook,
        quantity: bookQuantity,
      }));
      setEditState(false);
    } else {
      setEditState(true);
    }
  }

  function deleteClick(id) {
    const newBookData = BookData.filter((item) => item.id !== id);
    setBooks(newBookData);
    setPageState("bookList");
  }

  return (
    <div className={styles.BookDetailWrapper}>
      <div className={styles.BookDetailHeader}>
        <div className={styles.HeaderBtn} onClick={() => backBtn()}>
          뒤로
        </div>
        <div
          className={`${styles.HeaderBtn} ${styles.EditBtn}`}
          onClick={editClick}
        >
          {editState ? "완료" : "수정"}
        </div>
      </div>
      <div className={styles.BookInforms}>
        <div className={styles.BookImgContainer}>
          <img
            src={selectBook.bookImg === "" ? noImage : selectBook.bookImg}
            alt="bookImg"
            className={styles.BookImg}
          />
        </div>
        <div className={styles.BookDetailInform}>
          <div className={styles.BookInform}>
            <p className={styles.BookLabel}>제목</p>
            <p className={styles.BookTitle}>{selectBook.title}</p>
          </div>
          <div className={styles.BookInform}>
            <p className={styles.BookLabel}>저자</p>
            <p className={styles.BookAuthor}>{selectBook.author}</p>
          </div>
          <div className={styles.BookInform}>
            <p className={styles.BookLabel}>수량</p>
            {editState ? (
              <input
                type="text"
                value={bookQuantity}
                onChange={(e) => setBookQuantity(e.target.value)}
              />
            ) : (
              <p className={styles.BookQuantity}>{selectBook.quantity}</p>
            )}
          </div>
          <hr className={styles.customHr} />
          <div className={styles.BookInform}>
            <p className={styles.BookLabel}>할인</p>
            <p className={styles.BookDiscount}>{selectBook.discount}%</p>
          </div>
          <div className={styles.BookInform}>
            <p className={styles.BookLabel}>가격</p>
            <p className={styles.BookPrice}>
              {selectBook.price.toLocaleString()}원
            </p>
          </div>
          <div className={styles.BookInform}>
            <p className={styles.BookLabel}>원가</p>
            <p className={styles.BookOriginPrice}>
              {selectBook.originPrice.toLocaleString()}원
            </p>
          </div>
          <div className={styles.BookInform}>
            <p className={styles.BookLabel}>포인트 적립</p>
            <p className={styles.BookPoint}>{selectBook.point}% 적립</p>
          </div>
          <div
            className={styles.DeleteBtn}
            onClick={() => deleteClick(selectBook.id)}
          >
            삭제
          </div>
        </div>
      </div>
    </div>
  );
}
