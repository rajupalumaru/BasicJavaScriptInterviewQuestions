//Task-20:  Write a function using hoisting by calling a variable before its declaration and observe the result.

//calling
// add(10,60);

// //Declaration
// function add(a,b){
//     console.log(a+b);
// }

//expression 
// let add = function(){
//     console.log(a+b);
// }
// //o/p :error

// //arrow function 
// let add=(a,b)=>{
//     console.log(a+b);
// }
//o/p error
//  y=3;
//  console.log(y);
//  var y;

function a(){
    console.log('1')
}
a()
function a(){
    console.log('1')
}
a()

if (true) {
    function fn() {
    return 10;
    }
} else{
    function fn() {
    return 20;
    }
}
console.log(fn());