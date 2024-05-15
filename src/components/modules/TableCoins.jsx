import React from 'react'

function TableCoins({coins}) {
  return (
    <div>
      <table>
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
            <tr key={coin.id}>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>{coin.name}</td>
              <td>{coin.current_price}</td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default TableCoins
