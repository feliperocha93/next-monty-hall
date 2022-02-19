import styles from "../styles/Door.module.css";

//TODO: STUDY THE BEST WHAY TO USE HTML5 TAGS IN THIS COMPONENT
function Door({isSelected}) {

  const classSelected = isSelected ? styles.selected : '';

  return (
    <main className={styles.area}>
      <div className={styles.frame + ' ' + classSelected}>

        <section className={styles.door}>
          <article className={styles.number + ' ' + classSelected}>3</article>
          <article className={styles.knob + ' ' + classSelected}></article>
        </section>

      </div>
      <footer className={styles.floor}></footer>
    </main>
  );
}

export default Door;
