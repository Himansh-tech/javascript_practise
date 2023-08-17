for each loop=> calls a functions once for each array element 
let arr=[2,4,5,7,3,1,9]
arr.forEach((element) =>{
    console.log(element*element)
})


// output:
// 4
// 16
// 25
// 49
// 9
// 1
// 81


let name="Himanshu";
let arr=Array.from(name)
console.log(arr)

// output:
// (8) ['H', 'i', 'm', 'a', 'n', 's', 'h', 'u']

let num=[1,2,3,4,5,6,7,8,9]
                            //for of
for(let i of arr){
    console.log(i)
}

                           // for..in => prints index of Array 
for(let i in num){
    console.log(i)
}


//map method of array
let arr=[45,23,21,25]

let newarr=arr.map((value, index, array) =>{
    console.log(value, index, array);
    return value+2.5
})
//above code will print all three value at each position of array, it's index and also the entire array

console.log(newarr)


//filter method: apply filter and return the new elements that satisy the filter condition
original array does not changes
let arr2=[23,2,34,5,6,7,8,234,135,54,09]
let a2=arr2.filter((a) =>{
    return a<10
})
console.log(a2)


//reduce: (just example operation may differ)adds first two values of array then ads third value into the result of addition of first two and goes condition once
let arr3=[1,2,3,4,5,6,7]

let newarr3=arr3.reduce((h1, h2)=>{
    return h1-h2
})
console.log(newarr3)

above code can also be written as
let arr4=[0,1,2,3,4,5]
let reduce_func=(h1,h2)=>{
    return h1+h2
}
// let printf=arr4.reduce(reduce_func)
//console.log(printf)
reduce_func(arr4)



//toPrecision
console.log(typeof )
var num44 = 38.6;
console.log(num44.toPrecision(2));

var nu = 123;
console.log(nu.toPrecision());


//code to take size of array and store that number of elements in that array, given by user.
let arr=[];
let n=prompt("Enter number of elements in array: ")
for(let i=0;i<n;i++){
    let ele=prompt(`Enter ${i}  element of array`)
    arr[i]=ele
}
console.log(arr)

//sorting above received array
let compare=(a,b)=>{
    return a-b
}
console.log(arr.sort(compare))




//code to keep adding elememnt in array until a specific element ('0 here') arrives
let arr=[1,2,3,4,5,6,7,8]
let a;//defined here cause as let is block scoped defining it under do will make it useless outside it
do{
a=prompt("Enter number to add in array")
a=Number.parseInt(a)
arr.push(a)
}while(a!=0)
console.log(arr) 



//map
let arrr=[1,3,5,7,9,45,30,45]
let n =arrr.map((a)=>{
    return a*a
})
console.log(n)


//reduce 
let ar=[1,2,3,4,5,6,7]
let np=ar.reduce((x1,x2)=>{
    return x1*x2
})
console.log(np)


//game which give 5 chances to guess a number from 1 to 10
let num2=0;
let chances=5;
for(let i=chances;i>=1;i--){
    let num=Math.round(Math.random()*10)
    num2=prompt('Enter a guessed number')
    num2=Number.parseInt(num2)
    if(num===num2){
        alert('You won')
        break;
    }
    else{
        alert(`wrong guess!! correct number was ${num} you entered ${num2}, chances left ${i}`)
    }
}

//code to confirm age and allow driving

do{
let age=prompt("Please enter your age: ")
age=Number.parseInt(age)
if(age<=0){
    console.error("Enter a valid age.")
    continue;
}
else if(age>=18){
    alert("You can drive")
}
else{
    alert("You can't drive")
}
}while(confirm("Do you want to enter again? ")==true)


//


code to redirect
let num=prompt("Enter number between 1 and 10 if you want to get redirected to Google")
if(num>=1 && num<=10){
    location.href="https://www.google.com"
}
else{
    alert("You didn't enter the number between 1 and 10")
}


change background color using js 
let colo=prompt('Enter the background color which you want??')
document.body.style.background=colo;










