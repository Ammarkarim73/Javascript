navigator.userAgentData

var count = 0;

var x = setInterval (function() {
    count++;

    if(count == 10) {
        document.getElementById('demo').innerHTML = 'Loading.';
    }

    if(count == 20) {
        document.getElementById('demo').innerHTML = 'Loading..';
    }

    if(count == 30) {
        document.getElementById('demo').innerHTML = 'Loading...';
    }

    if(count == 39) {
        document.getElementById('load').className = 'hidden';
        clearInterval(x);
    }


}, 100)


function checkLogin() {
    var username = document.getElementById('a1').value;
    var password = document.getElementById('b1').value;

    var userName = localStorage.getItem('user');
    var passWord = localStorage.getItem('pass');




    if (username == userName && password == passWord) {
        window.open('./questions/index.html','_self');

    }
    else if(username == '' && password == '') {
        alert('Please Enter Username and Password!!!');
    }
    else if(username == '') {
        alert('Please Enter Username!!!');
    }
    else if(password == '') {
        alert('Please Enter Password!!!');
    }
    
    else {
        alert('Incorrect Username or Password');
    }
}



function changeMoveIn(){
    document.getElementById('out').className = 'outsideMove';
    document.getElementById('a1').focus();

}

function changeBackIn(){
    document.getElementById('out').className = 'outside';
}


function changeMoveUp(){
    document.getElementById('outup').className = 'outsideMove';
    document.getElementById('c1').focus();

}
function changeBackUp(){
    document.getElementById('outup').className = 'outside';
}


function signup() {
    document.getElementById('signInCard').className = 'hidden';
    document.getElementById('signUpCard').className = 'card';
    document.getElementById('out').className = 'outside';
}

function login() {
    document.getElementById('signInCard').className = 'card';
    document.getElementById('signUpCard').className = 'hidden';
    document.getElementById('outup').className = 'outside';
}


function saveSignup() {
    var username = document.getElementById('c1').value;
    var password = document.getElementById('d1').value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (password.length < 8){
        alert('Password input minimum 8 characters in password !!!')
    }
    else if (username.match(validRegex) && password.length >= 8) {
        localStorage.setItem('user', username);
        localStorage.setItem('pass', password);
        alert('Congratulation you have just signed up !!!')
    } else {
        alert('Password input corect Username !!!' + '\n' + 'Examle: test@gmail.com ')
    }
}