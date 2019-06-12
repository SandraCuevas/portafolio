import React from 'react';
import YoBici from '../img/yoBici.gif';
import './style/bike.css'

const BikeMe = () => {
    return (
        <div className="imgBike">
            <img src={YoBici} alt="gif"/>
        </div>
    )
}

export default BikeMe;