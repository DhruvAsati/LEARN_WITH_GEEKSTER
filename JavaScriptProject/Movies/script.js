let url = 'https://search.imdbot.workers.dev/?q=Niram';

let searchInput = document.getElementById('searchInput');

// Fetch movie details from IMDb API

async function fetchMovieDetails() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    displayMovieDetails(data);
}


// Display movie details

function displayMovieDetails(data) {
    let movieArr = data.description;
    let container = document.getElementById('movieContainer');
    container.innerHTML = '';
    movieArr.forEach((movie)=>{
        container.innerHTML += `
          <div class="movie-card">
            <h2>${movie["#TITLE"]}</h2>
                <img src="${movie["#IMG_POSTER"]}" height = "350px" width="250px"></img>
                <p>${movie["#AKA"]}</p>
                <p>${movie["#YEAR"]}</p>
                
          
          </div>`

    })
}

//searching the movie
let searchBtn = document.querySelector('#search-button');
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let searchText = searchInput.value.toLowerCase();
    url = `https://search.imdbot.workers.dev/?q=${searchText}`;
    fetchMovieDetails();
});

//fetching top 50 movies

async function fetchTopMovies() {
    const response = await fetch('https://imdbot.workers.dev/?q=top_movies&limit=50');
    const data = await response.json();
    displayMovieDetails(data);
}

window.onload = () =>{
    fetchTopMovies();
    fetchMovieDetails();
    // console.log('Page loaded');

}