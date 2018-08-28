import React from 'react'

const CoinDisplay = (props) => {
  const coin = props.currentCoin
  const coinPrice = coin.quotes.USD.price
  console.log(coin)
  // debugger
  return(
    <React.Fragment>
      <div className="row">
        <div className="col-sm-1"><h2>{coin.id}</h2></div>
        <div className="col-sm-2"><h2>{coin.name}</h2></div>
        <div className="col-sm-3"><h2>{coin.symbol}</h2></div>
        <div className="col-sm-3"><h2>${parseUSD(coin.quotes.USD.price)}</h2></div>
      </div>
      <div className="row">
        <div className="col-sm-4"><h5>Circulating Supply: {coin.circulating_supply}</h5></div>
        <div className="col-sm-4"><h5>Total Supply: {coin.total_supply}</h5></div>
        <div className="col-sm-4"><h5>Max Supply: {coin.max_supply}</h5></div>
      </div>
      <div className="row">
        <div className="col-sm-4"><h5>1 Hr Change: ${parseUSD(coin.quotes.USD.percent_change_1h)}</h5></div>
        <div className="col-sm-4"><h5>24 Hr Change: ${parseUSD(coin.quotes.USD.percent_change_24h)}</h5></div>
        <div className="col-sm-4"><h5>7 Days Change: ${parseUSD(coin.quotes.USD.percent_change_7d)}</h5></div>
      </div>
    </React.Fragment>



  )

}

export default CoinDisplay

function parseUSD(num){
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
