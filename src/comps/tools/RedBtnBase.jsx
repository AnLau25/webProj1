import React from 'react';
import './Redbtn.css';
import { Button } from 'react-bootstrap';

const Redbtn = ({ prop, onClick}) => {
    return (
        <div>
            <Button type='wbutton' className='rcustom-button' onClick={onClick}>
                <h5 className='rcustom-button-title'>{prop}</h5>
            </Button>
        </div>
    );
}

export default Redbtn;
