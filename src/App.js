import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import { Route,Routes } from "react-router-dom"


const App = () => {
        return(
                <div className='App'>
                        <Routes>
                                <Route path="/checkout" element={<><Header/><Checkout/></>}></Route>
                                <Route path='/' element={<><Header/><Home/></>}></Route>
                        </Routes>
                </div>

        )

}


export default App;