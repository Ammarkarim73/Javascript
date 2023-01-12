var x = -1;
var y;

var minute;
var time;

var second;


function quiz(){

  minute  = prompt("Enter Your timeutes", "1");

  time = minute;

  second  = prompt("Enter Your seconds", "1");



  y = setInterval(function() {




  if (second == 0) {
    if(time != 0){
      second = 60
    }else{
      clearInterval(y);
    }
    time--
  } else {
  }



  if (time < 10) {
    var a = 0;
  } else {
    a = '';
  }


  if (second < 10) {
    var zero = 0;
  } else {
    zero = '';
}

  document.getElementById("demo").innerHTML = a + '' + time + " : " + zero + '' + second;
  second--;




}, 1000);

}


function pause(){
  clearInterval(y);
}


function resume(){
  if (x == -1) {

    x = setInterval(function() {
    
      if (second == 0) {
        if(time != 0){
          second = 60
        }else{
          clearInterval(y);
        }
        time--
      } else {
      }
    
    
    
      if (time < 10) {
        var a = 0;
      } else {
        a = '';
      }
    
    
      if (second < 10) {
        var zero = 0;
      } else {
        zero = '';
    }
    
      document.getElementById("demo").innerHTML = a + '' + time + " : " + zero + '' + second;
      second--;
    
    
    }, 1000);

  } else {
    x = -1;
  }
}