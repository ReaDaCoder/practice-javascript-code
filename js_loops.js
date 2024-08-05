/*const developers = [
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
  let arr = [];
 for(let i = 0; i<developers.length;i++){
     let phones = developers[i].phones;
     for(let x=0; x<phones.length;x++){
        arr.push(phones[x]);
     }
    }
    console.log(arr);

    //mos trusted brand
    count =1;
    for(let i =0;i<arr.length;i++){
      count = count + 1;
    }
;*/

const myArray = ["a", "b", "c"];

for(let i=0; i<myArray.length; i++){
  console.log(`index: ${i}, value: ${myArray[i]}`);
}
//Whie Loop
let i =0;
while(i<myArray.length){
  if(i===1){
    i++;
    continue;
  }
  console.log(`index: ${i}, value: ${myArray[i]}`);
}

//For  Each
myArray.forEach(function(elem,index){
  //console.log(`index: ${index}, value:${elem}`);
});



const arry = [ 1, 2, 3 ];

for (let i = 1; i <= arry.length; i++) {
  console.log(arry[i]);
}
