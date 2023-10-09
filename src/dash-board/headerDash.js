import './headerDash.css'
import Mainpage from './mainpage/mainpage'

import { Routes, Route } from "react-router-dom"
import AppAccessories from './components/Acssessories/appAcssessories.js'
import Appbag from './components/bag/appBag.js'
import Appchiald from './components/chiald/appchiald.js'
import AppGame from './components/game/appGame'
import AppMan from './components/man/appMan'
import AppShoes from './components/shoes/appShoes'
import AppTool_home from './components/tool-home/appTool_home'
import AppWoman from './components/woman/appoWoman'



export default function Header() {
    return (
      <div className='slider-menu'>        
        <div className='home_Offers2'>
            <div>
              <Mainpage/>
              <Routes>
                <Route path="/Accessories" element={ <AppAccessories/> } />
                <Route path="/bag" element={ <Appbag/> } />
                <Route path="/chiald" element={ <Appchiald/> } />
                <Route path="/game" element={ <AppGame/> } />
                <Route path="/man" element={ <AppMan/> } />
                <Route path="/shoes" element={ <AppShoes/> } />
                <Route path="/toolhome" element={ <AppTool_home/> } />
                <Route path="/" element={ <AppWoman/> } />
              </Routes>
            </div>
        </div>
      </div>
    );
  }

    