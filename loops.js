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

//Loping over an object

const person = {
    id: 252,
    username: "dcode",
    age: 32,
    hobbies: ["Software Development", "Gardening"],
    active: true
};

const entries = Object.entries(person);

for (const key in person){
    if(person.hasOwnProperty(key)){
        console.log(person[key]);
    }
}

// JavaScript program to find the most frequent element in an array 
function mostFrequent(arr, n) { 

	let maxcount = 0; 
	let element_having_max_freq; 
	for (let i = 0; i < n; i++) { 
		let count = 0; 
		for (let j = 0; j < n; j++) { 
			if (arr[i] == arr[j]) 
				count++; 
		} 

		if (count > maxcount) { 
			maxcount = count; 
			element_having_max_freq = arr[i]; 
		} 
	} 

	return element_having_max_freq; 
} 

// Driver Code 

let arr = [40, 50, 30, 40, 50, 30, 30]; 
let n = arr.length; 
console.log(mostFrequent(arr, n)); 
