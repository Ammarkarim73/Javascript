function sumOfHundredMarks () {
    var num = 0

    for (i = 0; i <=100; i++) {
        var newNum = num + i;
        var num = newNum;
        console.log(num);
    }
alert(num);
}


sumOfHundredMarks()