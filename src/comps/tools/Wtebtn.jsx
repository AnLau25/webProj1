import React from 'react';
import './Wtebtn.css';
import { Button } from 'react-bootstrap';

const Wtebtn = ({ prop, onClick, href = '#' }) => {
  return (
    <div>
      <a href={href} onClick={(e) => { 
          if (onClick) { 
            e.preventDefault(); 
            onClick(); 
          } 
        }}>
        <Button type='button' className='wcustom-button'>
          <h5 className='wcustom-button-title'>{prop}</h5>
        </Button>
      </a>
    </div>
  );
}

export default Wtebtn;