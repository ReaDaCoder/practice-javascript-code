/*
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
console.log(mostFrequent(arr, n));*/ 

//Getting trusted phone brand

/*let phones = [
    {
        brand:"Apple",
        number: 3
    },
    {
        brand: "Xiaomi",
        number:1
    },
    {
        brand: "Sumsung",
        number: 4
    },
    {
        brand:"Techno",
        number: 1
    }, 
    {
        brand: "Huawei",
        number: 1
    },
    {
        brand: "Poco",
        number: 1
    }
];

for(let i=1; i< phones["number"]; i++){
    console.log(i);
}*/

const developers = [
    {
      name: "Vee",
      laptops: [
        "Dell"
      ],
      phones: [
        "Samsung",
        "Xiaomi"
      ],
      computerSetups: [
        {
          brand: "Lenovo",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    },
    {
      name: "Katlego",
      laptops: [
        "HP",
        "Samsung"
      ],
      phones: [
        "Apple",
        "Samsung",
        "Tecno",
        "Samsung"
      ],
      computerSetups: [
        {
          brand: "Lenovo",
          monitors: 2,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    },
    {
      name: "Rethabile",
      laptops: [
        "Samsung"
      ],
      phones: [
        "Samsung",
        "Huawei",
        "Poco"
      ],
      computerSetups: [
        {
          brand: "Asus",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }, 
        {
          brand: "Acer",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }
      ]
    },
    {
      name: "Gift",
      laptops: [],
      phones: [
        "Samsung"
      ],
      computerSetups: [
        {
          brand: "Acer",
          monitors: 3,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "HP",
          monitors: 2,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }
      ]
    },
    {
      name: "Thokozile",
      laptops: [
        "Lenovo"
      ],
      phones: [
        "Apple"
      ],
      computerSetups: [
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "Asus",
          monitors: 1,
          keyboards: 0,
          mice: 1,
          speakers: 1
        }, 
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    }
  ]

  for (let elem in developers.phones){
    console.log(elem, developers["phones"]);
  }

