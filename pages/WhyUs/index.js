import Image from 'next/image'; 
import styles from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <div className="set-footer">
      {/* <NavBar /> */}
      <div id="why"></div>
      <h1 className={styles.head_why_us}>WHY-US</h1>
      <div className={styles.about_container}>
        <div className="row">
          <div className="col-sm-12">
          <p className={styles.para}>
              <b>WHY US - </b>
              <br />
              <br />
              hereinafter referred to as IAMKHADI, is a trusted Non-for-profit
              social enterprise and export start-up. IAMKHADI incubated at the
              Indian Institute of Foreign Trade, and is working towards marketing
              and promotion of “hand woven-hand spun fabric” & Handlooms
              (disorganized sector) & Village Industry products in global markets
              for uplifting the living standards of the rural artisans and Women
              SHGs/ Co-operatives/ Start-ups/ NGOs/ Village Industry entrepreneurs
              by helping to provide direct global market access to them spread
              across the country.
              <br />
              <br />
              In addition to it, brought all the stakeholders
              from Farm to Foreign (5 F Formula of Hon’ble Prime Minister) on one
              platform towards achieving the objective of taking Handloom, Khadi &
              Village Industry products from Local to Global. The definite need of
              the hour to leverage this emerging opportunity is to ensure
              scalability, quality, standardization, new design intervention,
              products, and innovation in Handloom, Khadi & Village Industry
              products on one side and relevant market linkages both within
              national boundaries as well as global platforms.
            </p>
            <Image
              src="/images/aboutus1.jpeg"
              alt="whyus"
              className={styles.image}
              height={100}
              width={400}
            />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
