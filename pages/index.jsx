import { useState } from 'react';
import Link from 'next/link';

import Card from '../components/Card';
import InputNumber from '../components/InputNumber';

import styles from '../styles/Form.module.css';

function Form() {
  const [qDoors, setQDoors] = useState(1);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber
            text='How many doors?'
            value={qDoors}
            onChange={q => setQDoors(q)}
          />
        </Card>
      </div>

      <div>
        <Card>
          <InputNumber
            text='What door is with gift?'
            value={withGift}
            onChange={d => setWithGift(d)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${qDoors}/${withGift}`} passHref>
            <h2 className={styles.link} >Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default Form;
