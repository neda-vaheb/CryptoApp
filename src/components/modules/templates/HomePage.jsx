import React, { useEffect, useState } from 'react';

import { getCoinList } from '../../../services/CryptoApi';
import TableCoins from '../TableCoins';
import Search from '../Search';
import Pagination from '../Pagination';

function HomePage() {

    const[isLoading , setIsLoading] = useState(true)
    const[coins , setCoins] = useState([]);
    const[currency , setCurrency] = useState("usd");
    const [page , setPage] =useState(1)

    useEffect(()=>{
        const getData = async()=>{
            try{
                
                const res = await fetch(getCoinList(currency,page));
                const json =await res.json();
                console.log(json)
                setCoins(json);
                setIsLoading(false);

            }catch(error){
                console.log(error.massage)
            }
         
        }
        getData();
    },[currency,page]);
  return (
    <div>
        <Search currency = {currency} setCurrency={setCurrency}/>
        <TableCoins coins={coins} currency = {currency} isLoading={isLoading}/>
        <Pagination page={page} setPage = {setPage}/>

    </div>
  )
}

export default HomePage
