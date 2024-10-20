// Uppgift 1

let thirdPlanet = "World";

console.log( `Hello ${thirdPlanet}`);

// Uppgift 2

let firstName = "Mariam";
let age = "29";
let favoriteColor = "Blue";

// Uppgift 3

console.log(`My firstName is ${firstName}`);
console.log(`My age is ${age}`);
console.log(`My favorite color is ${favoriteColor}`);

let num1 = 100;
let num2 = 50;

let add = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(` ${add}`);
console.log(` ${sub}`);
console.log(` ${mult}`);
console.log(` ${div}`);

//-------------------LESSON TWO - JS BASICS-------------------------------
//   Task: 
//  1. Ask the user to enter a price tag using prompt(), 
//                for example: $49.99 
//  2. Convert the input from string to number 
//  3. Reduce the price by 10 procent 
//  4. Print out the new price using console.log(), 
//        for example: 'New price: $44.99' 

let price = prompt("Enter a price:$");
let priceInd = price.slice(1);
let priceConvert = parseFloat(priceInd);

let newPrice = priceConvert * 0.9;
let priceRound = Math.round(newPrice);

console.log(`New price: $${priceRound}`);
