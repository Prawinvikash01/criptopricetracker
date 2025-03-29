import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import "./NavBar.css"
import logo from "../../assets/logo.png";  // Adjust the path based on the location of NavBar.js
import { CoinContext } from '../../Context/CoinContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const {setcurrency} = useContext(CoinContext);

  const currencyhandler = (event)=>{
     switch (event.target.value){
      case "usd":{
        setcurrency({name:"usd",Symbol:"$"});
        break;
      }

      case "eur":{
        setcurrency({name:"eur",Symbol:"€"});
        break;
      }

      case "inr":{
        setcurrency({name:"inr",Symbol:"₹"});
        break;
      }

      default : {
        setcurrency({name:"inr",Symbol:"₹"});
        break;
      }

     }
  }
  return (
    <div className='navbar'>
        <Link to={"/"}><img src={logo} alt="CryptoPlace" className='logo'/></Link>
        <div className='items'>
           <Link to={"/"}><p>Home</p></Link>
           <p>Login</p>
           <p>Features</p>
           <p>Option</p>
        </div>

        <div className="navright">
            <select onChange={currencyhandler}>
                <option value="inr">INR</option>
                <option value="usd">USD</option>
                <option value="eur">EURO</option>
            </select>
            <Button variant="primary" size="sm">Login</Button>

        </div>
    </div>
  )
}

export default NavBar