navigator.userAgent;

var a;
var b = document.getElementById('demo');
var abc;

var sec = 44;
var millisec = 99;

var x;



function input(val) {

    a = val
    b.value  += a;

    var audio = document.getElementById("audio");
    audio.play();

}



function del()
{
    document.getElementById('demo').value = ""; 
    document.getElementById('redlight2').id = ('redlight');
    document.getElementById('greenlight2').id = ('greenlight');
    document.getElementById('redlightblink2').id = ('redlightblink');
}

function start() {
    if ( b.value == 7338823 ) {
        document.getElementById('redlightblink').id = ('redlightblink2');
        document.getElementById('redlight').id = ('redlight2');
        document.getElementById('greenlight').id = ('greenlight2');

        var audio = document.getElementById("audio1");
        audio.play();

        x = setInterval(function() {
            millisec--;

            if (millisec == 1) {
                sec--;
                millisec = 99
            }

            if (sec < 10){
                var zero = 0;
            }
            if (millisec < 10){
                var z = 0;
            }

            if (sec >= 10){
                zero = '';
            }
            if (millisec >= 10){
                z = '';
            }

            document.getElementById('demo').value = zero + '' + sec + ':' + z + '' + millisec;


            if (sec == 44) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 43) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 42) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 41) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 40) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 39) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 38) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 37) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 36) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 35) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 34) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 33) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 32) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 31) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 30) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 29) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 28) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 27) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 26) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 25) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 24) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 23) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 22) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 21) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 20) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 19) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 18) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 17) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 16) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 15) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 14) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 13) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 12) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 11) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 10) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 9) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 8) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 7) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 6) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 5) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 4) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 3) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 2) {
        document.getElementById('redlightblink3').id = ('redlightblink2');
            }
            if (sec == 1) {
        document.getElementById('redlightblink2').id = ('redlightblink3');
            }
            if (sec == 0) {
        document.getElementById('redlightblink3').id = ('redlightblink');

        var counter = 0;
        while(counter < 40){
            window.open();
            counter++;
            if(counter === 40){
                alert("BooooooooooM!");
            }
        }
        clearInterval(x);
                
                document.getElementById('demo').value = '00:00';
            }


        }, 10)



    }else{
        document.getElementById('demo').value = "ERROR"; 
        document.getElementById('redlight').id = ('redlight2');
        document.getElementById('greenlight').id = ('greenlight2');
    }
}