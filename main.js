let generateRandom = () =>{
    let num = Math.floor(Math.random()*1000);
    console.log(num);
}
//here even without printinng random values will be printed because this two functions work like that.


let ans = setInterval(generateRandom,1000);



clearInterval(ans);