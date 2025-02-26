import styles from "./ListHeader.module.css";

export default function ListHeader({ title }) {
  return (
    <div className={styles.ListHeaderWrapper}>
      <p className={styles.ListHeaderTitle}>{title}</p>
    </div>
  );
}
