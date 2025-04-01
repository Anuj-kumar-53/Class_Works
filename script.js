// alert("Students Details");
// console.log("i m in the console");
// document.writeln("hello lets begin with javascript");
// let a = 50;
// let count =0;
// let noprime = 0;
// function  isPrime(x){
//     if(x<2){
//         return false;
//     } 
//     for(let i=2;i*i<=x;i++){
//         if(x%i == 0){
//             return false;
//         }
//     }
//     return true;

// }
// for(let i = 1  ;i<50;i++){
//     if(isPrime(i)){
//         count++;
//     }else{
//         noprime++;
//     }
// }
// alert("total prime no from 1-50 is"+ count);
let a = +prompt("Enter your number you want table of: "); //+prompt is to take only integers remove + and we can take othere inputs..
for(let i=1;i<=10;i++){
    document.writeln(a*i,"</br>");
}
let sum =0;
for(let j=0;j<=120;j++){
    sum += j;
}
document.writeln(sum)

let obj = {
    name: "anuj",
    stream: "CSE",
    year: "2nd year",
    address: "punjab",
    cgpa: {
        sem1: "7.2",
        sem2: "8.0",
        sem3: "8.2",
        sem4: "In progress"
    }

}
console.log(obj);
let x = 10  
function vote(a){
    if(a>18){
        console.log("u r eligible to vote");
    }else{
        console.log("you are not eligible to vite");
    }
}
vote(x);
let anu = ()=>{
    console.log("hello this is an arrow function");
}
anu();  