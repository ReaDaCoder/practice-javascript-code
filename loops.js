//Example 1: Loops
//The code willdisplay numbers from 1-100
for(var i=0; i<=100; i++){
    console.log(i);
}
 
// Getting total number from1-10
var total = 0;
for(var num = 0; num < 11; num++){
    total = total + num;
}
console.log("The total is: " + total);

//Loop through an array

var fruits = ["mango", "banana", "apple", "pear", "cherry"];
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//How to loop through an object
var data = {
    name: "John",
    age: 28,
    maritalStatus: true
}

for (var elem in data){
    console.log(elem, data[elem]);
}