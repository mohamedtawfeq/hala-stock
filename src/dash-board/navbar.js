import React, { useState } from 'react';
import './navbar.css';
import logo from '../image/logo-hala.png';
import home from './icons/home.svg'
import prodect from './icons/prodect.svg'
import insertphoto from './icons/insert-photo.svg'

import { Link } from "react-router-dom";

function Navber() {
    const [marginTop, setMarginTop] = useState(-13);
    const [marginbottom, setMarginBottom] = useState(200);

    const handleClicktop = () => {
      setMarginTop(marginTop === 20 ? 0 : 65);
    };
    const handleClickbottom = () => {
      setMarginTop(marginbottom === 90 ? -13 : -13);
    };

    const boxStyletop = {
        marginTop: `${marginTop}px` 
    };


    return(
        <div className='navbar'>
            <div className='nav-1-1'>
                <div className='nav-1-2'>
                    <img className='logo-1' src={logo} alt="Dinosaur"/>
                </div>

                <div className='nav-2-1'>
                    <div className='nav-2-2'>
                        <div className='nav-2-3'style={boxStyletop}>
                            <div className='nav-2-4'></div>
                        </div>
                        <div className='nav-2-5'>
                            <Link className='h2' onClick={handleClickbottom} to="/">ألصفحة الرئسية<img src={home} alt="صورة SVG"></img></Link>
                            <Link className='h2' id='down' onClick={handleClicktop} to="/prudcts">ألمنتجات<img src={prodect} alt="صورة SVG"></img></Link>
                        </div> 
                    </div>
                </div>
                <div className='hr'></div>

                <div className='nav-3-1'>
                    <div className='insertphoto'>
                        <div className='insertphoto-1'>
                        <h3>صورة المنتج</h3>
                        <img className='iconinsertphoto' src={insertphoto} alt="Dinosaur"/>
                        </div>
                    </div>

                    <div className='insertname'>
                        <form>
                        <label for="fname">اسم المنتج</label>
                        <input className='input' type="text" id="username" name="username" placeholder='الاسم'/>

                        <label for="fname">وصف للمنتج</label>
                        <input className='input' type="text" id="username" name="username" placeholder='الوصف'/>

                        <label for="fname">الحجم</label>
                        <input className='input size' type="text" id="username" name="username" placeholder='الحجم'/>

                        <label for="fname">السعر</label>
                        <input className='input' type="text" id="username" name="username" placeholder='السعر'/>

                        <label className='label-for-radio' for="fname">حالة المنتج</label>
                        
                        <div className='radios-all'>
                        <div className='radios' >
                        <h3>مستعمل</h3>
                        <input className='radio' type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                        </div>

                        <div className='radios' >
                        <h3>جديد </h3>
                        <input className='radio' type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                        </div>
                        </div>

                        <label className='label-for-radio' for="fname">نوع المنتج</label>
                        
                        <div className='radios-all'>
                        <div className='radios' >
                        <h3>الاكسسوارات</h3>
                        <input className='radio' type="radio" id="javascript" name="fav_language2" value="JavaScript2"/>
                        </div>

                        <div className='radios' >
                        <h3>ملابس</h3>
                        <input className='radio' type="radio" id="javascript" name="fav_language2" value="JavaScript2"/>
                        </div>
                        </div>
                    
                        <input className='bottom input' type="submit" value="أضافة"/>
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navber ;