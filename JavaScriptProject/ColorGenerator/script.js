
let container = document.querySelector('.container');
let inner = document.querySelector('#inner');
let outer = document.querySelector('.outer');

inner.addEventListener('click', function(){
   if(inner.style.transform === 'translateX(2rem)'){
       inner.style.transitionDuration = '1s';
       inner.style.transform = 'translateX(0)';
       outer.style.backgroundColor = 'grey';
       document.body.style.backgroundColor = 'white';
       document.body.style.color = 'black';
   }
   else{
       inner.style.transitionDuration = '1s';
       inner.style.transform = 'translateX(2rem)';
       outer.style.backgroundColor = 'green';
       document.body.style.backgroundColor = 'black';
       document.body.style.color = 'white';
   }

});

// Function to generate random color
 function getRandomColor(){
    let letter = "1234567890abcdef";
    let color = "#";
    for(let i = 0; i < 6; i++){
        let hexColor = Math.floor(Math.random() * letter.length);
        color += letter[hexColor];
        console.log(color);
       
    } 
    return color;
 };

 for(let i=0; i < 10000; i++) {
    let div = document.createElement('div');
    div.className = 'color-container';
    container.appendChild(div);
}


 //function to generate div with random color and its value
  
   function generateDiv(){
        let colorContainer = document.querySelectorAll('.color-container');
       colorContainer.forEach(ele=>{
         let newColor = getRandomColor();    
         ele.style.backgroundColor = newColor;
         ele.innerHTML = newColor;
         
        });

       //copying the color while clicking on the div

       colorContainer.forEach(ele=>{
         ele.addEventListener('click', function(){
            navigator.clipboard.writeText(this.innerHTML);
             let copied = document.createElement('copied');
             copied.style.position = 'fixed';
             copied.style.top = '50%';
             copied.style.left = '50%';
             copied.textContent = 'Copied!';
             copied.style.backgroundColor = 'white';
             copied.style.color = 'black';
             copied.style.borderRadius = '5px';
             copied.style.padding = '10px';
             copied.style.zIndex = '1000';
             copied.style.transition = 'opacity 0.3s';
             copied.style.opacity = '1';
             copied.style.fontSize = '20px';
             copied.style.display = 'block';
             copied.style.border = '1px solid black';
             copied.style.transform = 'translate(-50%, -50%)';
             copied.style.pointerEvents = 'none';
             document.body.appendChild(copied);
             
            setTimeout(() => {
                copied.style.opacity = '0';
                setTimeout(() => {
                  copied.parentNode.removeChild(copied);
                }, 3000);
             }, 2000)
            });

             
         });
    }



   window.addEventListener('load', generateDiv());
   
