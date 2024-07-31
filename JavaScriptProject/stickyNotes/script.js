let textArea = document.querySelector('textarea');
let addNotesBtn = document.getElementById("add-note-btn");
let bgcolor = document.getElementById("note-bg");
let notesAdded = document.getElementById("notes-added");
let notelist = document.getElementById("notes-list");
let notes = document.getElementById("notes");
let textMessage = document.getElementById("text-message");
let myDiv = document.getElementsByClassName("myDiv");

// Helper function to apply styles

function applyStyles(element, styles) {
    for (const property in styles) {
        element.style[property] = styles[property];
    }
}

// Usage:
 // Button click audio
   
 addNotesBtn.addEventListener("click", function(e){
    const noteSound = document.getElementById("added-sound");
    noteSound.currentTime = 0;
    noteSound.play();
});

addNotesBtn.addEventListener("click", function() {
  


    if (textArea.value === "") {
        alert("Please enter a note!");
        return;
    }
    
    const newNoteDiv = document.createElement("div"); // Changed "myDiv" to "div"
    newNoteDiv.textContent = textArea.value; // Set the text content of the new note div
    // Apply styles to the new note div
    applyStyles(newNoteDiv, {
        width: "200px",
        height: "200px",
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: bgcolor.value,
        color: "black",
        fontWeight: "500",
        fontSize: "1.2rem"
    });
    //draging effect
    newNoteDiv.draggable = true;

    newNoteDiv.addEventListener("dragstart", function(e){
         
        // moving a full newNoteDiv from its original position
        e.dataTransfer.setData("text/plain", newNoteDiv);
        e.dataTransfer.setData("text/html", newNoteDiv);

        newNoteDiv.addEventListener("dragend", function(e){
            // moving a newNoteDiv back to its original position
            notelist.appendChild(newNoteDiv);

        });

        newNoteDiv.addEventListener("dragenter", function(e){
            // highlighting a newNoteDiv when dragging over another
            e.target.style.backgroundColor = "rgba(255,255,255,0.6)";
            newNoteDiv.style.opacity = "0.5";
            newNoteDiv.style.zIndex = "100";
            newNoteDiv.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            newNoteDiv.addEventListener("dragleave", function(e){
                e.target.style.backgroundColor = bgcolor.value;
                newNoteDiv.style.opacity = "1";
                newNoteDiv.style.zIndex = "1";
            });


        });
    });


    // Create a remove button for each note
    const removeNote = document.createElement("button");
    removeNote.innerHTML = "X";
   
    removeNote.addEventListener("click", function() {
        newNoteDiv.style.display = "none";
        
    });
    //remove Audio Added
    removeNote.addEventListener("click", function() {
        const removedSound = document.getElementById("remove-sound");
        removedSound.currentTime = 0;
        removedSound.play();

    });
    textMessage.style.display = "none";
    // Append the note and remove button to the notelist
    newNoteDiv.appendChild(removeNote);
    notelist.appendChild(newNoteDiv);

    // Clear the textarea
    textArea.value = "";
});
