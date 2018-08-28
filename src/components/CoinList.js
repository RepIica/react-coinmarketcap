import React, { Component } from 'react';
import Coin from './Coin.js'

const CoinList = (props) => {
  const coins = props.coins
  console.log(coins);
  const coinRows = coins.map(coin => {
    return <Coin coin={coin} key={coin.id} handleClick={props.handleClick}/>
  })

  return(
    <React.Fragment>
      <div className="row">
        <div className="col-sm-1">Rank</div>
        <div className="col-sm-1">Ticker</div>
        <div className="col-sm-3">Market Cap</div>
        <div className="col-sm-3">24h Vol</div>
        <div className="col-sm-2">Price</div>
        <div className="col-sm-2">24h Change</div>
      </div>
      {coinRows}
    </React.Fragment>
  )
}

export default CoinList
