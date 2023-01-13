    alert("Welcome to our type converter");
    var one = prompt("Press 1 for f to c and 2 for c to f  ")
    if (one == "1"){
        var value = prompt("enter your value in farhenheit  ")
        var final = ((parseInt(value) - 32)*5)/9;
        alert(final)
    }
    else if (one == "2" ){
        var value_2 = prompt("Enter your value in celcius  ")
        var final_2 = ((parseInt(value_2) * 1.8) + 32)
        alert(final_2)
    }
    else {
        alert("wrong Value")
    }
    
