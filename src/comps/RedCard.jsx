import React from 'react';
import './RedCard.css'; // Make sure to import the CSS file

const RedCard = () => {
    return (
        <div className='red-card'>
            <h1 className='red-card__header'><em>CONTACTEZ-NOUS</em></h1>
            <div className='red-card__contact'>
                <ul className='red-card__contact-list'>
                    <li className='red-card__contact-list-item bold'>
                        <img src='./src/assets/wPhone.png' alt='Phone'/>613 - 214 - 1031
                    </li>
                    <li className='red-card__contact-list-item bold'>
                        <img src='./src/assets/wMSG.png' alt='Email'/>Insertlogo@here.com
                    </li>
                    <li className='red-card__contact-list-item red-card__address'>
                        <img src='./src/assets/wLoc.png' alt='Location'/>
                        <div>
                            <div>33 Rue Lamagie, K1K 3F3</div>
                            <div>55 Operator Priv, K1K 5C5</div>
                        </div>
                    </li>
                </ul>
                <div className='red-card__socials'>
                    <a href='#'><img src='./src/assets/bLink.png' alt='LinkedIn' /></a>
                    <a href='#'><img src='./src/assets/bFace.png' alt='Facebook' /></a>
                    <a href='#'><img src='./src/assets/bTweet.png' alt='Twitter' /></a>
                    <a href='#'><img src='./src/assets/bInsta.png' alt='Instagram' /></a>
                </div>
            </div>
        </div>
    );
}

export default RedCard;
