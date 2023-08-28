// import React from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  return (
    <>
      <h1 className={styles.head_about_text}>CONTACT-US</h1>
      <div className={styles.about_container}>
      <div className="row">
        <div className="col-sm-6">
          <Image
            src={'/images/contact.jpg'}
            alt="Contact"
            className={styles.contact_img}
            layout="responsive"
            width={800}
            height={600}
          />
        </div>

        <div className="col-sm-6 row contact-container">
          <h5 className={styles.text}>
            Would you like to get in touch?
            <br />
            Please write to us at <strong>test@test.com</strong>
            <br /> We will get back to you as soon as possible.
            <br />
            <br />
            --Connect On Social Media--
          </h5>
          <div className={styles.icons}>
            <h2> 
              <BsFacebook color="blue" />
            </h2>

            <h2 className={styles.icons}>
              <BsLinkedin color="darkblue" />
            </h2>

            <h2 className={styles.icons}>
              <AiFillTwitterCircle color="darkcyan" />
            </h2>

            <h2 className={styles.icons}>
                <SiWhatsapp color="green" />
            </h2>
          </div>
         
          <h5 className={styles.text}>
            <strong>Address:</strong> 1144, Tower B2
            <br />
            SPAZE Itech Park
          </h5>
        </div>
      </div>

      </div>
      
    </>
  );
};

export default Contact;
