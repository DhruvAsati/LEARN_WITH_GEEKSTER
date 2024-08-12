//Api key hI19GYLVJDM79LZXW7KoCu3wdziQKf7hjC0e9r_XxgI

const apiKey = 'hI19GYLVJDM79LZXW7KoCu3wdziQKf7hjC0e9r_XxgI';
const searchInput = document.getElementById('searchInput');
const imageContainer = document.getElementById('imageContainer');

// Fetch images from Unsplash API

async function fetchImages(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`);
    const data = await response.json();

    return data.results;
}

// Display images

function displayImages(images) {
    imageContainer.innerHTML = '';

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.urls.small;
        imageContainer.appendChild(img);
        img.addEventListener('click', () => {
        const newTab = window.open(image.links.download, '_blank');
        newTab.focus();

        });

    });
}

// Event listener for search

searchInput.addEventListener('input', async () => {
    const query = searchInput.value;
    const images = await fetchImages(query);
    displayImages(images);
});

// Initial search

searchInput.value = '';
fetchImages('').then(displayImages);

// Filter images by color

const colorFilterInput = document.getElementById('colorFilterInput');

colorFilterInput.addEventListener('input', () => {
    const filterColor = colorFilterInput.value;
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        const imageUrl = image.src;

        fetch(`https://api.codexly.com/color-analysis?image_url=${encodeURIComponent(imageUrl)}`)
           .then(response => response.json())
           .then(data => {
                const dominantColor = data.dominant_colors[0];

                if (dominantColor === filterColor) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
    });
});


