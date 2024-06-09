import React from 'react';
import './Redbtn.css';
import { Button } from 'react-bootstrap';

const Redbtn = ({ prop, onClick, href = '#' }) => {
    return (
        <div>
            <a href={href} onClick={(e) => { 
                    if (onClick) { 
                        e.preventDefault(); 
                        onClick(); 
                    } 
                }}>
                <Button type='button' className='rcustom-button'>
                    <h5 className='rcustom-button-title'>{prop}</h5>
                </Button>
            </a>
        </div>
    );
}

export default Redbtn;
