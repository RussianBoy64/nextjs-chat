import styles from "./typingIndicator.module.scss";

const Typing = () => {
  return (
    <div className={styles.typing}>
      <div className={styles.typing__inner}>
        <div className={styles.typing__dot}></div>
        <div className={styles.typing__dot}></div>
        <div className={styles.typing__dot}></div>
      </div>
    </div>
  );
};

export default Typing;
