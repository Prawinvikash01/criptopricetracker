import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; 
import './Home.css'
import { CoinContext } from '../../Context/CoinContext'
import Loader from './Loader';
import Top15 from './Top15';
const Home = () => {

  const{allcoins,currency} = useContext(CoinContext);
  const [displaycoin,setdisplaycoin] = useState([])
  const [isLoading,SetLoading] = useState(true);

  const [input,setinput] = useState("");
  const searchhandler =  async (event)=>{
        event.preventDefault();
        const coins = await allcoins.filter((item)=>
           item.name.toLowerCase().includes(input.toLowerCase())
        )
        setdisplaycoin(coins);
  }

  const inputhandler = (event)=>{
      setinput(event.target.value)

      if(event.target.value==="") 
      {
        setdisplaycoin(allcoins);
      }
  }
  useEffect(()=>{
        setdisplaycoin(allcoins);
        SetLoading(true);
        setTimeout(() => {
          SetLoading(false);
        }, 600);
  },[allcoins])

  return (
    <div className='home'>
      <div className='hero'>
         <h1>Largest <br/> Crypto MarketPlace</h1>
         <p>Welcome to the world's largest cryptocurrency marketplace.Signup to explore about cryptos
         </p>


         <form onSubmit={searchhandler}>
           <input type="text"  placeholder='search crypto' onChange={inputhandler}
           value={input} list='coinlist'/>

           <datalist id='coinlist'>
            {allcoins.map((item,index)=>(
              <option key={index} value={item.name}/>
            ))}
           </datalist>
           <button type='submit'>Submit</button>
         </form>
      </div>
      

      <Top15/>

      {isLoading ? (<div style={{textAlign:"center"}}>
       <Loader/>
      </div>) : 
      (
        
      
      
      <div className='cryptotable'>
        <div className='tablelayout'>
          <p>#</p>
          <p style={{marginLeft:"60px"}}>Coin</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H change</p>
          <p className='marketcap'>Market Cap</p>
        </div>
        {
          displaycoin.slice(0,15).map((item,index)=>(
              
            <Link className='tablelayout' key={index} to={`/coin/${item.id}`}>
               <p>{item.market_cap_rank}</p>
               <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - "+ item.symbol}</p>
               </div>
               <p>{currency.Symbol}{item.current_price.toLocaleString()}</p>
               <p style={{textAlign:"center"}} className={item.price_change_percentage_24h>0?"gogreen":"gored"} >
                {Math.floor(item.price_change_percentage_24h*100)/100}</p>
               <p className='marketcap'>{currency.Symbol}{item.market_cap.toLocaleString()}</p>
            </Link>


          ))
        }

      </div>)}


      
    </div>
  )
}

export default Home