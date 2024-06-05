import React from 'react'
import './RedCard.css' // Make sure to import the CSS file

const RedCard = () => {
    return (
        <div className='Rcard'>
            <h1><em>CONTACTEZ-NOUS</em></h1>
            <div className='contact'>
                <ul>
                    <li className='bold'><img src='./src/assets/wPhone.png' alt='Phone'/>613 - 214 - 1031</li>
                    <li className='bold'><img src='./src/assets/wMSG.png' alt='Email'/>Insertlogo@here.com</li>
                    <li className='adr'>
                        <img src='./src/assets/wLoc.png' alt='Location'/>
                        <div>
                            <div>33 Rue Lamagie, K1K 3F3</div>
                            <div>55 Operator Priv, K1K 5C5</div>
                        </div>
                    </li>
                </ul>
                <div className='socials'>
                    <a href='#'><img src='./src/assets/bLink.png' alt='LinkedIn' /></a>
                    <a href='#'><img src='./src/assets/bFace.png' alt='Facebook' /></a>
                    <a href='#'><img src='./src/assets/bTweet.png' alt='Twitter' /></a>
                    <a href='#'><img src='./src/assets/bInsta.png' alt='Instagram' /></a>
                </div>
            </div>
        </div>
    )
}

export default RedCard
