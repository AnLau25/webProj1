import React from 'react'
import './Redbtn.css'
import { Button } from 'react-bootstrap'

const Redbtn = ({ prop }) => {
    return (
        <div>
            <Button type='button' className='custom-button'>
                <h1>{prop}</h1>
            </Button>
        </div>
    );
}

export default Redbtn;