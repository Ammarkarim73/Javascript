var milliseconds = 00;
var second = 0;
var minute = 0;
var x;



function start() {
x = setInterval( function(){
    milliseconds+=1;
    if(milliseconds == 100){
    milliseconds = 0;
    second++;
    if(second == 60){
    second = 0;
    minute++;
    if(minute == 60){
    minute = 0;
    }
    }
    }



    if (minute < 10) {
        var z = 0;
      } else {
        z = '';
      }

      if (second < 10) {
        var zero = 0;
      } else {
        zero = '';
    }

    if (milliseconds < 10) {
      document.getElementById('ring').className = 'coloumnOuterAnimation';
        var ze = 0;
      } else {
        ze = '';
    }


    document.getElementById("demo").innerHTML = z + '' + minute + ":" + zero + '' + second;
    document.getElementById("ms").innerHTML = ze + '' + milliseconds;
    },10)
}


function stop(){
    clearInterval(x);
    document.getElementById('ring').className = 'coloumnOuter';
  }


function reset() {
    clearInterval(x);
    milliseconds = 00;
    second = 0;
    minute = 0;

    document.getElementById('ring').className = 'coloumnOuter';

    if (minute < 10) {
        var z = 0;
      } else {
        z = '';
      }

      if (second < 10) {
        var zero = 0;
      } else {
        zero = '';
    }
      if (milliseconds < 10) {
        var ze = 0;
      } else {
        ze = '';
    }

    document.getElementById("demo").innerHTML = z + '' + minute + ":" + zero + '' + second;
    document.getElementById("ms").innerHTML = ze + '' + milliseconds;
}
