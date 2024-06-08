import React, { useEffect } from 'react';
import Redbtn from './Redbtn';
import Wtebtn from './Wtebtn';
import './Sinsout.css';

const Sinsout = ({ onClose, onSignIn }) => {

  useEffect(() => {
    const content = document.getElementById('sinsout');
    const Signbtn = document.getElementById('signin');
    const Logbtn = document.getElementById('login');

    const handleSignIn = () => {
      content.classList.add('active');
    };

    const handleLogIn = () => {
      content.classList.remove('active');
    };

    if (Signbtn && Logbtn) {
      Signbtn.addEventListener('click', handleSignIn);
      Logbtn.addEventListener('click', handleLogIn);

      return () => {
        Signbtn.removeEventListener('click', handleSignIn);
        Logbtn.removeEventListener('click', handleLogIn);
      };
    }
  }, []);

  const handleSignInClick = () => {
    const content = document.getElementById('sinsout');
    content.classList.add('active');
  };

  const handleLogInClick = () => {
    const content = document.getElementById('sinsout');
    content.classList.remove('active');
  };

  const handleRedbtnClick = () => {
    onClose();
    onSignIn(); // Assume this function will handle the sign-in logic
  };

  return (
    <div className='sinsout justify-content align-items-center d-flex shadow-lg' id='sinsout'>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className='col-md-6 d-flex justify-content-center'>
        <form>
          <div className='header-text mb-4 justify-content-center'>
            <h1>Créer un compte</h1>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder="Nom d'usager" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='email' placeholder="E-mail" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder="Mot de passe" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <Redbtn prop='Créer' onClick={handleRedbtnClick} />
          </div>
        </form>
      </div>

      <div className='col-md-6 right-box'>
        <form>
          <div className='header-text mb-4 justify-content-center'>
            <h1>Se connecter</h1>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder="Nom d'usager" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3'>
            <input type='password' placeholder="Mot de passe" className='form-control form-control-lg bg-light fs-6' />
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <Redbtn prop='Connecter' onClick={handleRedbtnClick} />
          </div>
        </form>
      </div>

      <div className='switch-content'>
        <div className='switch'>
          <div className='switch-panel switch-left'>
            <h1>Bienvenu</h1>
            <p>Nous sommes ravis de vous revoir</p>
            <Wtebtn prop='Se connecter' id='login' onClick={handleLogInClick} />
          </div>
          <div className='switch-panel switch-right'>
            <h1>Oh, bonjour!</h1>
            <p>Vous êtes nouveau ?</p>
            <Wtebtn prop='Créez un compte' id='signin' onClick={handleSignInClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sinsout;
