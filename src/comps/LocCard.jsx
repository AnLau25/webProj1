import React from 'react'
import './LocCard.css'

const LocCard = ({ imgprop, loc, t1, t2, adr }) => {
  return (
    <div className='lcard'>
      <img src={imgprop} alt={loc} />
      <div class='find'>
        <h1><em>{loc}</em></h1>
        <div className='time'>
          <p>{t1}</p>
          <p>{t2}</p>
        </div>
        <p>{adr}</p>
        <a class="nav-link" href="#"> <em>Voir plus</em></a>
      </div>
    </div>
  )
}
//Edit the serv ones so Imma call it donne
export default LocCard