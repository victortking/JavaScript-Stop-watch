window.onload = function() {

    var tenth = 0;
    var seconds = 0;
    var minutes = 0;

    var secondsCount = document.getElementById("seconds-count");
    var tensCount = document.getElementById("tens-count");
    var minutesCount = document.getElementById("minutes-count");

    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");

    var speed;


    start.onclick = function() {
        clearInterval(speed);
        speed = setInterval(countTimer, 10);
    }

    stop.onclick = function() {
        clearInterval(speed);
    }

    reset.onclick = function() {
        clearInterval(speed);
        tenth = "00";
        seconds = "00";
        minutes = "00";
        tensCount.innerHTML = tenth;
        secondsCount.innerHTML = seconds;
        minutesCount.innerHTML = minutes;
    }
    
    function countTimer() {
        tenth++
        
        if(tenth <= 9) {
            tensCount.innerHTML = "0" + tenth;
        }
        
        if(tenth > 9) {
            tensCount.innerHTML = tenth;
        }
        
        if(tenth > 99) {
            seconds++;
            secondsCount.innerHTML = "0" + seconds;
            tenth = 0;
            tensCount.innerHTML = "0" + tenth;
        }
        
        if(seconds > 9) {
            secondsCount.innerHTML = seconds;
        }
        
        if(seconds > 59){
            minutes++;
            minutesCount.innerHTML = "0" + minutes;
            seconds = 0;
            secondsCount.innerHTML = "0" + seconds;
            
        }
        
        if(minutes > 9){
            minutesCount.innerHTML = minutes;
        }
    }

}