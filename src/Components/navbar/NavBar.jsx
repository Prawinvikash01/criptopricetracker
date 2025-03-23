import React from 'react'
import Button from 'react-bootstrap/Button';
import "./NavBar.css"
import logo from "../../assets/logo.png";  // Adjust the path based on the location of NavBar.js

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="CryptoPlace" className='logo'/>
        <div className='items'>
           <p>Home</p>
           <p>Login</p>
           <p>Features</p>
           <p>Option</p>
        </div>

        <div className="navright">
            <select>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="euro">EURO</option>
            </select>
            <Button variant="primary" size="sm">Login</Button>

        </div>
    </div>
  )
}

export default NavBar