import Gift from './Gift';

import styles from "../styles/Door.module.css";

import DoorModel from '../model/DoorModel';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

//TODO: STUDY THE BEST WHAY TO USE HTML5 TAGS IN THIS COMPONENT
function Door(props: DoorProps) {
  const door = props.value;
  const classSelected = door.isSelected && !door.isOpened ? styles.selected : '';

  const changeSelect = () => props.onChange(door.changeIsSelected());
  
  const openDoor = e => {
    e.stopPropagation();
    props.onChange(door.open());
  };

  return (
    <main className={styles.area} onClick={changeSelect}>
      <div className={styles.frame + ' ' + classSelected}>

      {door.isClosed ?
        (
          <>
              <section className={styles.door}>
                <article className={styles.number + ' ' + classSelected}>{door.number}</article>
                <article
                  className={styles.knob + ' ' + classSelected}
                  onClick={openDoor} 
                />
              </section>
          </>
        ) :
        (
          door.hasGift &&
          <Gift />
        )
      }

      </div>
      <footer className={styles.floor}></footer>
    </main>
  );
}

export default Door;
