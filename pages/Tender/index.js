import React from 'react';
import TenderItem from '../../components/UI/Tenders';
import tendersData from '../../Tender.json';
import styles from './Tender.module.css';

const TendersPage = () => {
  return (
    <div className={styles.tenders_page}>
      <h1  className={styles.head_about_text}>Tenders</h1>
      <table className={styles.tender_table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Close Date</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {tendersData.map((tender, index) => (
            <TenderItem key={tender.id} tender={tender} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TendersPage;
