import React, { useEffect, useState } from 'react';

import { getCoinList } from '../../../services/CryptoApi';
import TableCoins from '../TableCoins';
import Search from '../Search';

function HomePage() {

    const[coins , setCoins] = useState([]);
    const[currency , setCurrency] = useState("usd")

    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await fetch(getCoinList(currency));
                const json =await res.json();
                console.log(json)
                setCoins(json);

            }catch(error){
                console.log(error.massage)
            }
         
        }
        getData();
    },[currency]);
  return (
    <div>
        <Search currency = {currency} setCurrency={setCurrency}/>
        <TableCoins coins={coins} currency = {currency}/>
    </div>
  )
}

export default HomePage
