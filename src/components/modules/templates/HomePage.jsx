import React, { useEffect, useState } from 'react';

import { getCoinList } from '../../../services/CryptoApi';
import TableCoins from '../TableCoins';
import Search from '../Search';
import Pagination from '../Pagination';
import Chart from '../Chart';

function HomePage() {

    const[isLoading , setIsLoading] = useState(true)
    const[coins , setCoins] = useState([]);
    const[currency , setCurrency] = useState("usd");
    const [page , setPage] =useState(1);
    const [chart , setChart] =useState(null);

    useEffect(()=>{
        const getData = async()=>{
            try{
                
                const res = await fetch(getCoinList(currency,page));
                const json =await res.json();
                
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
        <TableCoins coins={coins} currency = {currency} isLoading={isLoading} setChart={setChart}/>
        <Pagination page={page} setPage = {setPage}/>
        {!! chart && <Chart chart={chart} setChart={setChart}/>}

    </div>
  )
}

export default HomePage
