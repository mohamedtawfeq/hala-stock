import './App.css';
import Dashboard from './dash-board/dashboard'
import Homeuser from './user/homeuser';
import { Routes, Route } from "react-router-dom"
import Loading from './loading/loading';
import { useState , useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);



  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
          <Routes>
                  <Route path="/halastock" element={ <Dashboard/> } />
                  <Route path="/" element={ <Homeuser/> } />
          </Routes>
    )}
    </div>
  );
}
export default App;


{/* 
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nave3 />
          <Switch>
            <Route path="/" exact>
              <Home2 />
              <Name />
              <Header2 />
              <Imgs />
              <Masseges />
              <Footer />
            </Route>
            <Route path="/Menu">
              <Menu />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}
export default App; */}
