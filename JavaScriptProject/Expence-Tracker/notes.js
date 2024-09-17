let textArea = document.querySelector('textarea');
let addNotesBtn = document.getElementById("add-note-btn");
let bgcolor = document.getElementById("note-bg");
let notesAdded = document.getElementById("notes-added");
let notelist = document.getElementById("notes-list");
let notes = document.getElementById("notes");
let textMessage = document.getElementById("text-message");
let myDiv = document.getElementsByClassName("myDiv");

let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let color = document.getElementById("color");
let size = document.getElementById("size");
let undo = document.getElementById("undo");


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
        fontSize: "1.2rem",
    });
    bold.addEventListener("click", function(){
        let b = bold.style.fontWeight;
        if(b === 'normal'){
            bold.style.fontWeight = 'bold';
        } else {
            bold.style.fontWeight = 'normal';
        }
        applyStyles(newNoteDiv, {
           fontWeight: b
        })
    });

    italic.addEventListener("click", function(){
        let i = italic.style.fontStyle;
        if(i === 'normal'){
            italic.style.fontStyle = 'italic';
        } else {
            italic.style.fontStyle = 'normal';
        }
        applyStyles(newNoteDiv, {
            fontStyle: i
        })
    });

    underline.addEventListener("click", function(){
        let u = underline.style.textDecoration;
        if(u === 'none'){
            underline.style.textDecoration = 'underline';
        } else {
            underline.style.textDecoration = 'none';
        }
        applyStyles(newNoteDiv, {
            textDecoration: u
        })
    });

    color.addEventListener("click", function(){
        let colorInput = prompt("Enter color in hex code");
        if(colorInput){
            newNoteDiv.style.color = colorInput;
            applyStyles(newNoteDiv, {
                color: colorInput
            })
        }
    });


    size.addEventListener("click", function(){
        let sizeInput = prompt("Enter font size in px");
        if(sizeInput){
            newNoteDiv.style.fontSize = sizeInput + 'px';
            applyStyles(newNoteDiv, {
                fontSize: sizeInput + 'px'
            })
        }
    });


    undo.addEventListener("click", function(){
        applyStyles(newNoteDiv, {
            // Reset styles to default
            width: "200px",
            height: "200px",
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            backgroundColor: bgcolor.value,
            color: "black",
            fontSize: "1.2rem",
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            color: 'black',
            fontSize: '1.2rem',
            justifyContent: 'flex-start'
        })
    });
  

   
    
    let isResizing = false;
    let initialX, initialY;
    
    newNoteDiv.addEventListener('mousedown', (e) => {
      isResizing = true;
      initialX = e.clientX;
      initialY = e.clientY;
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;
    
      const deltaX = e.clientX - initialX;
      const deltaY = e.clientY - initialY;
    
      // Update width and height (adjust as needed)
      newNoteDiv.style.width = `${newNoteDiv.offsetWidth + deltaX}px`;
      newNoteDiv.style.height = `${newNoteDiv.offsetHeight + deltaY}px`;
    
      initialX = e.clientX;
      initialY = e.clientY;
    });
    
    document.addEventListener('mouseup', () => {
      isResizing = false;
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
    removeNote.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;
    removeNote.style.position = "relative";
    removeNote.style.transform = "translate(0.8rem, -8px)";
   
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
