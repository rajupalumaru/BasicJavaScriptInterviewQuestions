let numbers = [2,5,3,7,4,1];

//Map
let addNumbers = numbers.map((number)=>{
    return number+10;
})
console.log(addNumbers);

//Filter
let greater5 = numbers.filter((number)=>{
    return number>5;
})
console.log(greater5);

//Reduce
let sum = numbers.reduce((total,number)=>{
    return total += number;
})
console.log(sum);
//sort
//accending order
let accndingOrder = numbers.sort((a,b)=>{
    return a-b;
})

//decending order of usinf sort method
let decendingOrder = numbers.sort((a,b)=>{
    return b-a;
})


// one more example for the Map filter 

let marks = [45,34,90,56,39,50];

let graceMarks = marks.filter((mark)=>{
    return mark< 40;
}).map((mark)=>{
    return mark +10
})
console.log("gracemarks",graceMarks);