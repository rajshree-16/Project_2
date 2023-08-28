import CarouselContainer from '@/components/UI/Carousels';
import LeftPannel from '@/components/UI/LeftPannel';
import styles from './index.module.css';
import Card2 from '../components/UI/Card2';
import * as products from "../Home.json";

const Home = (prop) => {

  const productsArray = products.map((value) => value);
 
  return (
    <>
      <div className={styles.about_container}>
        <div className="row">
          
          <div className="col-12 col-md-7">
            <CarouselContainer />
          </div>
          <div className="col-12 col-md-5">
            <LeftPannel />
          </div>

      <div className={styles.setfooter}>
      <div className={styles.horizontalContainer}>
        <h1 className={styles.about_text}>Photo Gallery</h1>

        <div className={styles.gridContainer}>
          <div>
            <ul className={styles.cardRow}>
              {productsArray.map((product, index) => (
                <li key={index}>
                  <Card2
                    src={product.src}
                  />
                </li>
              ))}
            </ul>
          </div>            
        </div>
      </div>
    </div>
    </div>
    </div>
        
    </>
  );
};

export default Home;
