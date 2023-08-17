
JVASCRIPT LEARNING CODES

Code1: Add three numbers

console.log("Program to add thre numbers 1, 2 and 54 using functions");
function add(a,b,c) {
    return a+b+c;
}

let c=add(1,2,54);
console.log(c);
________________________________________

//CODE 2:Programm which  takes age as input and tell if you can drive or not using Ternary operator
let age=prompt("Age boliye?")
let dedo=Number.parseInt(age)
console.log((dedo>18)? "You can drive":" Bhag yaha se")

CODE 3:SIMPLE FOR LOOP
for(let i=0;i<=5;++i){
    console.log(i)
}

//CODE 4:  programm to exchange/SWAP values two variable a and b

var temp="0";
var a="3";
var b="8";
//dhyan me ye rakho ki left me jo operator usme hamlog right wali cheez dal rahe hai
temp=a            //temp me intially "0" tha usme "a" ki value dal di
a=b                   //ab "a" ki actual value "temp" me hai toh "a" me "b" ki value bhar di
b=temp                // and atlast "b" me "a" ki value aani chaiye, aur wo stored hai "temp" me toh "b" me "temp" bhar diya
console.log("a is: "+a)
console.log("b is: "+b)

//CODE 5: We can concatenate strings using “+” operator.
var a="Hello"
var b=" Everyone"
alert(a+b)

//CODE 6: code to, only allow 140 character to be entered by user. like in twitter we can only write 140 charactes long 	Tweet.
let max=140;
let tweet_text=prompt("Please enter your tweet....");

let tweet=tweet_text.slice(0,140)
console.log("only:: "+ tweet + " ::can be tweeted");
//below is commented which actually cuts the long sentence such that it only contains 140 characters
// let leng="showcasing its superior performance compared to traditional algorithms The conclusion summarizes the key findings of the research and the declaration of competing interests states that the authors have no known conflicts of interest";
// console.log(leng.length);
// leng=leng.slice(0,140)
// console.log(leng);
//CODE 7: Code to take input a name and then return “Hello Name” where first leteer of name is capital doesn’t matter how input is given.
let name=prompt("Give your name: ");
alert("Hello "+name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase());
/*various things is done in above code I have merged everything as one. i.e first of all we take out first letter of name, make it capital and also we make other letter of name small and then concatenate them and print */


//CODE 8: equivalent human age for given dogage
let  dogage=prompt("Enter age of dog");
let humanage=((dogage-2)*4)+21;
alert("Human's age equivalent to that Dog's age is "+ humanage)

//CODE 9: Prints age left in Days, weeks and months assume our final age is 90
function lifeInWeeks(age) {
    var daysLeft; // x 365
    var weeksLeft; // y 52
    var monthsLeft; // z 12
    daysLeft= (90 - age) * 365;
    weeksLeft= (90 - age) * 52;
    monthsLeft= (90 - age) * 12;
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
}
lifeInWeeks(89);

//CODE  10:  prints the love percentage randomly. Using “math.random”
let name1=prompt("Enter boy's name");
let name2=prompt("Enter girl's name");
let num=Math.random();
alert("love percentage is: "+Math.round(num*100));

//CODE 11:function to print number from 1 to 100 but, we print “Fizz” if number is divisible by 3 and “Buzz” if number id divisible by 5 and “FizzBuzz” if it is divisible by both 3 and 5.
 var output=[];
let num=1;
function fizzbuzz(){
    while(num<=100){
    if(num%3==0 && num%5==0){
        output.push("FizzBuzz");
    }
    else if(num%3==0){
        output.push("Fizz");
    }
    else if(num%5==0){
        output.push("Buzz")
    }
    else{
        output.push(num);
    }
    num++
    }
    console.log(output);
 }
 fizzbuzz();
//CODE 12: function to print fibonnaci series till given number
function fibonnaci(n){
var arr=[];
if(n===0){
    console.log("Pagal hai kya?")
}
else if(n===1){
    arr.push(0);
    console.log(arr)
}
else if(n===2){
    arr.push(0);
    arr.push(1);
    console.log(arr);
}
else{   
    arr.push(0);
    arr.push(1);    
    for(var j=2;j<n;j++){
        arr[j]=arr[j-1]+arr[j-2];
        }
    } 
console.log(arr);
}
fibonnaci(5)
// CODE 13: switch case to tell about your age.
let age = prompt("What is your age?");
switch (true) {
  case age < 10:
    console.log("Age is less than 10");
    break;
  case age >= 10 && age <= 20:
    console.log("Age is between 10 and 20");
    break;
  default:
    console.log("Age is greater than 20");
    break;
}
//CODE 14: code using Switch case to check if it is divisible by 3 or 5;
let num=prompt("Give the num to check it's divisibilty with 2 or 3")
num=Number.parseInt(num)
let by2=num%2
let by3=num%3
switch(by2==0 || by3==0){
    case true:
        console.log("yes")
        break;
    default:
        console.log("no")
}

 //CODE 15: JS function in newest syntax to print sum of two numbers
let sum = (a, b) => a+b;
sum(2,3)
// CODE 16: Another syntax for functions (here we have to use console.log to print)
let printf=(a,b) =>{
    console.log(a+b)
};
printf(2,3);
//CODE 17: old syntax where we have to use “function” keyword to use functions
function sum(a,b) {
    console.log(a+b) //instead of console.log we can use “return”
};
sum(2,3);
CODE 18: Operation performed to get all elements of object as an array, then getting keys and then finally getting values of those keys
let marks={
    rohan:80,
    rohit:89,
    rahul:45,
    kesav:90,
    himanshu:100
}
//to get array of keys
for(let i=0;i<Object.keys(marks).length;i++){
console.log(Object.keys(marks))
}
//to get only keys 
for(let i=0;i<Object.keys(marks).length;i++){
console.log(Object.keys(marks)[i])
}
// to get values attached to those keys
for(let i=0;i<Object.keys(marks).length;i++){
console.log(marks[Object.keys(marks)[i]])
}


//Code 19: same as above question but here we are using for..in loop to access each key and then print their respective marks.
for(let key in marks){
    console.log("The marks of "+ key + " are "+ marks[key])
}

STRING INTERPOLATION
let boy1="Nikhil", boy2="Rahul"
let sentence=`${boy1} is a friend of ${boy2}`
console.log(sentence)
after variable “sentence” it is not comma but it  is backtick and we put the variables inside ${variable}


//CODE 20: Escape sequence
let fruit='ban\'ana'
console.log(fruit)
console.log(fruit.length)


