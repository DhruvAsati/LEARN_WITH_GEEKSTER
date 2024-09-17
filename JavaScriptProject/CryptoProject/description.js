const fetchCoinsDetails = async ()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const coinId = queryParams.get('id');

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    const data = await response.json();
    console.log(data);
   document.getElementById('coinName').innerText = data.name;
   document.getElementById('coinImage').src = data.image.large;
   document.getElementById('inr').innerText = `INR: ${data.market_data.current_price.inr}`;
   document.getElementById('usd').innerText = `USD: ${data.market_data.current_price.usd}`;
   document.getElementById('eur').innerText = `EUR: ${data.market_data.current_price.eur}`;
   document.getElementById('gbp').innerText = `GBP: ${data.market_data.current_price.gbp}`;
   document.getElementById('desc').innerText = data.description.en;
}

fetchCoinsDetails();