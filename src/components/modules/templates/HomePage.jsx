import React, { useEffect, useState } from 'react'
import { getCoinList } from '../../../services/CryptoApi';

function HomePage() {

    const[coins , setCoins] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const res = fetch(getCoinList());
            const json = res.json();
            setCoins(json);
        }
        getData();
    },[]);
  return (
    <div>
    
    </div>
  )
}

export default HomePage
