import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import styles from './Carousels.module.css';

const CarouselContainer = () => {
  return (
    <Carousel className={styles.Carousel} autoPlay={true}>
      
      <div>
      <Image 
            src="/images/party_ladies.jpg" 
            alt="Example Image" 
            className={styles.image1}
            width={600} 
            height={650} 
            />
      </div>

      <div>
      <Image 
            src="/images/colored khadi.jpg" 
            alt="Example Image" 
            className={styles.image1}
            width={600} 
            height={650} 
            />
      </div>

      <div>
      <Image 
            src="/images/aboutus1.jpeg" 
            alt="Example Image" 
            className={styles.image1}
            width={600} 
            height={650} 
            />
      </div>
      
      

    </Carousel>
  )
}

export default CarouselContainer