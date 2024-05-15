import React from 'react';

import styles from"./TableCoins.module.css";
import chartUp from"../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableCoins({coins}) {
  return (
    <div className={styles.container}>
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
         <TableRow coin={coin} key={coin.id}/>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default TableCoins
function TableRow({coin}){
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
          <td>${current_price.toLocaleString()}</td>
         <td className={price_change>0 ? styles.success : styles.error}>%{price_change.toLocaleString()}</td>
         <td>{total_volume.toLocaleString()}</td>
         <td><img src={chartUp} /></td>
     </tr>)


}