import React from 'react'
import './TecCard.css'

const TecCard = ({name}) => {
  return (
    <div className='teccard'>
            <img src='./src/assets/expertNinja.png' alt='tecIcon'/>
            <div class='desc'>
                <h1><em>{name}</em></h1>
                <p>Brève description de la personne. Peut-être des informations sur ses études et ses qualifications. 
                    Lien vers son <span>LinkedIn</span>, peut-être ?</p>
            </div>
        </div>
  )
}

export default TecCard