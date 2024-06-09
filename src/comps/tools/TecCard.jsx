import React from 'react';
import './TecCard.css';

const TecCard = ({ name }) => {
  return (
    <div className='teccard'>
      <img src='./public/assets/expertNinja.png' alt='tecIcon' />
      <div className='desc'>
        <h2 className='teccard-title'><em>{name}</em></h2>
        <p>Brève description de la personne. Peut-être des informations sur ses études et ses qualifications. 
          Lien vers son <span>LinkedIn</span>, peut-être ?</p>
      </div>
    </div>
  );
}

export default TecCard;
