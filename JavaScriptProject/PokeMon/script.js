const apiKey = 'u2_rqCIvuRVjrzovCUqqABFQfCWT8bzyoK608bclk4U';
const images = document.querySelectorAll('.image');

fetch(`https://api.unsplash.com/photos/random?query=office&count=10&client_id=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        data.forEach((photo, index) => {
            images[index].src = photo.urls.regular;
        });
    });

    let search = document.getElementById('search');
    search.addEventListener('keyup', function(event) {
        //adding searching by string
        let searchValue = event.target.value.toLowerCase();
        images.forEach(image => {
            let imageText = image.alt.toLowerCase();
            image.style.display = imageText.includes(searchValue)? 'block' : 'none';
        });
        //adding sorting by name

        images.sort((a, b) => {
            let aText = a.alt.toLowerCase();
            let bText = b.alt.toLowerCase();
            if (aText < bText) {
                return -1;
            }
            if (aText > bText) {
                return 1;
            }
            return 0;
        });
        images.forEach(image => image.parentNode.appendChild(image));
        //adding pagination
        let perPage = 5;
        let currentPage = 1;
        let totalPages = Math.ceil(images.length / perPage);
        let pagination = document.getElementById('pagination');
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            let pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.addEventListener('click', function() {
                currentPage = i;
                displayImages();
            });
            pagination.appendChild(pageButton);
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
    
        }
        function displayImages() {
            let startIndex = (currentPage - 1) * perPage;
            let endIndex = startIndex + perPage;
            images.forEach((image, index) => {
                if (index >= startIndex && index < endIndex) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
            let totalImages = images.length;
            document.getElementById('total-images').textContent = `Total Images: ${totalImages}`;
            let visibleImages = images.filter(image => image.style.display === 'block').length;
            document.getElementById('visible-images').textContent = `Visible Images: ${visibleImages}`;
            let currentImages = images.filter(image => image.style.display === 'block').length;
            document.getElementById('current-images').textContent = `Current Images: ${currentImages}`;
            let currentPage = document.querySelector('.pagination button.active');
            currentPage.textContent = currentPage;
            
        }
    });