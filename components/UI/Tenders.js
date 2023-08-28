// import React from 'react';
import Image from 'next/image'
import style from '../UI/Tenders.module.css'
const TenderItem = ({ tender }) => {
  const { Id, title, description, start_date, close_date, image } = tender;

  const handleDownload = () => {
    const link = document.createElement('a');
    // link.href = '../../public/images/dari.png';
    // link.target = '_blank';
    // link.download = image; 
    link.click();
  };

 
  return (
    <tr className={style.tender_item}>
      <td>{Id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{start_date}</td>
      <td>{close_date}</td>
      <td>
        {Image && (
          <button onClick={handleDownload}>Download</button>
        )}
      </td>
    </tr>
  );
};

export default TenderItem;
