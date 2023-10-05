import './home.css'
import Mainpage from './mainpage/mainpage'
import Prudctpage from './prodectpage/prudctpage'
import { Routes, Route } from "react-router-dom"


function Home() {
    return(
        <div className='home'>
            <div className='home-1'>
                <h3>32 : عدد الاكسسوارات</h3>
                <div className='line'>|</div>
                <h3>52 : عدد الملابس</h3>
                <div className='line'>|</div>
                <h3>61 : عدد العروض</h3>
            </div>

            <Routes>
                    <Route path="/" element={ <Mainpage/> } />
                    <Route path="/prudcts" element={ <Prudctpage/> } />
            </Routes>
        </div>
    )
}

export default Home;