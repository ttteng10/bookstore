import ListHeader from "../ListHeader/ListHeader";
import styles from "./ListPage.module.css";

export default function ListPage() {
  return (
    <div className={styles.ListPageWrapper}>
      <ListHeader title={"책 판매 수량 관리"} />
    </div>
  );
}
