import { Card } from "react-bootstrap";
import Image from 'next/image';
import styles from './Card2.module.css'; 

const Cards = (props) => {

  return (
    <li key={props.title}>
          <Card className={styles.cards}>
            <Image
              src={props.src}
              alt={props.title}
              width={310}
              height={180}
             /> 
          </Card>
  </li>
  );
};

export default Cards;

