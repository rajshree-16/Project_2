// import NavBar from '../components/NavBar';
// import aboutus1 from '../../public/images/aboutus1.jpeg'
// import aboutus2 from '../../public/images/aboutus2.jpeg'
import Image from 'next/image';
import styles from './About.module.css'

const About = () => {
    return (
      <div className="set-footer">
        
        <h1 className={styles.head_about_text}>ABOUT-US</h1>
        <div className={styles.about_container}>
          <div className={styles.row}>
            <div className="row">
              <p className="col-12 col-md-5">
                <b>IAMKHAADII FOUNDATION (CIN: U85100DL2018NPL342413)</b>,
                hereinafter referred to as IAMKHADI, is a trusted Non-for-profit
                social enterprise and export start-up. IAMKHADI incubated at the
                Indian Institute of Foreign Trade, and is working towards marketing
                and promotion of “hand woven-hand spun fabric” & Handlooms
                (disorganized sector) & Village Industry products in global markets
                for uplifting the living standards of the rural artisans and Women
                SHGs/ Co-operatives/ Start-ups/ NGOs/ Village Industry entrepreneurs
                by helping to provide direct global market access to them spread
                across the country. <br/><br/> In addition to it, brought all the stakeholders
                from Farm to Foreign (5 F Formula of Hon’ble Prime Minister) on one
                platform towards achieving the objective of taking Handloom, Khadi &
                Village Industry products from Local to Global. <br/><br/>The definite need of
                the hour to leverage this emerging opportunity is to ensure
                scalability, quality, standardization, new design intervention,
                products, and innovation in Handloom, Khadi & Village Industry
                products on one side and relevant market linkages both within
                national boundaries as well at global platforms. <br/> <br/>IAMKHADI
                understands and appreciates this huge global opportunity and aims to
                expand its scope to the fullest. Towards the pursuit of widening the
                reach of Indian Handloom, Khadi & Village Industry products
                retailing & exports to foreign countries, the start-up has been
                working dedicatedly to bring in standardization, scalability, and
                harmonization in Handloom & Khadi Institutes and thus helping the
                entire value chain to be dynamic and responsive towards changing
                fast global customers demands. <br/><br/> The start-up has taken the initiative
                to connect artisans at the grass-root level to retailers at the
                national as well as international level by way of digitization and
                thus commits itself towards up-scaling the businesses of existing
                Handloom & Khadi Institutes (KI) and revamping the dead or defunct
                KIs via enhanced marketing opportunities & CSR funds.
              </p>
           
            <div className="col">
            <Image 
            src="/images/aboutus1.jpeg" 
            alt="Example Image" 
            className="col-12 col-md-12"
            width={900} 
            height={400} 
            />
            <Image 
            src="/images/aboutus2.jpeg" 
            alt="Example Image" 
            className="col-12 col-md-12"
            width={900} 
            height={400} 
            />
           </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  };
  
  export default About;
  