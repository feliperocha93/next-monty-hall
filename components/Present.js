import styles from '../styles/Present.module.css';

function Present() {
  return (
    <div className={styles.present}>
      <div className={styles.head}></div>
      <div className={styles.body}></div>
      <div className={styles.tape + ' ' + styles.vertical}></div>
      <div className={styles.tape + ' ' + styles.horizontal}></div>
    </div>
  );
}

export default Present;
