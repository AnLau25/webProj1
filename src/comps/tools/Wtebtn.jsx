import React from 'react';
import './Wtebtn.css';
import { Button } from 'react-bootstrap';

const Wtebtn = ({ prop, onClick }) => {
  return (
    <div>
      <Button type='button' className='wcustom-button' onClick={onClick}>
        <h5 className='wcustom-button-title'>{prop}</h5>
      </Button>
    </div>
  );
}

export default Wtebtn;
