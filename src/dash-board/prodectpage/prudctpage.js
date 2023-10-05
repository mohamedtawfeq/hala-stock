import React, { useState } from 'react';
import './prudctpage.css'
import { Link } from "react-router-dom";
// import App_Products from './clothes1/appclothes1'
import { Routes, Route } from "react-router-dom"

function Prudctpage() {

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

    // const boxStyleleft = {
    //     marginRight: `${marginRight}px` ,
    //     width: `115px` 
    // };
    const boxStyleRight = {
        marginRight: `${marginRight}px` ,
        width: `${width}px` 
    };
    

    return(
        <div className='main'>
            <h3>ألمنتجات</h3>
            <div className='chose'>
                <Link className='h4' onClick={handleClicklift} to="clothes">ألاكسسوارات</Link>
                <Link className='h4' onClick={handleClickRight} to="test">الملابس</Link>
                <div className='chose2' style={boxStyleRight}>
                </div>
            </div>
            <Routes>
                    {/* <Route path="/clothes" element={ <App_Products/> } /> */}
            </Routes>
        </div>
    )
}

export default Prudctpage;