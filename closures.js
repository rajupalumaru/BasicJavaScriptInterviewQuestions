let closure ;
{
    let value = 'xyz';
    closure =()=>{
        console.log(value)
    }

}
closure();

let closures;
{
    let myObj = {
        name:'xyz',
        age:29
    }
    closures = ()=>{
        return myObj
    }
}
let value = closures();
console.log(value)

function gretting(){
    let message = 'hi';
    function sayHi(){
        console.log(message);
    }
    sayHi();
}
gretting();

//task 28   Implement a counter function using closure that returns an object with two methods: increment( ) and getCount( ). 
//The increment( ) method should increment a counter variable, and getCount( ) should return the current count value.

function counterFunction(){
    let count = 0;
    function increment(){
        count += 1
    }
    increment();
    function getCount(){
        console.log(count)
    }
    getCount()
}
counterFunction()