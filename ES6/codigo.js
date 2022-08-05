// #1 Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

function checkScope() {
  let i = 'function scope';
  if (true) {
    const i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//------------------------------------------------------------

// #2 An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//---------------------------------------------------------

// #3 In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//-------------------------------------------------------------

// #4 Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => new Date();

//------------------------------------------------------------

// #5 Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//----------------------------------------------------

// #6 Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

const increment = (number, value = 1 ) => number + value;

//------------------------------------------------------------

// #7 Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (...args) => {
  let suma = 0;
    for (let i of args){
      suma+= i;
    }
    return suma;
  }

  //-------------------------------------------------

// #8 Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);

//------------------------------------------------------

// #9 Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;

//-------------------------------------------------------

// #10 Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today: highToday} = HIGH_TEMPERATURES1;
const {tomorrow: highTomorrow } = HIGH_TEMPERATURES1; 

//----------------------------------------------------------------

// #11 Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday1 the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  
const { today: { low: lowToday, high: highToday1 } } = LOCAL_FORECAST;

//----------------------------------------------------------------------

// #12 Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a,b);

//-------------------------------------------------------------------------

// #13 Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

//---------------------------------------------------------------------------

// #14 Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({min, max}) => (max + min) / 2.0; 

//--------------------------------------------------------------

/* #15 Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below). */

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  console.log(failureItems)
  return failureItems;
}

const failuresList = makeList(result.failure);

//------------------------------------------------------------------

// #16 Use object property shorthand with object literals to create and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => ({
  // Cambia solo el código debajo de esta línea
  
    name, age, gender
  
  // Cambia solo el código encima de esta línea
});

//-------------------------------------------------------------------------

// #17 Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//-----------------------------------------------------------------------------

/* #18 Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor. */

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

//-------------------------------------------------------------------------

/* #19 Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature. In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius. Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track. In other words, you are abstracting implementation details from the user.*/

class Thermostat {
  constructor(temperature){
    this._temperature = temperature;
  }

  get temperature() {
    return (5/9) * (this._temperature - 32);
  }

  set temperature(celsius) {
    this._temperature = celsius * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Farenheit scale
let temp = thermos.temperature; // 24.44  Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26  Celsius

//--------------------------------------------------------------------------

// #20 Add a script to the HTML document of type module and give it the source file of index.js

<html>
  <body>
    <script type = "module" src="index.js"></script>

  </body>
</html>

//-------------------------------------------------------------------------------

// #21 There are two string-related functions in the editor. Export both of them using the method of your choice.

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

//---------------------------------------------------------------------

// #22 Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

//------------------------------------------------------------------------------

// #23 The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//--------------------------------------------------------------------------

// #24 The following function should be the fallback value for the module. Please add the necessary code to do so.

export default function (x, y) {
  return x - y;
}

//------------------------------------------------------------------------

// #25 In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.

import subtract from "./math_functions.js";
// Cambia solo el código encima de esta línea

subtract(7,4);

//-------------------------------------------------------------------------

// #26 Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

const makeServerRequest = new Promise((resolve , reject ) => {

});

//--------------------------------------------------------------------------

// #27 Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer;

  if(responseFromServer) {
    resolve('We got the data');
  } else {  
    reject('Data not received');
  }
});

//-------------------------------------------------------------------------

// #28 Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

const makeServerRequest = new Promise((resolve, reject) => {
   // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }

  makeServerRequest.then(result => {

});

console.log(result);
});

//-------------------------------------------------------------------------

// #29 Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.catch(error => {
  console.log(error);
});

