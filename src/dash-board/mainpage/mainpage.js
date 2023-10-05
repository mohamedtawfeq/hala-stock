import React, { useState } from 'react';
import './mainpage.css'
import { Link } from "react-router-dom";
import AppAccessories1 from './Accessories1/appAccessories1'
import App_clothes from './clothes1/appclothes1'
import { Routes, Route } from "react-router-dom"

function Mainpage() {

    const [marginRight, setMarginRight] = useState(4);
    const [marginLift, setMarginLift] = useState(0);
    const [width, setwidth] = useState(80);

    const handleClickRight = () => {
      setMarginRight(marginRight === 20 ? 0 : 4);
      setwidth(width === 20 ? 0 :80);
    };
    const handleClicklift = () => {
      setMarginRight(marginLift === 200 ? 0 : 202 );
      setwidth(width === 20 ? 0 :120);
    };

    const boxStyleRight = {
        marginRight: `${marginRight}px` ,
        width: `${width}px` 
    };
    

    return(
        <div className='main'>
            <h3>العروض</h3>
            <div className='chose'>
                <Link className='h4' onClick={handleClicklift} to="/Accessories">ألاكسسوارات</Link>
                <Link className='h4' onClick={handleClickRight} to="/">الملابس</Link>
                <div className='chose2' style={boxStyleRight}></div>
            </div>
            <Routes>
                    <Route path="/" element={ <App_clothes/> } />
                    <Route path="/Accessories" element={ <AppAccessories1/> } />
            </Routes>
        </div>
    )
}

export default Mainpage;