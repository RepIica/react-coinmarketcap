import React from 'react'

const Coin = (props) => {
  const coin = props.coin
  return(
    <div className="row">
      <div className="col-sm-1">{coin.rank}</div>
      <div className="col-sm-1" onClick={(e) => { console.log(coin);
        props.handleClick(coin)
      }}>{coin.symbol}</div>
      <div className="col-sm-3">${parseUSD(coin.quotes.USD.market_cap)}</div>
      <div className="col-sm-3">${parseUSD(coin.quotes.USD.volume_24h)}</div>
      <div className="col-sm-2">${parseUSD(coin.quotes.USD.price)}</div>
      <div className="col-sm-2">{coin.quotes.USD.percent_change_24h}%</div>
    </div>
  )

}

export default Coin

function parseUSD(num){
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
