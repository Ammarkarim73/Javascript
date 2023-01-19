function digitalTime() {
    var abc = new Date();
    var hours = abc.getHours();
    var minutes = abc.getMinutes();
    var seconds = abc.getSeconds();

    if (hours > 12 ) {
        var hours = hours - 12;
            session = 'PM';
        if (hours < 10) {
        var zero = '0';
        }
        else {
            zero = '';
        }
    } 
    else {
        if(hours <= 11) {
            session = 'AM';
            if (hours == 0) {
                hours = 12;
            }
        }
        else if(hours == 12) {
                session = 'PM';
                }

        

        if (hours < 10) {
            var zero = '0';
            } else {
                zero = '';
            }
    }
    if (minutes < 10) {
        var minZero = '0';
        }
        else {
            minZero = '';
        }
    if (seconds < 10) {
        var secZero = '0';
        }
        else {
            secZero = '';
        }
document.getElementById("demo").innerHTML = zero + hours + ":" + minZero + minutes;
document.getElementById("session").innerHTML = session;
document.getElementById("sec").innerHTML = secZero + seconds;


const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

}

var x;
function start() {
    x = setInterval(digitalTime, 1)
}

function stop() {
    clearInterval(x)
  }



