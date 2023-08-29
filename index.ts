//  Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.


const givennArry:number[]=[1, 2, 3, 4, 5];
const newArray:number[]=givennArry.map( (array:number )=>{return array*2});
console.log(newArray);


// Write a program that uses filter to remove all negative numbers from an array of numbers

const negArry:number[]=[12,23,-34,323,34,32,4,34,34,32,-4,234,-324,-23,-243,-3243,-3,4,34,3,4,43];
const result:number[]= negArry.filter((value:number )=>{return value>0});
console.log(result);


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.


const fruit:string[]=["apple", "banana", "cherry", "date", "grape" ,"Pineapple", "surgecane", "orange" , "blubarry"];
const fruits:string[]= fruit.filter((name:string)=>{return name.length >5});
console.log(fruits);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

const givenArray:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray:number[]=givenArray.filter((prime:number)=> {return prime%2==0});
console.log("Use Map method to find Prime Number", evenArray);
const squareArray:number[]=evenArray.map((squr:number)=> {return squr*squr});
console.log("Use Filter method to find Squre of Prime Numbers",squareArray);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.


const tempCelcius:number[]=[0, 10, 20, 30, 40];
const tempInFar:number[]= tempCelcius.map((index:number)=>{return ((index*9/5)+32)});
console.log("Temperature in Fahrenheit",tempInFar);


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const givenNumber:number[]=[3, 6, 9, 12, 15, 18]
const oddNumber:number[]=givenNumber.filter((Number:number)=>{return Number%2!== 0})
console.log("odd number",oddNumber);
const  doubleValue:number[]= oddNumber.map((Number:number )=> {return Number*2})
console.log("odd narray containing the doubled values of odd numbersumber",doubleValue);


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
const names:string[]= ["Alice", "Bob", "Charlie", "David", "Emily"]
names.forEach(element => {
  console.log(`${element}!`);
  
});
