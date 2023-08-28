import Link from 'next/link';
import styles from './LeftPannel.module.css';
const LeftPannel = () => {
    return (
      <div className={styles.left_pannel}>
        <h1 className={styles.heading1}>Welcome to Khadi India</h1>
        <h3 className={styles.heading2}>The One Stop Solution</h3>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laborum maxime, dolores exercitationem sed non ea rem enim soluta. Error, quaerat natus corrupti excepturi sint nesciunt, ut veniam et soluta dolorum facilis beatae tempora.</p>
        
      </div>
    );
  };
  
  export default LeftPannel;