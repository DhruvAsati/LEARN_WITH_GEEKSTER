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

