import React from 'react'
import LocCard from './LocCard'
import './LocFind.css';

const LocFind = () => {
    return (
        <section className='LocFind' id='locFind'>
            <div className='locTitle'>
                <div className='titleCont1'>
                    <h1><em>DEUX SITES |</em></h1>
                    <span>Pourquoi nous confier votre voiture ?</span>
                </div>
                <div className='titleCont2'>
                    <h1><em>DEUX ÉQUIPES</em></h1>
                    <h1><em>D'EXCELLENCE</em></h1>
                </div>
            </div>
            <div className='Cardslgn'>
                <LocCard imgprop='./src/assets/LocNepImg.png' loc='Nepean' t1='LunVen    8h00 - 16h00' t2='SamDim 9h00 - 17h00' adr='33 Rue Lamagie, K1K 3F3' />
                <LocCard imgprop='./src/assets/LocOrlImg.png' loc='Orléans' t1='LunVen    8h00 - 16h00' t2='SamDim 10h00 - 17h00' adr='55 Operator Priv, K1K 5C5' />
            </div>
        </section>
    )
}



export default LocFind