let numbers = [  3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

/*//Sort the numbers from lowest to highest
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
*/


let info = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600. ];
 //Using a for loop and a variable, return all values that are numbers.

 let digits = [];
 for(p=0; p<info.length;p++){
   if(typeof info[p] === 'number'){
      digits.push(info[p]);
   }
 }
 console.log(digits);


 //Using a while loop and a variable, return all values that are strings
 let text = [];
 let i=0;
 while(i<info.length){
   if(typeof info[i] === 'string'){
      i++;
      text.push(info[i]);
   }
 }
 console.log(text);

 //Using a do while loop, return the sum of all values in the array
 let sumOf = 0;
 let x=0;
 while(x<digits.length){
      x++;
      sumOf = sumOf +x;
 }
 console.log(sumOf);

 //Using any looping structure of your choice and a variable, combine all the strings to form a proper greeting that follows the basic English grammar standards. Eg “Hello, Sarah, Thabo, and Mariah.”.
 let names = ["Clenten", "Jerry", "Vukona", "Reabetswe"];
 for(let name=0; name< names.length; name++){
   console.log(`Hello, ${names[name]}`);
 }

 //spread operator
 const fruits = ["apple", "pear", "mango", "orange", "banana", "cherry", "grapes", "peach"];
const fruitsPicklist = [...fruits, ...fruits];
console.log(fruitsPicklist);