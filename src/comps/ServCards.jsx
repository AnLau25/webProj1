import React from 'react';
import './ServCards.css';

const ServCards = ({ imgprop, servprop }) => {
    return (
        <div className='card'>
            <img src={imgprop} alt={servprop} />
            <div className='intro'>
                <h1><em>{servprop}</em></h1>
                <p>Brève description du service en question. Quelques lignes pour attirer l'attention et résumer les autres sous-services.</p>
                <p>Brève description du service, des pièces, des produits utilisés, éventuellement une estimation des coûts et des précisions sur les délais. Sans être trop technique, mais suffisamment pour donner à la personne une idée du service. Justifier les coûts... </p>
                <ul>
                    <li>Possible</li>
                    <li>Pointform</li>
                    <li>de sous-services</li>
                </ul>
                <a className="nav-link" href="#">
                    <span className="servType"></span> 
                    <em>Experts</em>
                </a>
            </div>
        </div>
    )
}

export default ServCards;
