import { prependOnceListener } from 'process';
import styles from '../styles/InputNumber.module.css';

interface InputNumberProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

function InputNumber({
  text, value, onChange
}: InputNumberProps) {
  const dec = () => onChange(value - 1);
  const inc = () => onChange(value + 1);


  return (
    <div className={styles.input_number}>
      <span className={styles.text}>{text}</span>
      <span className={styles.number}>{value}</span>
      <div className={styles.btns}>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}

export default InputNumber;
