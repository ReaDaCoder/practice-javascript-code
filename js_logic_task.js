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