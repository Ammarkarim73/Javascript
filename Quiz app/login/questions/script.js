var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
var answer9;
var answer10;

var point1;
var point2;
var point3;
var point4;
var point5;
var point6;
var point7;
var point8;
var point9;
var point10; 

var earnedPoints;

var val;

getValue1(val);
getValue2(val);
getValue3(val);
getValue4(val);
getValue5(val);
getValue6(val);
getValue7(val);
getValue8(val);
getValue9(val);
getValue10(val);


function getValue1(val) {
    answer1 = val;

    if (answer1 == "Muhammad Ali Jinnah") {
        point1 = 1;
    } else {
        point1 = 0;
    }
}

function getValue2(val2) {
    answer2 = val2;

    if (answer2 == "Muhammad Ali Jinnah") {
        point2 = 1;
    } else {
        point2 = 0;
    }
}

function getValue3(val3) {
    answer3 = val3;

    if (answer3 == "All-India Muslim League") {
        point3 = 1;
    } else {
        point3 = 0;
    }
}

function getValue4(val4) {
    answer4 = val4;

    if (answer4 == "Annually") {
        point4 = 1;
    } else {
        point4 = 0;
    }
}

function getValue5(val5) {
    answer5 = val5;

    if (answer5 == "Lahore") {
        point5 = 1;
    } else {
        point5 = 0;
    }
}

function getValue6(val6) {
    answer6 = val6;

    if (answer6 == "23/03/1956") {
        point6 = 1;
    } else {
        point6 = 0;
    }
}

function getValue7(val7) {
    answer7 = val7;

    if (answer7 == "Jasmine") {
        point7 = 1;
    } else {
        point7 = 0;
    }
}

function getValue8(val8) {
    answer8 = val8;

    if (answer8 == "Ameer-ud-din Khidwai") {
        point8 = 1;
    } else {
        point8 = 0;
    }
}

function getValue9(val9) {
    answer9 = val9;

    if (answer9 == "Markhor") {
        point9 = 1;
    } else {
        point9 = 0;
    }
}

function getValue10(val10) {
    answer10 = val10;

    if (answer10 == "Chakor") {
        point10 = 1;
    } else {
        point10 = 0;
    }
}

function assignVariable1() {
    document.getElementById('q1').className = 'hidden';
    document.getElementById('q2').className = 'show';

}

function assignVariable2() {
    document.getElementById('q2').className = 'hidden';
    document.getElementById('q3').className = 'show';

}

function assignVariable3() {
    document.getElementById('q3').className = 'hidden';
    document.getElementById('q4').className = 'show';

}

function assignVariable4() {
    document.getElementById('q4').className = 'hidden';
    document.getElementById('q5').className = 'show';

}

function assignVariable5() {
    document.getElementById('q5').className = 'hidden';
    document.getElementById('q6').className = 'show';

}

function assignVariable6() {
    document.getElementById('q6').className = 'hidden';
    document.getElementById('q7').className = 'show';

}

function assignVariable7() {
    document.getElementById('q7').className = 'hidden';
    document.getElementById('q8').className = 'show';

}

function assignVariable8() {
    document.getElementById('q8').className = 'hidden';
    document.getElementById('q9').className = 'show';

}

function assignVariable9() {
    document.getElementById('q9').className = 'hidden';
    document.getElementById('q10').className = 'show';

}

function assignVariable10() {
    document.getElementById('q10').className = 'hidden';
    document.getElementById('score').className = 'card';
    document.getElementById('outerbox').className = 'hidden';

    
    earnedPoints = point1 + point2 + point3 + point4 + point5 + point6 + point7 + point8 + point9 + point10;

    var scored = document.getElementById('demo');
    scored.innerHTML = 'You Have Scored ' + (earnedPoints * 100) / 10 + '% !!!';

    clearInterval(x);

    if (earnedPoints == 0){
        document.getElementById('h2').innerHTML = 'FAIL !!!';
    }
    if (earnedPoints == 1){
        document.getElementById('h2').innerHTML = 'FAIL !!!';
    }
    if (earnedPoints == 2){
        document.getElementById('h2').innerHTML = 'FAIL !!!';
    }
    if (earnedPoints == 3){
        document.getElementById('h2').innerHTML = 'PASSED !!!';
    }
    if (earnedPoints == 4){
        document.getElementById('h2').innerHTML = 'PASSED !!!';
    }
    if (earnedPoints == 5){
        document.getElementById('h2').innerHTML = 'PASSED !!!';
    }
    if (earnedPoints == 7){
        document.getElementById('h2').innerHTML = 'PASSED !!!';
    }
    if (earnedPoints == 8){
        document.getElementById('h2').innerHTML = 'PASSED !!!';
    }
    if (earnedPoints == 9){
        document.getElementById('h2').innerHTML = 'PASSED !!!';
    }
    if (earnedPoints == 10){
        document.getElementById('h2').innerHTML = 'CONGRATULATIONS !!!';
    }

}


function again() {
    window.open('./index.html', '_self');
}


var minutes = 1;
var seconds = 60;

var x = setInterval (function() {

    seconds--;

if (seconds == 0 && minutes == 0){
    document.getElementById('score').className = 'show';

    earnedPoints = point1 + point2 + point3 + point4 + point5 + point6 + point7 + point8 + point9 + point10;

    document.getElementById('demo').innerHTML = 'You Have Scored ' + (earnedPoints * 100) / 10 + '% !!!';


    document.getElementById('q1').className = 'hidden';
    document.getElementById('q2').className = 'hidden';
    document.getElementById('q3').className = 'hidden';
    document.getElementById('q4').className = 'hidden';
    document.getElementById('q5').className = 'hidden';
    document.getElementById('q6').className = 'hidden';
    document.getElementById('q7').className = 'hidden';
    document.getElementById('q8').className = 'hidden';
    document.getElementById('q9').className = 'hidden';
    document.getElementById('q10').className = 'hidden';

        clearInterval(x);
    }else if (seconds == 0){
        minutes--;
        seconds = 60;
    }


    document.getElementById('timer').innerHTML = minutes + ' : ' + seconds;


},1000)


function changeMoveUp(){
    document.getElementById('outup').className = 'outsideMove';
}
function changeBackUp(){
    document.getElementById('outup').className = 'outside';
}












