let container = document.querySelector('#container');
let timer = document.querySelector('#timer');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let startTime;
let interval;
let isRunning = false;

function updateTimer() {
    milliseconds++;
    
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - (milliseconds + seconds * 100 + minutes * 6000 + hours * 3600000);
        interval = setInterval(() => {
            updateTimer();
        }, 10);
        isRunning = true;
        startBtn.disabled = true;
        startBtn.style.backgroundColor = "#92cce1";
        stopBtn.disabled = false;
        stopBtn.style.backgroundColor = "#3181d1";
        resetBtn.disabled = false;
        resetBtn.style.backgroundColor = "#3181d1";
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
        startBtn.style.backgroundColor = "#3181d1";
        stopBtn.style.backgroundColor = "#92cce1";
        resetBtn.style.backgroundColor = "#3181d1";

        // Save the current time state to localStorage
        localStorage.setItem('stopwatchState', JSON.stringify({
            milliseconds, seconds, minutes, hours, startTime
        }));
    }
}

function resetTimer() {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = '00:00:00.00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
    startBtn.style.backgroundColor = "#3181d1";
    stopBtn.style.backgroundColor = "#3181d1";
    resetBtn.style.backgroundColor = "#92cce1";

    // Clear saved state from localStorage
    localStorage.removeItem('stopwatchState');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Check for saved state on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedState = localStorage.getItem('stopwatchState');
    if (savedState) {
        const { milliseconds: savedMilliseconds, seconds: savedSeconds, minutes: savedMinutes, hours: savedHours, startTime: savedStartTime } = JSON.parse(savedState);

        milliseconds = savedMilliseconds;
        seconds = savedSeconds;
        minutes = savedMinutes;
        hours = savedHours;
        startTime = savedStartTime;

        // Restore the timer display
        updateTimer();

        // Restore button states
        if (startTime) {
            startBtn.disabled = true;
            stopBtn.disabled = false;
            resetBtn.disabled = false;
            startBtn.style.backgroundColor = "#92cce1";
            stopBtn.style.backgroundColor = "#3181d1";
            resetBtn.style.backgroundColor = "#3181d1";

            // Calculate the elapsed time since the last visit and update the timer
            startTimer();
        } else {
            resetTimer();
        }
    }
});
