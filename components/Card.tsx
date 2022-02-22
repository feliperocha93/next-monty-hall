import styles from '../styles/Card.module.css';

interface CardProps {
  bgcolor?: string;
  children?: any;
}

function Card(props: CardProps) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: props.bgcolor ?? "#fff"
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
