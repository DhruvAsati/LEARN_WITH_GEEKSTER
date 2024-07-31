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
        marginLeft: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: bgcolor.value,
        color: "black",
        fontWeight: "500",
        fontSize: "1.2rem"
    });

    // Create a remove button for each note
    const removeNote = document.createElement("button");
    removeNote.innerHTML = "X";
    removeNote.addEventListener("click", function() {
        newNoteDiv.style.display = "none";
    });
    textMessage.style.display = "none";
    // Append the note and remove button to the notelist
    newNoteDiv.appendChild(removeNote);
    notelist.appendChild(newNoteDiv);

    // Clear the textarea
    textArea.value = "";
});
