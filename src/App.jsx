import React from 'react'
import NavBar from './Components/navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Coin from './Pages/Coin/Coin';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <NavBar/>

      <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/coin/:coinId' element={ <Coin/> }/>
      </Routes>

      <Footer/>
     
      
    </div>
  )
}

export default App