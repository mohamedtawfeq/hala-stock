import './productDetails.css'
import Back from '../dash-board/icons/Back.svg'
import Call from '../dash-board/icons/call.svg'
import img from '../image/details.png'
import { Link } from 'react-router-dom'

function ProductDetails() {
    return ( 
        <div className="ProductDetails">
            <div >
                <Link className='Back' to='/'>
                <img src={Back} alt='product-img' />
                </Link>
            </div>
            <div className='Detaila'>
                <h2>تفاصيل المنتج</h2>
            </div>
            <div className='box'>

                <div className='box-1'>
                    <div className='box-1-2'>
                    <h1>قميس اخضر</h1>
                    <h3>قميس اخصر جديد قماش ستن </h3>
                    <h3>الحجم : S</h3>
                    <h3>السعر : 15,000 الف</h3>
                    <h3>رقم المنتج : 1</h3>
                    <h3>الحالة : جديد</h3>

                    <button>
                        <div className='button'>
                        <img className='masseages' src={Call} alt='product-img' />
                        <h4>أطلب الان</h4>
                        </div>
                    </button>

                    </div>
                </div>

                <div className='box-2'>
                        <img src={img} alt='product-img' />
                </div>

            </div>
        </div>
     );
}

export default ProductDetails;