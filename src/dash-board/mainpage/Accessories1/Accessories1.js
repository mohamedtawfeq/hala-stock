import './Accessories1.css'
import React, { useState } from 'react';
import imgMenu from '../../icons/menuCard.svg'
import eiddt from '../../icons/eiddt.svg'
import reover from '../../icons/remove.svg'

function Products(props) {

    const [opacity, setopacity] = useState('none');

    const handleClicktop = () => {
        setopacity(opacity === 'none' ? 'block' : 'none');
    };

    const boxStyletop = {
        display: `${opacity}` 
    };


    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>

            <div className='menu' >
                    <img onClick={handleClicktop} src={imgMenu} alt='product-img' />
                </div>

                <div className='menu2'  style={boxStyletop}>
                    <div className='menu22'>
                        <div className='menu3'>
                            <h2>تعديل</h2>
                            <img src={eiddt} alt='product-img' />
                        </div>

                        <div className='menu3 remove'>
                            <h2>حذف</h2>
                            <img src={reover} alt='product-img' />
                        </div>
                    </div>
                </div>


                <img src={props.image} alt='product-img' className='productImage'/>
                <div className='title2'>
                    <div className='title'>
                        <div className='productcondition2'>
                        <h2 className='productcondition'>{props.condition}</h2>
                        </div>
                        <h2 className='productname'>{props.name}</h2>
                    </div>
                    <div className='title'>
                        <h3 className='numberproduct'>رقم المنتج :{props.number}</h3>
                        <h3 className='price'>{props.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;