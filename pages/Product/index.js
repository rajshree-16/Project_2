import Card1 from '../../components/UI/Card1';
import styles from './Product.module.css';
import productsData from '../../Products.json'; // Assuming Products.json is in the same directory as this component

const Product = () => {
  const { existingProducts, proposedProducts, recycledProducts} = productsData;

  return (
    <div className={styles.setfooter}>
      <div className={styles.horizontalContainer}>
        <h1 className={styles.about_text}>Products</h1>

        <div className={styles.gridContainer}>
          <div>
            <h2 className={styles.sub_head}>Existing Products</h2>
            <ul className={styles.cardRow}>
              {existingProducts.map((product, index) => (
                <li key={index}>
                  <Card1
                    src={product.src}
                    title={product.title}
                    description={product.description}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.sub_head}>Proposed Products</h2>
            <ul className={styles.cardRow}>
              {proposedProducts.map((product, index) => (
                <li key={index}>
                  <Card1
                    src={product.src}
                    title={product.title}
                    description={product.description}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.sub_head}>Recycled Products</h2>
            <ul className={styles.cardRow}>
              {recycledProducts.map((product, index) => (
                <li key={index}>
                  <Card1
                    src={product.src}
                    title={product.title}
                    description={product.description}
                  />
                </li>
              ))}
            </ul>
          </div>
                    
        </div>
      </div>
    </div>
  );
};

export default Product;
