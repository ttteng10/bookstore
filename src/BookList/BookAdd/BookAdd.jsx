import { useContext, useState, useRef } from "react";
import styles from "./BookAdd.module.css";
import { DataContext } from "../ListPage/ListPage";
import noImage from "../../assets/images/noImage.png";

export default function BookAdd() {
  const { BookData, setBooks, setPageState } = useContext(DataContext);

  const [imgFile, setImgFile] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [originPrice, setOriginPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [point, setPoint] = useState("");

  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);
  const originPriceRef = useRef(null);
  const discountRef = useRef(null);
  const pointRef = useRef(null);
  const fileRef = useRef(null);

  function AddClick() {
    if (!imgFile) {
      fileRef.current.focus();
      return;
    }
    if (!title) {
      titleRef.current.focus();
      return;
    }
    if (!author) {
      authorRef.current.focus();
      return;
    }
    if (!quantity) {
      quantityRef.current.focus();
      return;
    }
    if (!discount) {
      discountRef.current.focus();
      return;
    }
    if (!price) {
      priceRef.current.focus();
      return;
    }
    if (!originPrice) {
      originPriceRef.current.focus();
      return;
    }
    if (!point) {
      pointRef.current.focus();
      return;
    }

    const newBook = {
      id: BookData.length + 1,
      title,
      author,
      quantity,
      price,
      originPrice,
      discount,
      point,
      bookImg: imgFile,
    };
    setBooks([...BookData, newBook]);
    setPageState("bookList");
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImgFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.BookAddWrapper}>
      <div className={styles.BookAddHeader}>
        <div
          className={styles.HeaderBtn}
          onClick={() => setPageState("bookList")}
        >
          뒤로
        </div>
        <div
          className={`${styles.HeaderBtn} ${styles.AddBtn}`}
          onClick={AddClick}
        >
          추가
        </div>
      </div>
      <div className={styles.BookAddForm}>
        <div className={styles.ImageForm}>
          <img
            src={imgFile === "" ? noImage : imgFile}
            alt="imgForm"
            className={styles.InputImg}
          />
        </div>
        <div className={styles.InputForms}>
          <div className={styles.InputForm}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileRef}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>제목</p>
            <input
              type="text"
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>저자</p>
            <input
              type="text"
              ref={authorRef}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>수량</p>
            <input
              type="number"
              ref={quantityRef}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>할인</p>
            <input
              type="number"
              ref={discountRef}
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>가격</p>
            <input
              type="number"
              ref={priceRef}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>원가</p>
            <input
              type="number"
              ref={originPriceRef}
              value={originPrice}
              onChange={(e) => setOriginPrice(e.target.value)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>포인트</p>
            <input
              type="number"
              ref={pointRef}
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              className={styles.inputStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
