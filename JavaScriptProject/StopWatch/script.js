let container = document.querySelector('#container');
let timer = document.querySelector('#timer');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

startBtn.addEventListener('click', function(){
   
    //Starting the timer
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let interval;
    
    function updateTimer(){
        milliseconds++;
        
        if(milliseconds >= 100){
            milliseconds = 0;
            seconds++;
        }
        
        if(seconds >= 60){
            seconds = 0;
            minutes++;
        }
        
        if(minutes >= 60){
            minutes = 0;
            hours++;
        }
        
        timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
       
    }

    updateTimer();
    startBtn.disabled = true;
    if(startBtn.disabled === true){
        startBtn.style.backgroundColor = "#92cce1";
        resetBtn.style.backgroundColor = "#3181d1";
        stopBtn.style.backgroundColor = "#3181d1";
    }
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    interval = setInterval(updateTimer, 10);

    stopBtn.addEventListener('click', function(){
        clearInterval(interval);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
        stopBtn.style.backgroundColor = "#92cce1";
        startBtn.style.backgroundColor = "#3181d1";
    });

    resetBtn.addEventListener('click', function(){
        clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer.textContent = '00:00:00.00';
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = true;
        resetBtn.style.backgroundColor = "#92cce1";
        startBtn.style.backgroundColor = "#3181d1";
        stopBtn.style.backgroundColor = "#3181d1";
    });
 });



