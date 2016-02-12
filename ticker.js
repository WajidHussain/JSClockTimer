function start() {
  var start = new Date().getTime(),
    elapsed = '0.0',
    mins = '0' +0,
    hours = '0'+0;

  window.setInterval(function() {
    var time = new Date().getTime() - start;

    elapsed = Math.floor(Math.floor(time / 100) / 10);
    if (elapsed >= 59) {
      mins++;
      if (mins < 10){
      mins = '0' + mins;
      }
      start = new Date().getTime();
    }
    if (mins >= 59) {
      hours++;
      if (hours < 10){
      hours = '0' + hours;
      }
    }
    if (elapsed < 10){
       elapsed = '0' + elapsed;
      }
    document.getElementById('timer').innerText = hours + ':' + mins + ':' + elapsed;
    




  }, 1000);
}

start();
