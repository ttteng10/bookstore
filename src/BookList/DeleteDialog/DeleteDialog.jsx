import styles from "./DeleteDialog.module.css";

export default function DeleteDialog({
  setDialogState,
  newBooks,
  setBooks,
  setPageState,
}) {
  function deleteCheck() {
    setDialogState(false);
    setBooks(newBooks);
    setPageState("bookList");
  }
  return (
    <dialog className={styles.DialogWrapper}>
      <p className={styles.DialogWord}>삭제하시겠습니까?</p>
      <div className={styles.DialogBtns}>
        <div className={styles.DialogBtn} onClick={() => setDialogState(false)}>
          취소
        </div>
        <div
          className={`${styles.DialogBtn} ${styles.DeleteBtn}`}
          onClick={() => deleteCheck()}
        >
          삭제
        </div>
      </div>
    </dialog>
  );
}
