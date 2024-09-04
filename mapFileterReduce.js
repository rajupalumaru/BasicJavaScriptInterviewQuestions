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


//Task-23

// Array of book objects
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.3 },
    { title: "1984", author: "George Orwell", rating: 4.6 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 3.9 },
    { title: "Pride and Prejudice", author: "Jane Austen", rating: 4.5 },
    { title: "Moby-Dick", author: "Herman Melville", rating: 3.7 }
  ];
  
  // Function to filter and sort books
  function filterAndSortBooks(books) {
    return books.filter(book => book.rating >= 4)
      .sort((a, b) => {
        if (a.title < b.title) return -1; // If title 'a' is less than title 'b'
        if (a.title > b.title) return 1;  // If title 'a' is greater than title 'b'
        return 0;                         // If titles are equal
      });
  }
  
  // Get the filtered and sorted books
  const filteredSortedBooks = filterAndSortBooks(books);
  console.log(filteredSortedBooks);

  //Task-24

  const shoppingCart = [
    { id: 1, name: 'Laptop', price: 800, quantity: 2 },
    { id: 2, name: 'Smartphone', price: 500, quantity: 1 },
    { id: 3, name: 'Tablet', price: 300, quantity: 3 },
    { id: 4, name: 'Headphones', price: 50, quantity: 2 }
];

//a) map Method: Calculate the total cost for each product

const totalCostPerProduct = shoppingCart.map((item)=>{
    let total = item.price * item.quantity;
    return total;
}) 
console.log("totalCost of Each Element",totalCostPerProduct);


//b) filter Method: Filter products with a total cost greater than 1000
const expensiveProducts = shoppingCart.filter((item)=>{
    return item.price*item.quantity >1000;
})
console.log(expensiveProducts);


//c) reduce Method: Calculate the overall total cost of the shopping cart

const OverTotalCost = totalCostPerProduct.reduce((total,item)=>{
    return total += item
})
console.log(OverTotalCost);


//d) sort Method: Sort products by quantity in descending order.

const sortedByQuantity = shoppingCart.sort((a,b)=>{
    return a.quantity-b.quantity;
})
console.log(sortedByQuantity);


//Task 26  Given an array of objects representing users, update the age of a user with a specific ID.
const users = [
    { id: 1, name: "A", age: 25 },
    { id: 2, name: "B", age: 30 },
    { id: 3, name: "C", age: 22 }
];

const newusers = users.map((user)=>{
    if(user.id == 2){
        return user.age = 30;
    }
    return user.age;
})
console.log('newusers',newusers);


function fun(a, b){
    return a + b;
}
console.log(fun(1, 2, 3, 4, 5));

function allDomains(domainName, mainExtention, ...extensions){
    console.log(extensions.length);
    }
    allDomains("Studytonight", ".com", ".xyz", ".online", ".in");

    //((...x, xs)=>x)(1,2,3)

    