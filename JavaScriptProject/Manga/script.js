const apiUrl = 'https://api.jikan.moe/v4/manga';

let currentPage = 1;
let searchTerm = '';

const fetchManga = async (page = 1, search = '') => {
    try {
        const response = await fetch(`${apiUrl}?page=${page}&q=${search}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching manga:', error);
    }
};

const createMangaCard = (manga) => {
    return `
        <div class="manga-card" data-id="${manga.mal_id}">
            <img src="${manga.images.jpg.image_url}" alt="${manga.title}">
            <h3>${manga.title}</h3>
            <button class="show-description-button">Show Description</button>
            <p class="manga-description" style="display:none;">${manga.synopsis ? manga.synopsis : 'No synopsis available.'}</p>
            <button class="read-manga-button">Read Manga</button>
        </div>
    `;
};

const renderManga = (mangaList) => {
    const mangaContainer = document.getElementById('mangaContainer');
    mangaContainer.innerHTML = mangaList.map(createMangaCard).join('');
};

const loadManga = async () => {
    const mangaList = await fetchManga(currentPage, searchTerm);
    renderManga(mangaList);
};

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadManga();
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentPage++;
    loadManga();
});

document.getElementById('searchInput').addEventListener('input', (event) => {
    searchTerm = event.target.value;
    currentPage = 1;
    loadManga();
});

// Event listener for showing/hiding descriptions
document.getElementById('mangaContainer').addEventListener('click', (event) => {
    if (event.target.classList.contains('show-description-button')) {
        const description = event.target.nextElementSibling;
        description.style.display = description.style.display === 'none' ? 'block' : 'none';
        event.target.textContent = description.style.display === 'block' ? 'Hide Description' : 'Show Description';
    }
});

// Function to load and display full manga details
async function fullManga(event) {
    const mangaId = event.target.parentElement.dataset.id;
    try {
        //taking chapter from mangadex api
        // const apiUrl = `https://api.jikan.moe/v4/manga/{id}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const mangaTitle = data.data.title;
        // Placeholder for chapters since Jikan API does not directly provide chapter data in the main manga endpoint
        const chapters = 'Chapters not available in this API.';

        const readFullManga = document.createElement('div');
        readFullManga.innerHTML = `
            <h2>${mangaTitle} - Read Full Manga</h2>
            <p>${chapters}</p>
            <button id="closeReadFullManga">Close</button>
        `;

        readFullManga.addEventListener('click', (event) => {
            if (event.target.id === 'closeReadFullManga') {
                readFullManga.remove();
            }
        });

        document.body.appendChild(readFullManga);
        styleReadFullManga(readFullManga);

    } catch (error) {
        console.error('Error fetching manga details:', error);
    }
}

// Styling for the full manga reading modal
const styleReadFullManga = (element) => {
    element.style.position = 'fixed';
    element.style.transform = 'translate(-50%, -50%)';
    element.style.top = '50%';
    element.style.left = '50%';
    element.style.zIndex = '1000';
    element.style.backgroundColor = 'white';
    element.style.padding = '20px';
    element.style.borderRadius = '5px';
    element.style.display = 'block';
    element.style.border = '1px solid black';
    element.style.overflowY = 'scroll';
    element.style.maxHeight = '500px';
    element.style.overflowX = 'hidden';
    element.style.boxSizing = 'border-box';
};

// Event listener for reading full manga
document.getElementById('mangaContainer').addEventListener('click', (event) => {
    if (event.target.classList.contains('read-manga-button')) {
        fullManga(event);
    }
});

// Load initial manga list on page load
window.onload = loadManga;


//logout from account

document.getElementById('logoutButton').addEventListener('click', () => {
    document.querySelector('body').style.backgroundImage= 'linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0,0.8))';
    let logout = document.createElement('div');
    logout.classList.add('logoutDiv');
    logout.innerHTML = `<h2>Do you want to LogOut?</h2>
        <div class = "logoutInside-btn">
            <button type="button" class = "logYes">Yes</button>
            <button type="button" class="logNo">No</button>
        </div>   
    
    `;
        document.body.appendChild(logout);
        logout.style.position = 'fixed';
        logout.style.transform = 'translate(-50%, -50%)';
        logout.style.top = '50%';
        logout.style.left = '50%';
        logout.style.zIndex = '1000';
        logout.style.backgroundColor = 'white';
        logout.style.padding = '1rem  2rem';
        logout.style.borderRadius = '5px';
        logout.style.display = 'block';
        logout.style.border = '2px solid black';
        logout.style.maxHeight = '600px';
        logout.style.overflowX = 'hidden';
        logout.style.boxSizing = 'border-box';
        logout.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                if (event.target.textContent === 'Yes') {
                    localStorage.removeItem('token');
                    logout.innerHTML = '<b>Signing off...<b>';
                    logout.style.backgroundColor = 'rgba(255, 255, 255,0.6);'
                    logout.style.color = 'black';
                   setTimeout(()=>{
                        window.location.href = './login.html';
                   }, 3000 );
                } else if (event.target.textContent === 'No') {
                        logout.remove();
                        window.location.href = './home.html';
                    }

            };
        });;

});
