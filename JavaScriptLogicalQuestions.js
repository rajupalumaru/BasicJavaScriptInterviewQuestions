//1> What will be the output of console.log(2 + "2" - 1)?

console.log(2+'2'-1);
21

//2.What is the output of console.log(typeof null)?
console.log(typeof(null));
Object

//3.What does console.log("5" - 3) print?
console.log("5" - 3)
2

//4.What will console.log(!"false") output?
console.log(!"false")
false

//5.What does console.log(typeof NaN) print?
console.log(typeof(NaN));
//number

//6.Print every 3rd number from 1 to 100?
for(let i = 1;i<=100;i++){
    if(i%3===0){
    // console.log(i)
    }
}

//7.Print factorial of a given number?
let n = 5;
let fact = 1;
for(let i = 1;i<=n;i++){
    fact = fact*i;
}
console.log(fact)

//8.Reverse a given number using loops?
let num = 1234;
let str = num.toString();
let arr =[];
for(let i=str.length-1;i>=0;i--){
    arr.push(str[i]);
}
console.log(arr.join(''))

//9.Check if a character is a vowel or a consonant?
let chr = '1';
let lowerChr = chr.toLowerCase();
if(lowerChr ==='a' || lowerChr === 'e' || lowerChr ==='i'|| lowerChr ==='o'|| lowerChr ==='u'){
    console.log('The chararector is vowel');

}else if(lowerChr >='a'&&lowerChr<='z'){
    console.log('the charactor is Consonent')
}else {
    console.log('Not a letter')
}

//10.Determine the largest of three numbers?
let num1 = 100;
let num2 = 25;
let num3 = 105;

if(num1>=num2 &&num1>=num3){
    console.log("num1",num1)
}else if(num2>=num3 && num2 >= num1){
    console.log("num2",num2)
}else{
    console.log("num3",num3)
}

//11.Print 1-100 even numbers?
for(let i = 1;i<=100;i++){
    if(i%2===0){
        //console.log(i)
    }
}

//12.Print factorial of a given number?
let numb = 6;
let fact1 = 1;
for(let i = 1;i<=numb;i++){
    fact1 =fact1*i
}
console.log(fact1)

//13.Print Fibonacci sequence upto given number of terms 'n'?
let terms = 10;
let a=0,b=1,nexTerm;
console.log(a)
for(let i = 1;i<terms;i++){
    nexTerm = a+b;
    a = b;
    b=nexTerm
    //console.log(b)
}

//14.Calculate sum of digits of a given number?
let number = 112345;
let strNum = number.toString();
let sum =0;
for(let i=0;i<strNum.length;i++){
    sum = sum+parseInt(strNum[i]);
}
console.log(sum)

//15.Print the first n natural numbers in reverse order?
let naturalNumber = 10;
for(let i = naturalNumber;i>=1;i--){
    //console.log(i)
}

//16.Write a JavaScript function to sum all numbers in a given array?
function sumArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    return sum
}
let numbers = [1,2,3,4,9];
let result = sumArray(numbers);
console.log(result);
//17.Write a JavaScript function to reverse a string?
function revString(str){
    let result =[];
    for(let i=str.length-1;i>=0;i--){
    result.push( str[i])
    }
    return result;
}
let string = 'abc';
let res = revString(string);
console.log(res.join(""));

//18.Write a JavaScript function to check if a string is palindrome?
function isPalindrome(str) {
    str = str.toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
let word = "Madam";
let rest = isPalindrome(word);
console.log(word + " is a palindrome: " + rest);

//19.Write a JavaScript function to count the number of vowels in a given string?
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU"; 
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
let inputString = "Hello World";
let vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount);

//20.Write a JavaScript function to check if a given array is sorted in ascending order?
function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; 
        }
    }
    return true; // The array is sorted in ascending order
}
let array = [1, 2, 3, 4, 5];
let ret = isSortedAscending(array);
console.log("Array is sorted in ascending order:", ret);

// write a Javascript function to print pyramidPattern
function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let line = '';
        // Add leading spaces
        for (let j = 0; j < rows - i - 1; j++) {
            line += ' ';
        }
        // Add stars and spaces in between
        for (let k = 0; k < i + 1; k++) {
            line += '*';
            if (k < i) {
                line += ' '; // Space between stars
            }
        }
        console.log(line);
    }
}
let rows = 3;
printPattern(rows);