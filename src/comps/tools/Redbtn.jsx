import React from 'react';
import './Redbtn.css';
import { Button } from 'react-bootstrap';

const Redbtn = ({ prop, onClick }) => {
    return (
        <div>
            <Button type='button' className='rcustom-button' onClick={onClick}>
                <h3 className='rcustom-button-title'>{prop}</h3>
            </Button>
        </div>
    );
}

export default Redbtn;
