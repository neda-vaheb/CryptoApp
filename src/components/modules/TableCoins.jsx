import { MdEuroSymbol } from "react-icons/md";
import { PiCurrencyJpy } from "react-icons/pi";
import { RotatingLines } from 'react-loader-spinner';

import styles from"./TableCoins.module.css";
import chartUp from"../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableCoins({coins ,currency,isLoading}) {
  
  return (
    <div className={styles.container}>
      {
      isLoading ? <RotatingLines className={styles.loader}  strokeColor="blue" strokeWidth="2"/> : (
        <table className={styles.table}>
        <thead>
            <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Valume</th>
            </tr>

        </thead>
        <tbody>
          {coins.map((coin)=>(
         <TableRow coin={coin} key={coin.id} currency={currency}/>
          ))}


        </tbody>
      </table>
      )
    }
      
    </div>
  )
}

export default TableCoins;

const setSymbolCurrency = (currency)=>{
if(currency === "usd"){
  return "$";
}  else if( currency === "eur"){
  return <MdEuroSymbol />;
}
else{
  return <PiCurrencyJpy />;
}
  
}

function TableRow({coin , currency}){
  const {id , symbol,image,name,current_price ,price_change_percentage_24h:price_change , total_volume} = coin
  return(  
    <tr key={id}>
         <td>
          <div className={styles.symbol}>
          <img src={image}/>
              <span> {symbol.toUpperCase()}</span>
          </div>
         
          </td>
          <td>{name}</td>
          <td><span>{setSymbolCurrency(currency)}</span>{current_price.toLocaleString()}</td>
         <td className={price_change>0 ? styles.success : styles.error}>%{price_change.toLocaleString()}</td>
         <td>{total_volume.toLocaleString()}</td>
         <td><img src={price_change > 0 ? chartUp : chartDown} /></td>
     </tr>)


}