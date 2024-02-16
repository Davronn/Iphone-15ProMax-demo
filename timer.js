let timer;
  let startTime;
  let elapsedTime = 0;
  let isTimerRunning = false;

  function startTimer() {
    if (!isTimerRunning) {
      isTimerRunning = true;
      startTime = Date.now() - elapsedTime;
      timer = setInterval(updateTime, 1000);
    }
  }

  function pauseTimer() {
    if (isTimerRunning) {
      isTimerRunning = false;
      clearInterval(timer);
    }
  }

  function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    elapsedTime = 0;
    updateDisplay();
  }

  function updateTime() {
    const now = Date.now();
    elapsedTime = now - startTime;
    updateDisplay();
  }

  function updateDisplay() {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const displayHours = padTime(hours);
    const displayMinutes = padTime(minutes);
    const displaySeconds = padTime(seconds);

    document.getElementById('timerDisplay').textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  }

  function padTime(time) {
    return time < 10 ? `0${time}` : time;
  }