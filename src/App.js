import React, { Component } from 'react';
import './App.css';
import CoinList from './components/CoinList.js'
import CoinDisplay from './components/CoinDisplay.js'
import Nav from './components/Nav.js'
import getCoins from './adapter/Adapter.js'

class App extends Component {
  state = {
    sort: 'rank',
    toggle: "USD",
    coins: [],
    current: null
  }

  sortCoins = (coinsArray) => {
    coinsArray.sort((a, b) => parseFloat(a[this.state.sort]) - parseFloat(b[this.state.sort]));
    console.log(`coins array - sorted by rank:`, coinsArray)
  }

  componentDidMount(){
    getCoins()
     .then(r => {
       const coinsArray = Object.values(r.data)
       this.sortCoins(coinsArray)
       this.setState({
         coins: coinsArray
       })
     })
  }

  clickHandler = (e) => {
    // this.setState({
    //   sort: e.target.value.replace(' ')
    // }, ()=> {
    //   const coinsArray = this.state.coins
    //   this.sortCoins(coinsArray)
    //   this.setState({
    //     coins: coinsArray
    //   })
    //
    // })

  }

  showCurrent = (coin) => {
    this.setState({
      current: coin
    })
  }


  render() {
    console.log(this.state.coins);
    return (
      <div className="container">
        <Nav clickHandler={this.clickHandler}/>
        <CoinList coins={this.state.coins} handleClick = {this.showCurrent}/>
        {this.state.current ? <CoinDisplay currentCoin={this.state.current}/> : null}

      </div>
    );
  }
}

export default App;
