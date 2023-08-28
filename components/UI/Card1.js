import { Card } from "react-bootstrap";
import Image from 'next/image';
import styles from './Card1.module.css'; 

const Cards = (props) => {
  
  return (
    
        <li key={props.title}>
          <Card className={styles.cards}>
            <Image
              src={props.src}
              alt={props.title}
              width={249}
              height={180}
             /> 
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
          </li>

  );
};

export default Cards;

