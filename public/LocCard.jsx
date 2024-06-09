import React from 'react';
import './LocCard.css';

const LocCard = ({ imgprop, loc, t1, t2, adr, tabKey }) => {
  return (
    <div className='lcard'>
      <img src={imgprop} alt={loc} />
      <div className='find'>
        <h1><em>{loc}</em></h1>
        <div className='time'>
          <p>{t1}</p>
          <p>{t2}</p>
        </div>
        <p>{adr}</p>
        <a className="nav-link" href={`#experts?tab=${tabKey}`}><em>Voir plus</em></a>
      </div>
    </div>
  );
};

export default LocCard;
