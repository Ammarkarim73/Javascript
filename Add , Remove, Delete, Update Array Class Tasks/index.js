var a = ["red, orange, purple, blue, white"];

function addColorToStart(){ 
    var b = prompt("what color do you want to add in the beigning?")

a.unshift(b)
alert(a)
}
function addColorToEnd() { c = prompt("what color do you want to add in the end?")

a.push(c)
alert(a)
}

function addTwoColorToStart() {
var d = prompt("what two colors do you want to add in start, Enter your First Color?")
a.unshift(d)
var e = prompt("Now Enter Your Second Color")
a.unshift(e)

alert(a)
}

function removeColorFromStart() {
    alert("Click Ok to delete your Color From Start")
    a.shift()
    alert(a)
}
function removeColorFromEnd() {
    alert("Click Ok to delete your Color From End")
    a.pop()
    alert(a)
}
function whichIndexToAddColor() {
    var f = prompt("In which index Do you want to add color?")
    var g = prompt("what Color Do You Want Add In Your Index")
    if (f == 0){
    a.splice(f, 0, g)
    alert(a)
    }
    else if (f == 1){
     a.splice(f, 0, g)
     alert(a)
     }
    else  if (f == 2){
     a.splice(f, 0, g)
     alert(a)
     }
    else  if (f == 3){
     a.splice(f, 0, g)
     alert(a)
     }
    else  if (f == 4){
     a.splice(f, 0, g)
     alert(a)
     }
     else if (f == 5){
     a.splice(f, 0, g)
     alert(a)
     }
     else {
     alert("please input your color in range between 0 to 5")
     }
}
function whichIndexToRemoveColor() {
     var f = prompt("In which index Do you want to remove color?")
    var g = prompt("How many Color Do You Want to remove In Your Index?")
     if (f == 0){
         if (g == 0) {
     a.splice(f, g)
     alert(a)
         }
        else if (g == 1) {
     a.splice(f, g)
     alert(a)
         }
        else if (g == 2) {
     a.splice(f, g)
     alert(a)
         }
        else if (g == 3) {
     a.splice(f, g)
     alert(a)
         }
        else if (g == 4) {
     a.splice(f, g)
     alert(a)
         }
        else if (g == 5) {
     a.splice(f, g)
     alert(a)
         }
         else{
             "please input value in Range Between 0 to 5"
         }
     }
    else if (f == 1){
        if (g == 0) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 1) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 2) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 3) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 4) {
            a.splice(f, g)
            alert(a)
                }
                else{
                    "please input value in Range Between 0 to 4"
                }
     }
    else  if (f == 2){
        if (g == 0) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 1) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 2) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 3) {
            a.splice(f, g)
            alert(a)
                }
                else{
                    "please input value in Range Between 0 to 3"
                }
     }
    else  if (f == 3){
        if (g == 0) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 1) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 2) {
            a.splice(f, g)
            alert(a)
                }
                else{
                    "please input value in Range Between 0 to 2"
                }
     }
    else  if (f == 4){
        if (g == 0) {
            a.splice(f, g)
            alert(a)
                }
               else if (g == 1) {
            a.splice(f, g)
            alert(a)
                }
                else{
                    "please input value in Range Between 0 to 1"
                }
     }
     else {
     alert("please input your color in range between 0 to 4")
     }
}

function subjectPercentage() {
alert(" your Subjects English, Maths, Physics, Islamiat")

var sub1 = prompt("Enter your English Subject Marks out of 100.")
var sub2 = prompt("Enter your Maths Subject Marks out of 75.")
var sub3 = prompt("Enter your Physics Subject Marks out of 85.")
var sub4 = prompt("Enter your Islamiat Subject Marks out of 100.")

if (sub1 <= 100){

if (sub2 <= 75){

if (sub3 <= 85){

if (sub4 <= 100){

var sumOfSub = (+sub1 + +sub2 + +sub3 + +sub4);
var multiplyOfSub = (sumOfSub * 100);
var divideOfSub = (multiplyOfSub / 400);
alert("Your Percentage of all subjects is " + divideOfSub + "%");

}else {
    alert("Please enter Marks of English subject in Range between 0 to 100")
}
}else {
    alert("Please enter Marks of English subject in Range between 0 to 85")
}

}else {
    alert("Please enter Marks of English subject in Range between 0 to 75")
}

}
else {
    alert("Please enter Marks of English subject in Range between 0 to 100")
}


}

var todo = []

function todoList() {
    var L1 = prompt("Enter Your First todo")
    var L2 = prompt("Enter Your Second todo")
    var L3 = prompt("Enter Your Third todo")
    var L4 = prompt("Enter Your Fourth todo")

    todo.push(L1, L2, L3, L4)

    alert(todo);
}

function removeFromToDoList(){

var abc = prompt("if you want to remove items from todo list then type yes else type no");

if (abc === "yes"){
    todo.pop();
    alert(todo);
}
else if (abc === "no"){
alert("Have a Nice day!");
alert(todo)
}
else {
alert("Please type yes or no !!!")
}
}












//Now to call all created functions

alert("Welcome to our Activity web !!!")

//Question no.1
alert("your random colors = " + a)

//Q.1 (a)
addColorToStart()

//Q.1 (b)
addColorToEnd()

//Q.1 (c)
addTwoColorToStart()

//Q.1 (d)
removeColorFromStart()

//Q.1 (e)
removeColorFromEnd()

//Q.1 (f)
whichIndexToAddColor()

//Q.1 (g)
whichIndexToRemoveColor()

//Q.2
subjectPercentage()

//Q.3
todoList()
removeFromToDoList()

























