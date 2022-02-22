import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/Door";

import styles from '../../../styles/Game.module.css'

function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { qDoors, withGift } = router.query;
    setIsValid(+qDoors >= 3 && +qDoors <= 20 && +withGift >= 1 && +withGift <= +qDoors);
  }, [router?.query, doors]);

  useEffect(() => {
    const { qDoors, withGift } = router.query;
    setDoors(createDoors(+qDoors, +withGift))
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
        />
      )
    })
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {isValid ? renderDoors() : <h1>Invalid Inputs</h1>}
      </div>
      <div className={styles.btns}>
        <Link href="/">
          <a>
            Reset
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Game;