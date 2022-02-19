import styles from "../styles/Door.module.css";

import DoorModel from '../model/DoorModel';

interface DoorProps {
  door: DoorModel;
}

//TODO: STUDY THE BEST WHAY TO USE HTML5 TAGS IN THIS COMPONENT
function Door(props: DoorProps) {
  const { door } = props;

  const classSelected = door.isSelected ? styles.selected : '';

  return (
    <main className={styles.area}>
      <div className={styles.frame + ' ' + classSelected}>

        <section className={styles.door}>
          <article className={styles.number + ' ' + classSelected}>{door.number}</article>
          <article className={styles.knob + ' ' + classSelected}></article>
        </section>

      </div>
      <footer className={styles.floor}></footer>
    </main>
  );
}

export default Door;
