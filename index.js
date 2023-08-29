"use strict";
//  Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const givennArry = [1, 2, 3, 4, 5];
const newArray = givennArry.map((array) => { return array * 2; });
console.log(newArray);
// Write a program that uses filter to remove all negative numbers from an array of numbers
const negArry = [12, 23, -34, 323, 34, 32, 4, 34, 34, 32, -4, 234, -324, -23, -243, -3243, -3, 4, 34, 3, 4, 43];
const result = negArry.filter((value) => { return value > 0; });
console.log(result);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
const fruit = ["apple", "banana", "cherry", "date", "grape", "Pineapple", "surgecane", "orange", "blubarry"];
const fruits = fruit.filter((name) => { return name.length > 5; });
console.log(fruits);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = givenArray.filter((prime) => { return prime % 2 == 0; });
console.log("Use Map method to find Prime Number", evenArray);
const squareArray = evenArray.map((squr) => { return squr * squr; });
console.log("Use Filter method to find Squre of Prime Numbers", squareArray);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const tempCelcius = [0, 10, 20, 30, 40];
const tempInFar = tempCelcius.map((index) => { return ((index * 9 / 5) + 32); });
console.log("Temperature in Fahrenheit", tempInFar);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const givenNumber = [3, 6, 9, 12, 15, 18];
const oddNumber = givenNumber.filter((Number) => { return Number % 2 !== 0; });
console.log("odd number", oddNumber);
const doubleValue = oddNumber.map((Number) => { return Number * 2; });
console.log("odd narray containing the doubled values of odd numbersumber", doubleValue);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach(element => {
    console.log(`${element}!`);
});
