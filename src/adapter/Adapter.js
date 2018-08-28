  function getCoins(){
    //json parse resorts by id
    const baseURL = 'https://api.coinmarketcap.com/v2/ticker/?sort=rank&limit=10'
    return fetch(baseURL)
      .then(r => r.json())
  }

  export default getCoins
