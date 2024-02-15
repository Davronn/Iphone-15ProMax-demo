function clock1(){
    console.log('fsrewf')
  }
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    let timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clockDisplay').textContent = timeString;
  }
  
  function startTimer() {
    let startTime = Date.now();
    let timer = setInterval(function() {
      let elapsedTime = Date.now() - startTime;
      let hours = Math.floor(elapsedTime / 3600000);
      let minutes = Math.floor((elapsedTime % 3600000) / 60000);
      let seconds = Math.floor((elapsedTime % 60000) / 1000);
  
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
  
      let timeString = hours + ':' + minutes + ':' + seconds;
      document.getElementById('timerDisplay').textContent = timeString;
    }, 1000);
  
    document.getElementById('startTimer').disabled = true;
  
    document.getElementById('pauseTimer').addEventListener('click', function() {
      clearInterval(timer);
      document.getElementById('startTimer').disabled = false;
    });
  
    document.getElementById('resetTimer').addEventListener('click', function() {
      clearInterval(timer);
      document.getElementById('timerDisplay').textContent = '00:00:00';
      document.getElementById('startTimer').disabled = false;
    });
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  
  document.getElementById('startTimer').addEventListener('click', startTimer);
  
