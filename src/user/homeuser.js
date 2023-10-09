import './homeuser.css'
import Header from './header';
import Navberuser from './navbaruser'
import ProductDetails from './ProductDetails';

import { Routes, Route } from "react-router-dom"


function Homeuser() {
    return ( 
        <div className='homeuser'>
            <Navberuser/>
            <Routes>
                    <Route path="/Accessories/details" element={ <ProductDetails/> } />
                    <Route path="/*" element={ <Header/> } />
            </Routes>
        </div>
     );
}

export default Homeuser;