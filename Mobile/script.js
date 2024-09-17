let searchText = '13';

function searchHandler(isShowAll) {
    loading(true);
    const searchField = document.getElementById("searchField");
    searchText = searchField.value || '13'; // Default to '13' if search field is empty
    loadPhone(searchText, isShowAll);
}

const loading = (isLoading) => {
    const loadingElement = document.getElementById("loading");
    if (isLoading) {
        loadingElement.style.display = 'block';
    } else {
        loadingElement.style.display = 'none';
    }
}

const loadPhone = async (searchText, isShowAll) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
        const data = await res.json();
        const phones = data.data;
        displayPhones(phones, isShowAll);
    } catch (error) {
        console.error("Failed to load phones:", error);
        loading(false);
    }
}

loadPhone(searchText);

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = '';

    const showAllBtn = document.getElementById("showALLBtn");
    if (phones.length > 12 && !isShowAll) {
        showAllBtn.style.display = 'block';
    } else {
        showAllBtn.style.display = 'none';
    }

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('col-md-4', 'mb-4');
        phoneCard.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="${phone.phone_name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">Explore the features of ${phone.phone_name} and discover its full potential.</p>
                    <button onclick="showDetailsHandler('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>`;
        phoneContainer.appendChild(phoneCard);
    });

    loading(false);
}

function showBtn() {
    searchHandler(true);
}

const showDetailsHandler = async (id) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
        const data = await res.json();
        const phone = data.data;
        showPhoneDetails(phone);
    } catch (error) {
        console.error("Failed to load phone details:", error);
    }
}

const showPhoneDetails = (details) => {
    const modalElement = new bootstrap.Modal(document.getElementById('my_modal'));
    const modelName = document.getElementById('detailsPhoneName');
    const brandName = document.getElementById('detailsBrand');
    const detailsSpec = document.getElementById('detailsSpec');
    const releaseDate = document.getElementById('releaseDate');
    const imageDiv = document.getElementById('imgContainer');

    imageDiv.innerHTML = `<img src="${details.image}" alt="${details.name}" class="img-fluid">`;
    modelName.innerText = details.name;
    brandName.innerText = `Brand: ${details.brand}`;

    const features = details.mainFeatures;
    let featureText = "";
    for (const key in features) {
        featureText += `${key}: ${features[key]}\n`;
    }
    detailsSpec.innerText = featureText;
    releaseDate.innerText = details.releaseDate || "Release date not available";

    modalElement.show();
}
