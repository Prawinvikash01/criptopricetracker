import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { FourSquare } from 'react-loading-indicators';
import Loader from '../Home/Loader';
import { CoinContext } from '../../Context/CoinContext'
import LineChart from '../../Components/LineChart/LineChart';

const Coin = () => {
   const {coinId} = useParams();
   const [coindetails,setcoindetails] = useState({});
   const [historicaldata,sethistoricaldata] = useState([]);

   const{currency} = useContext(CoinContext);
   
   const fetchcoindata =  ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-pCEZyScAGgg2HWvqK1DEczxp'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?market_data=true`, options)
      .then(res => res.json())
      .then(res => setcoindetails(res))
      .catch(err => console.error(err));
    
   }
   const fetchhistoricaldata =  ()=>{
      const options = {method: 'GET', headers: {accept: 'application/json'}};

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
        .then(res => res.json())
        .then(res => sethistoricaldata(res))
        .catch(err => console.error(err));
          
   }
   useEffect(()=>{
      fetchcoindata();
      fetchhistoricaldata();
      
   },[currency,coinId])
   if(coindetails?.image?.large && historicaldata.length!==0){
  return (
    <div className='coin'>
        <div className="coin-name">
           <img src={coindetails.image.large} alt=""/>
           <p><b>{coindetails?.name}{"-"}{coindetails?.symbol?.toUpperCase()}</b></p>
        </div>
        <div className='coin-chart'>
           <LineChart historicaldata={historicaldata}/>
        </div>
        <div className='coin-info'>
           <ul>
              <li>Crypto Market Rank :</li>
              <li>{coindetails?.market_cap_rank}</li>
           </ul>
           <ul>
              <li>Current Price :</li>
              <li>{currency.Symbol}{coindetails?.market_data?.current_price[currency.name]?.toLocaleString()}</li>
           </ul>

           <ul>
           <li>Total Market Capital :</li>
            <li>{currency.Symbol}{coindetails?.market_data?.market_cap[currency.name]}</li>
            
           </ul>
           
        </div>
    </div>
  )}
  else{
    return(
      <Loader/>
    )
  }
}

export default Coin