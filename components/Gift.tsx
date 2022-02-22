import styles from '../styles/Gift.module.css';

function Gift() {
  return (
    <div className={styles.Gift}>
      <div className={styles.head}></div>
      <div className={styles.body}></div>
      <div className={styles.tape + ' ' + styles.vertical}></div>
      <div className={styles.tape + ' ' + styles.horizontal}></div>
    </div>
  );
}

export default Gift;
