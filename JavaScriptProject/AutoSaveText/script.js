// Save data to localStorage
document.querySelector('textarea').addEventListener('input', ()=>{
    saveData(this.value);
   
});
window.addEventListener('load', ()=>{
    loadData();
}); //
function saveData() {
    const textareaValue = document.querySelector('textarea').value;
    localStorage.setItem('textarea', textareaValue);
}

// Load data from localStorage
function loadData() {
    const savedText = localStorage.getItem('textarea') || '';
    document.querySelector('textarea').value = savedText;
}

// Call these functions as needed (e.g., on input or page load)



const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
// inner.addEventListener('click', function(){
//     inner.style.transitionDuration = '2s';
//     inner.style.transform = 'translateX(2rem)';
//     inner.style.transitiontimingfunction = 'linear';
//     outer.style.backgroundColor = 'black';

    
// });
inner.addEventListener('click', function(){
        if(inner.style.transform === 'translateX(2rem)'){
            inner.style.transitionDuration = '1s';
            inner.style.transform = 'translateX(0)';
            outer.style.backgroundColor = 'grey';
            body.style.backgroundColor = 'white';
            h1.style.color = 'black';
        }
        else{
            inner.style.transitionDuration = '1s';
            inner.style.transform = 'translateX(2rem)';
            outer.style.backgroundColor = 'green';
            body.style.backgroundColor = 'black';
            h1.style.color = 'white';
        }
   
});

