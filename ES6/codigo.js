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

// #15

