let container = document.getElementById("card-Container");
let cardbg = document.getElementById("bg-color");
let cardArray = [];

//fuction for capuring data

function getCardDetails() {
  let firstName = prompt("Enter your first name");
  let lastName = prompt("Enter your last name");
  let country = prompt("Enter your country");
  let phoneNumber = prompt("Enter your phone number");
  let state = prompt("Enter your state");
  let city = prompt("Enter your city");
  let village = prompt("Enter your village");

  let cardDetails = {
    firstName: firstName,
    lastName: lastName,
    country: country,
    phoneNumber: phoneNumber,
    state: state,
    city: city,
    village: village,
  };
  

  cardArray.push(cardDetails);

  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
            <p>First Name: ${cardDetails.firstName}</p>
            <p>Last Name: ${cardDetails.lastName}</p>
            <p>Country: ${cardDetails.country}</p>
            <p>Phone Number: ${cardDetails.phoneNumber}</p>
            <p>State: ${cardDetails.state}</p>
            <p>City: ${cardDetails.city}</p>
            <p>Village: ${cardDetails.village}</p>`;
            
  card.style.backgroundColor = cardbg.value;

  container.appendChild(card);

  //setting all data in local storage
  let cardData = JSON.stringify(cardArray);
  localStorage.setItem("cardDetails", cardData);

}
window.addEventListener("load", function (event) {
    let storedDetails = localStorage.getItem("cardDetails");
    if (storedDetails) {
        cardArray = JSON.parse(storedDetails);
        
    }
    if(cardArray.length > 0) {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <p>First Name: ${cardArray[i].firstName}</p>
        <p>Last Name: ${cardArray[i].lastName}</p>
        <p>Country: ${cardArray[i].country}</p>
        <p>Phone Number: ${cardArray[i].phoneNumber}</p>
        <p>State: ${cardArray[i].state}</p>
        <p>City: ${cardArray[i].city}</p>
        <p>Village: ${cardArray[i].village}</p>`;
        container.appendChild(card);  
    }
    document.querySelector('h2').style.display = 'none';
  }
  else {
    document.querySelector('h2').style.display = 'block';
  }
   
 
});


let btn = document.getElementById("add-Details");

btn.addEventListener("click", function () {
  getCardDetails();
  document.querySelector("h2").style.display = "none";
});
