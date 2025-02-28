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

  const handleTextChange = (setter) => (e) => {
    const value = e.target.value;
    if (/^[\p{Script=Hangul}a-zA-Z\s]*$/u.test(value)) {
      setter(value);
    }
  };

  const handleNumberChange = (setter) => (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setter(value);
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
              onChange={handleTextChange(setTitle)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>저자</p>
            <input
              type="text"
              ref={authorRef}
              value={author}
              onChange={handleTextChange(setAuthor)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>수량</p>
            <input
              type="number"
              ref={quantityRef}
              value={quantity}
              onChange={handleNumberChange(setQuantity)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>할인</p>
            <input
              type="number"
              ref={discountRef}
              value={discount}
              onChange={handleNumberChange(setDiscount)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>가격</p>
            <input
              type="number"
              ref={priceRef}
              value={price}
              onChange={handleNumberChange(setPrice)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>원가</p>
            <input
              type="number"
              ref={originPriceRef}
              value={originPrice}
              onChange={handleNumberChange(setOriginPrice)}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.InputForm}>
            <p className={styles.InputLabel}>포인트</p>
            <input
              type="number"
              ref={pointRef}
              value={point}
              onChange={handleNumberChange(setPoint)}
              className={styles.inputStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
