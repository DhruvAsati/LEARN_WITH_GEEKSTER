const coinsContainer = document.getElementById('coin-item');

//fetching coin fron api

const getTrendingCoins = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = await response.json();
    console.log(data);
   
    data.coins.forEach(coinData => {
        const coinLogo = coinData.item.small;
        const coinName = coinData.item.name;
        const coniSymbol = coinData.item.symbol;
        const priceInINR = coinData.item.data.price;
        const coinsCointainer = document.getElementById('coin-item');
        const currencyCard = `
            <img src="${coinLogo}" alt="Crypto currency logo">
            <div class="info-container">
                <h3>${coinName} (${coniSymbol})</h3>
                <span>₹ ${priceInINR.toFixed(4)}</span>
            </div>
        `;

        const currencyCardNode = document.createElement("div");
        currencyCardNode.classList.add("crypto-card");
        currencyCardNode.innerHTML = currencyCard;
        coinsCointainer.appendChild(currencyCardNode);
    });


};



getTrendingCoins();





