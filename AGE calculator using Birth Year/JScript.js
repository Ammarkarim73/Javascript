
    alert("Hello There!" + "\n" + "Welcome To Our Age Calculating Website using YEAR");
    var one = prompt("Enter Your Name");
    var two = prompt("Enter Your Year of Birth");
    var three = new Date().getFullYear();
    
    if (two >= 1922 || two <= 2022) {

        var four = three - two
        alert('Your Name'+ ' ' + one + ' ' + 'Your AGE' + ' ' +four);

    }
    else {
    
    alert("Please INPUT Correct Year between 1922 to 2022!");

    }