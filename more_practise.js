// CODE 15: JS function in newest syntax to print sum of two numbers
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
//CODE 18: Operation performed to get all elements of object as an array, then getting keys and then finally getting values of those keys
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

//STRING INTERPOLATION
let boy1="Nikhil", boy2="Rahul"
let sentence=`${boy1} is a friend of ${boy2}`
console.log(sentence)
//after variable “sentence” it is not comma but it  is backtick and we put the variables inside ${variable}


//CODE 20: Escape sequence
let fruit='ban\'ana'
console.log(fruit)
console.log(fruit.length)
