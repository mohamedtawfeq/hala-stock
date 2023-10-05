import './navbaruser.css'
import { Link } from "react-router-dom";

import logo from '../image/logo-hala.png'
import logohome from '../../src/dash-board/icons/home.svg'
import prodect from '../../src/dash-board/icons/prodect.svg'
import what from '../../src/dash-board/icons/what.svg'





function navbar() {
    return ( 
        <div className="Navbar">
            <div className='nav'>
                <div className='nav2'>
                    <ul>
                        <li><Link className='Link'>من نحن</Link><img className='logo' src={what} alt='product-img' /></li>
                        <li><Link className='Link'>ألمنتجات </Link><img className='logo' src={prodect} alt='product-img' /></li>
                        <li><Link className='Link'>ألصفحة الرئسية</Link><img className='logo' src={logohome} alt='product-img' /></li>
                    </ul>
                </div>
            <img className='logoimg' src={logo} alt='product-img' />
            </div>
        </div>

     );
}

export default navbar;