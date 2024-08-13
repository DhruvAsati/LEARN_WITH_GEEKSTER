let textarea  = document.querySelector('textarea');

textarea.addEventListener('input', function(){
    localStorage.setItem('textarea', textarea.value);
    let savedText = localStorage.getItem('textarea');
    textarea.value = savedText;
    let charCount = textarea.value.length;
    document.getElementById('charCount').textContent = charCount;
    if(charCount > 100){
        textarea.style.backgroundColor ='red';
    } else {
        textarea.style.backgroundColor = '';
    }
    
});


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

