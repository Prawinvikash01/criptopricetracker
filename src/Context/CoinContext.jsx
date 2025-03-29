import { createContext, useEffect, useState } from "react";

 export const CoinContext = createContext();


 const CoinContextProvider = (props)=>{


        const [allcoins,setallcoins] = useState([]);
        const [currency,setcurrency] = useState({
            name:"inr",
            Symbol:"₹"
        })

        const fetchallcoin = async()=>{
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-pCEZyScAGgg2HWvqK1DEczxp'}
              };
              
              fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
                .then(res => res.json())
                .then(res => setallcoins(res))
                .catch(err => console.error(err));
        }

        useEffect(()=>{
            fetchallcoin();
        },[currency])


       const contextvalue = {
         allcoins,currency,setcurrency
       }


       return (
            <CoinContext.Provider value={contextvalue}>
                {props.children}
            </CoinContext.Provider>
       )
 }

 export default CoinContextProvider;