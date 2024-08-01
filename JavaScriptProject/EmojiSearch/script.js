let tableBody = document.getElementById("emoji_container");
let body = document.getElementById("body");
function displayEmoji(){
    emojiList.forEach(function(emoji){
       let new_row = document.createElement("tr");
       let new_emoji = document.createElement("td");
       let new_aliases = document.createElement("td");
       let new_description = document.createElement("td");

       new_emoji.textContent = emoji.emoji;
       new_aliases.textContent = emoji.aliases.join(", ");
       new_description.textContent = emoji.description;
       new_row.appendChild(new_emoji);
       new_row.appendChild(new_aliases);
       new_row.appendChild(new_description);
      
       tableBody.appendChild(new_row);  //append new row to table body

      new_emoji.addEventListener("click", function(e){      
        let copyEmoji = document.createElement("copyEmoji");
        let copybtn = document.createElement("copyButton");
            e.preventDefault();
           //pop screen for copy
            copyEmoji.textContent = e.target.textContent;
            document.body.appendChild(copyEmoji);
            document.body.appendChild(copybtn);
            copyEmoji.style.position = "fixed";
            copyEmoji.style.width = "30%";
            copyEmoji.style.height = "30%";
            copyEmoji.style.top = "40%";
            copyEmoji.style.left = "25%";
            copyEmoji.style.transform = "translate(-50%, -50%)";
            copyEmoji.style.zIndex = "9999";
            copyEmoji.style.backgroundColor = "white";
            copyEmoji.style.color = "white";
            copyEmoji.style.padding = "10px";
            copyEmoji.style.borderRadius = "8px";
            copyEmoji.style.cursor = "pointer";
            copyEmoji.style.textAlign = "center";
            copyEmoji.style.fontSize = "80px";
            copyEmoji.style.transition = "opacity 0.3s";
            copyEmoji.style.opacity = "1";

            //button design for copyEmoji below copyemoji div'

            copybtn.style.position = "fixed";
            copybtn.style.width = "20%";
            copybtn.style.top = "52%";
            copybtn.style.left = "25%";
            copybtn.style.textAlign = "center";
            copybtn.style.zIndex = "9999";
            copybtn.style.transform = "translate(-50%, -50%)";
            copybtn.style.backgroundColor = "green";
            copybtn.style.color = "white";
            copybtn.style.padding = "10px";
            copybtn.style.borderRadius = "5px";
            copybtn.style.cursor = "pointer";
            copybtn.style.transition = "opacity 0.3s";
            copybtn.style.opacity = "1";
            copybtn.textContent = "Click to Copy";
            body.style.backgroundColor = "rgba(0, 0 , 0, 0.6)";
            tableBody.style.backgroundColor = "rgba(0, 0, 0, 0.6)";


            copybtn.addEventListener("click", function(e){
                //script for clicking on button copy the emoji
                e.preventDefault();
                navigator.clipboard.writeText(copyEmoji.textContent);
                copyEmoji.textContent = "Emoji Copied";
                copyEmoji.style.fontSize = "30px";
                copyEmoji.style.opacity = "1";
                copyEmoji.style.color = "White";
                copyEmoji.style.backgroundColor = "green";
                e.stopPropagation();
               
                
                //remove the pop screen and button
                copybtn.remove();
                setTimeout(() => {
                    copyEmoji.remove();
                }, 2000);
                tableBody.style.backgroundColor = "aliceblue";
                body.style.backgroundColor = "rgb(239, 238, 231)";
            });

        });

    });
       
    
};



window.addEventListener('load', displayEmoji);

//search function

let searchInput = document.getElementById("search_field");
searchInput.addEventListener('keyup', function(event) {
    let searchValue = event.target.value.toLowerCase();
    let tableRows = document.querySelectorAll("#emoji_container tr");

    tableRows.forEach(function(row) {
        let emojiCell = row.getElementsByTagName("td")[0];
        let aliasesCell = row.getElementsByTagName("td")[1];
        let descriptionCell = row.getElementsByTagName("td")[2];

        let emojiText = emojiCell.textContent || emojiCell.innerText;
        let aliasesText = aliasesCell.textContent || aliasesCell.innerText;
        let descriptionText = descriptionCell.textContent || descriptionCell.innerText;

        if (emojiText.toLowerCase().includes(searchValue) ||
            aliasesText.toLowerCase().includes(searchValue) ||
            descriptionText.toLowerCase().includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

});


//Adding a popup window to the table to copy  a emoji from the current new_emoji being clicked.
