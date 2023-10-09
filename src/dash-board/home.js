import ProductDetails from './ProductDetails';
import Header from './headerDash';
import './home.css'
import Mainpage from './mainpage/mainpage'
import { Routes, Route } from "react-router-dom"


function Home() {
    return(
        <div className='home'>
            <div className='home-1'>
                <h3>32 : ملابس نسائية</h3>
                <div className='line'>|</div>
                <h3>52 : اكسسوارت</h3>
                <div className='line'>|</div>
                <h3>61 : ملابس رجالي</h3>
                <div className='line'>|</div>
                <h3>61 : ملابس اطفال</h3>
                <div className='line'>|</div>
                <h3>61 : منزلي</h3>
                <div className='line'>|</div>
                <h3>61 : العاب</h3>
                <div className='line'>|</div>
                <h3>61 :حقائب</h3>
                <div className='line'>|</div>
                <h3>61 : أحذية</h3>
            </div>

            <div className='home-prudect'>
            <Routes>
                    <Route path="/Accessories/details" element={ <ProductDetails/> } />
                    <Route path="/header/" element={ <Mainpage/> } />
                    <Route path="*" element={ <Header/> } />
            </Routes>
            </div>
        </div>
    )
}

export default Home;