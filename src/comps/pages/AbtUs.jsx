import React from 'react';
import Wtebtn from '../tools/Wtebtn';
import '.src/App.css';

const AbtUs = () => {
  return (
    <section className='AboutUs' id='abtus'>
      <div className='imgsfloat'>
        <img className='img1' src='Redreg.svg' alt="Red Decoration"/>
        <img className='img2' src='Regyota.png' alt="Toyota"/>
      </div>
      <div className='info'>
        <div className='AbtTitle'>
          <p><em>Pourquoi nous ?</em></p>
          <h1>COMMENT FAISONS-NOUS LA DIFFÉRENCE?</h1>
        </div>
        <div className='txt'>
          <h2><img src='star.png' alt="Star"/><em>25+ ans d'expérience</em></h2>
          <p>Bref résumé de l'histoire de l'entreprise et de ses débuts. 
              Il peut être fait mention du fondateur de l'entreprise et de la manière dont il a décidé de la démarrer, de la communauté, etc. 
              Parler de l'équipe, du multiculturalisme, etc.</p>
        </div>
        <div className='txt'>
          <h2><img src='ngrnj.svg' alt="Gear"/><em>Pièces de qualité</em></h2>
          <p>Discuter des marques avec lesquelles l'entreprise travaille, de l'approvisionnement en pièces, des fournisseurs et des autres partenaires qui soutiennent l'entreprise. 
              Peut-être évoquer les métaux d'origine nationale.</p>
        </div>
        <div className='wbtn-container'>
          <Wtebtn href="#experts" className='wbtn' prop="Notre équipe"/>
        </div>
      </div>
    </section>
  );
}

export default AbtUs;
