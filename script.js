//how to use map method in an array of objects.
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price: 1500,
        count: 2
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    }
];

const totalProductsValue = products.map(item => item.price * item.count);
console.log(totalProductsValue);

function showCity(response){
    console.log(response);
}

let api = "http://api.weatherapi.com/v1/current.json?key=58ba20b08f854e3da23163958241108&q=London&aqi=yes";
axios.get(api).then(showCity);

//weather app

let apiUrl = "http://api.weatherapi.com/v1/current.json?key=58ba20b08f854e3da23163958241108&q=Lagos&aqi=yes";

    const currentLocation =(response) =>{
        console.log("response", response.coords.latitude);
        let latitude = response.coords.latitude;
  let longitude = response.coords.longitude;
  //console.log(longitude);
  let apiKey = "58ba20b08f854e3da23163958241108";
  let apiPoint = "http://api.weatherapi.com/v1/current.json";
  let apiUrl = `${apiPoint}?key=${apiKey}&q=${latitude},${longitude}`;

  let currentTemperature = document.querySelector(".weather-temperature");
  //currentTemperature.innerHTML = response.current.temp_c;
//"http://api.weatherapi.com/v1/current.json?key=58ba20b08f854e3da23163958241108&q=-25.75,28.19"
axios.get(apiUrl).then(console.log(response));
    }
    navigator.geolocation.getCurrentPosition(currentLocation);

      let getInput = document.querySelector(".search-input");
    let key = "58ba20b08f854e3da23163958241108";

let url = `http://api.weatherapi.com/v1/current.json?key=58ba20b08f854e3da23163958241108&q=Pretoria&aqi=yes`;

  const getCity = (city)=>{
        let key = "58ba20b08f854e3da23163958241108";
        let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`;
        console.log(url);
        axios.get(url).then(updateWeather).catch((error)=>console.log(error));
    }