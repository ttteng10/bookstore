import styles from "./ListHeader.module.css";

//페이지의 헤더
export default function ListHeader({ title }) {
  return (
    <div className={styles.ListHeaderWrapper}>
      <p className={styles.ListHeaderTitle}>{title}</p>
    </div>
  );
}
