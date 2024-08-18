//adding Api for movies and online streaming services 
let container = document.querySelector('.movies-container');

// Fetching data from the APIs
    
    const movieApi = 'https://api.themoviedb.org/3/movie/popular?api_key=your_api_key&language=en-US&page=1';
    const streamingApi = 'https://api.themoviedb.org/3/discover/movie?api_key=your_api_key&with_streaming_company=181';
    
    async function getPopularMovies() {
        try {
            const response = await axios.get(movieApi);
            return response.data.results;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
        }

    }
    
    async function getStreamingMovies() {
        try {
            const response = await axios.get(streamingApi);
            return response.data.results;
        } catch (error) {
            console.error('Error fetching streaming movies:', error);
        }
    }
    
    (async () => {
        const popularMovies = await getPopularMovies();
        const streamingMovies = await getStreamingMovies();
        
        console.log('Popular Movies:');
        popularMovies.forEach(movie => console.log(movie.title));
        
        console.log('\nStreaming Movies:');
        streamingMovies.forEach(movie => console.log(movie.title));

    
    });

    //adding Api data in container
    async function displayMovies(movies) {
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.overview.slice(0, 150)}...</p>
            `;
            container.appendChild(movieDiv);
            movieDiv.addEventListener('click', () => {
                window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank');
            });

            
        });

    };

    //adding all API data and streaming services in webpages
    displayMovies(popularMovies);
    displayMovies(streamingMovies);
    
 //adding API data in container with pagination
 const perPage = 10;
 const currentPage = 1;
 const totalPages = Math.ceil((popularMovies.length + streamingMovies.length) / perPage);

 const pagination = document.createElement('div');
 pagination.classList.add('pagination');

 for (let i = 1; i <= totalPages; i++) {
     const pageButton = document.createElement('button');
     pageButton.textContent = i;
     pageButton.addEventListener('click', () => {
         currentPage = i;
         displayMovies(getPageMovies());
     });
     if (i === currentPage) {
         pageButton.classList.add('active');
     }
     pagination.appendChild(pageButton);
 }

 document.body.appendChild(pagination);

 function getPageMovies() {
     const startIndex = (currentPage - 1) * perPage;
     const endIndex = startIndex + perPage;
     return popularMovies.slice(startIndex, endIndex).Math.max(0, Math.ceil(endIndex - startIndex));
     return streamingMovies.slice(startIndex, endIndex).Math.max(0, Math.ceil(endIndex - startIndex));
     // return [...popularMovies.slice(startIndex, endIndex),...streamingMovies.slice(startIndex, endIndex)].slice(0, perPage);
     // return [...popularMovies,...streamingMovies].slice(startIndex, endIndex).slice(0, perPage);
 }

 //adding API data in container with search functionality
 const searchInput = document.getElementById('search');
 searchInput.addEventListener('input', () => {
     const searchTerm = searchInput.value.toLowerCase();
     const filteredMovies = popularMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm))
        .concat(streamingMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm)));
     displayMovies(filteredMovies);
 });
 //adding API data in container with sorting functionality
 const sortButtons = document.querySelectorAll('.sort-button');
 sortButtons.forEach(button => {
     button.addEventListener('click', () => {
         const sortedMovies = [...popularMovies,...streamingMovies].sort((a, b) => {
             if (button.dataset.sort === 'asc') {
                 return a[button.dataset.sortField].localeCompare(b[button.dataset.sortField]);
             } else {
                 return b[button.dataset.sortField].Math.max(a[button.dataset.sortField], b[button.dataset.sortField] - b[button.dataset.sortField] + 1);
             };
             displayMovies(sortedMovies);

             sortButtons.forEach(btn => btn.classList.remove('active'));
             button.classList.add('active');
         });
         button.dataset.sort = button.dataset.sort === 'asc'? 'desc' : 'asc';
         button.textContent = button.dataset.sort === 'asc'? 'Sort Descending' : 'Sort Ascending';
         button.dataset.sortField = button.dataset.field;
         // button.textContent = button.dataset.sort === 'asc'? 'Sort Descending' : 'Sort Ascending';
         // button.dataset.field = button.dataset.field === 'title'? 'popularity' : 'title';
     });

     button.classList.remove('active');
     if (button.dataset.field === 'title') {
         button.classList.add('active');
     }
     button.textContent = button.dataset.sort === 'asc'? 'Sort Descending' : 'Sort Ascending';
     button.dataset.sortField = button.dataset.field;
     // button.textContent = button.dataset.sort === 'asc'? 'Sort Descending' : 'Sort Ascending';
     // button.dataset.field = button.dataset.field === 'title'? 'popularity' : 'title';
 });




