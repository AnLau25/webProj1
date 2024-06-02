import React from 'react'
import './LocCard.css'

const LocCard = ({ imgprop }) => {
  return (
    <div className='card'>
      <img src='./src/assets/LocNepImg.png' alt='Nepean' />
      <div class='intro'>
        <h1 class='card-tile'><em>Nepean</em></h1>
        <div className='time'>
          <p>LunVen    8h00 - 20h00</p>
          <p>SamDim 9h00 - 17h00</p>
        </div>
        <p className='dir'>33 Rue Lamagie, K1K 3F3</p>
        <a class="nav-link" href="#"> <em>Voir plus</em></a>
      </div>
    </div>
  )
}
//Edit the serv ones so Imma call it donne
export default LocCard