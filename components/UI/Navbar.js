import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './Navbar.module.css'; 
import Image from 'next/image';

// import Navbar.module.css
const Navbar = () => {
    const router = useRouter()
    function isActive(route){
      if(route == router.pathname){
         return styles.active
      }
      else ""
    }

  return (
    <nav>
    <div className={styles.nav_wrapper}>
      <Link href="/">
         
            <Image className={styles.nav_wrapper_image} src="/images/logo.jpg" width='30' height='30' alt="Logo" />
            Khadi India
          
      </Link> 
     
      <ul id="nav-mobile" className="right">
        <li className={isActive('/')}><Link href="/">Home</Link></li>
        <li className={isActive('/About')}><Link href="/About">About Us</Link></li>
        <li className={isActive('/WhyUs')}><Link href="/WhyUs">WhyUs?</Link></li>
        <li className={isActive('/Tender')}><Link href="/Tender">Tender</Link></li>
        <li className={isActive('/Product')}><Link href="/Product">Products</Link></li>
        <li className={isActive('/Contact')}><Link href="/Contact">Contact Us</Link></li>

      </ul>
    </div>
  </nav>
        
  )
}

export default Navbar
