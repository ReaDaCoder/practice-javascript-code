let numbers = [  3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

//Sort the numbers from lowest to highest
 function ascending(a,b){
    return a-b;
 }
 numbers.sort(ascending);
 console.log(numbers);

 //Sort the numbers from highest to lowest
 function descending(a,b){
    return b-a;
 }
 numbers.sort(descending);
 console.log(numbers);

 //Return an array of unique numbers. If a number is repeated, it should not occur twice in the returned array
 let unique = numbers.filter((value, index, arr)=>{
    return arr.indexOf(value) === index;
 });
 console.log(unique);

 //Calculate the sum of the numbers in the array referred to in the problem statement
  
let total = numbers.reduce(sum);
console.log(total);
function sum(a,b){
   return a + b;
}

//Return a new array with elements that are less than or equal to 100
let lessThanHundred = numbers.filter(less);
console.log(lessThanHundred);
function less(value){
   return value<= 100;
}

//Return a new array with elements that are greater than 50
let greaterThanFifty = numbers.filter(lessFifty);
console.log(greaterThanFifty);
function lessFifty(value){
   return value > 50;
}

//Return a new array with elements that are divisible by 2
let divisibleByTwo = numbers.filter(divideTwo);
console.log(divisibleByTwo);
function divideTwo(value){
   return value /2;
}

//Return a new array with elements that are divisible by 3
let divisibleByThree = numbers.filter(divideThree);
console.log(divisibleByThree);
function divideThree(value){
   return value /3;
}

//Return a new array with elements that are neither divisible by 2 or 3, if they exist. Otherwise return an empty array.
let i =0;
if(i/2 || i/3){
   console.log(i);
} else{
   console.log('');
}
//Declare a variable that counts how many elements are in the original array
 let count = numbers.length;
 console.log(count);

 //Declare a new array that contains the same elements as the original array, but reversed. The array should start at 980 and end at 3
 let reverseElements = numbers.slice(0,28);
 let finalReverse = reverseElements.reverse();
 console.log(finalReverse);
