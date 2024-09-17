//Search functionality

let searchCoin = document.getElementById("input-search");
let searchbtn = document.getElementById("searchBtn");

//api for search https://api.coingecko.com/api/v3/search?query=bitcoin
 
searchbtn.addEventListener("keypress", function() {
    const searchCon = document.getElementById("SearchedCoins");
    searchCon.innerHTML = "";
    searchCon.innerHTML = '<img src= "./assests/Animation.gif"/>'
    setTimeout(()=>{
        searchCon.innerHTML = "";
        searchCoins();
    },5000);
});
 
const searchCoins = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchbtn.value}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    data.coins.forEach(coinData => {
        const coinLogo = coinData.thumb;
        const coinName = coinData.name;
        const coniSymbol = coinData.symbol;
       let searchContainer = document.getElementById("SearchedCoins");
        const currencyCard = `
            <div class = "imgHeader">
                <img src="${coinLogo}" alt="Crypto currency logo">
                <h3>${coinName} (${coniSymbol})</h3>
            </div>
            <div class="info-container">
               <button onclick="moreInfoDescription('${coinData.id}')">More Info</button></a>
            </div>`;
          
        const card = document.createElement("div");
        card.classList.add("coin-card");
        card.innerHTML = currencyCard;
        searchContainer.appendChild(card);
    });
   
}
function moreInfoDescription(id){
    window.location.href = `coinDescription.html?id=${id}`;
  
}  

