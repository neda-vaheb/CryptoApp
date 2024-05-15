import React, { useEffect, useState } from 'react'
import { getCoinList } from '../../../services/CryptoApi';
import TableCoins from '../TableCoins';

function HomePage() {

    const[coins , setCoins] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await fetch(getCoinList());
                const json =await res.json();
                console.log(json)
                setCoins(json);

            }catch(error){
                console.log(error.massage)
            }
         
        }
        getData();
    },[]);
  return (
    <div>
        <TableCoins coins={coins}/>
    </div>
  )
}

export default HomePage
