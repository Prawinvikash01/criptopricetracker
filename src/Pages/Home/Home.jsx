import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
         <h1>Largest <br/> Crypto MarketPlace</h1>
         <p>Welcome to the world's largest cryptocurrency marketplace.Signup to explore about cryptos
         </p>
         <form>
           <input type="text"  placeholder='search crypto'/>
           <button type='submit'>Submit</button>
         </form>
      </div>

      <div className='cryptotable'>
        <div className='tablelayout'>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H change</p>
          <p className='marketcap'>Market Cap</p>
        </div>

      </div>
    </div>
  )
}

export default Home