
let imageLoader = document.getElementById('loading');

// Fetch images from the API

let Apikey = '9EIJ5cHVjkvEz3hcF-ahxZ0VBFpP4HVx61_p7cb7lP8';

async function fetchImages(photos) {
   let  response= await fetch(`https://api.unsplash.com/photos/random/?client_id=FJgt1TMaEIMJIl39A2fxZpg6eBe9AJzM9nR7rypnqbU&count=30`);
   let  data= await response.json();
   data.forEach(photos => {
        let image = document.createElement('img');
        image.src = photos.urls.regular;
        let container = document.getElementById('imageContainer');
        imageLoader.style.display = 'block';
        setTimeout(function() {
            imageLoader.style.display = 'none';
           
        
        }, 2000),
        container.appendChild(image);

        image.addEventListener('click', () => {
                let newTab = window.open(photos.links.download, '_blank');
                newTab.focus();
            });
        });


   
}

fetchImages(30);

//infinite scrolling

window.addEventListener('scroll', () => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetchImages(30);
    }
});


