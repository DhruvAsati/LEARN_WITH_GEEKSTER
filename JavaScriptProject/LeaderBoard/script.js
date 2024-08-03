let addPlayerBtn = document.getElementById('add');
let playerSection = document.getElementById('added-player');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let country = document.getElementById('country');
let score = document.getElementById('score');
let playerArray = [];

addPlayerBtn.addEventListener('click', function(){
    let player = {
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        score: parseInt(score.value)
    };
    playerArray.push(player);
    displayPlayers(playerArray);
    clearInputs();

});

function displayPlayers(players){
    playerSection.innerHTML = '';
    players.forEach(function(player){
        let playerDiv = document.createElement('div');
   
        // arranging the player data in flex and having space between each player eq
        playerDiv.style.backgroundColor = 'lightblue';
        playerDiv.style.width = '100%';
        playerDiv.style.height = '100px';
        playerDiv.style.fontSize = '20px';
        playerDiv.style.color = 'black';
        playerDiv.style.borderRadius = '5px';
        playerDiv.style.boxShadow = '0px 0px 5px rgba(0,0,0,0.5)';
        playerDiv.style.cursor = 'pointer';
        playerDiv.style.transition = 'background-color 0.3s';
        playerDiv.style.display = 'flex';
        playerDiv.style.justifyContent ='space-between';
        playerDiv.style.margin = '10px';
        playerDiv.style.alignItems ='center';
        playerDiv.style.border = '1px solid black';
        playerDiv.style.padding = '3rem 5rem';
        playerDiv.style.cursor = 'pointer';
        playerDiv.style.transition = 'background-color 0.3s';
        playerDiv.innerHTML = `<div class="player-info">
                <div class="name">
                    ${player.firstName} ${player.lastName}
                    <div class="dateLabel">
                      <label>${Date()}</label>
                    </div>
                </div>
                <div class="country">
                    ${player.country}
                </div>
                <div class="score">
                   ${player.score}
                </div>
                </div>`

        playerSection.appendChild(playerDiv);
        //adding delete and increament button +5 and -5
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function(){
            let index = playerArray.indexOf(player);
            playerArray.splice(index, 1);
            displayPlayers(playerArray);
        });
        playerDiv.appendChild(deleteBtn);
        
        let incBtn = document.createElement('button');
        incBtn.textContent = '+5';
        incBtn.addEventListener('click', function(){
            player.score += 5;
            displayPlayers(playerArray);
        });
        playerDiv.appendChild(incBtn);
        
        let decBtn = document.createElement('button');
        decBtn.textContent = '-5';
        decBtn.addEventListener('click', function(){
            player.score -= 5;
            displayPlayers(playerArray);
        });
        playerDiv.appendChild(decBtn);

    });
};

function clearInputs(){
    firstName.value = '';
    lastName.value = '';
    country.value = '';
    score.value = '';
};

//Sorting players by score in descending order

playerSection.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        playerArray.sort(function(a, b){
            return b.score - a.score;
        });
        displayPlayers(playerArray);
    }
});


