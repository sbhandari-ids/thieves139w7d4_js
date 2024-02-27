
const YOUR_OPENWEATHERMAP_API_KEY = "b22185935d30037750a437ade03f71cd";
const API_key = YOUR_OPENWEATHERMAP_API_KEY;

const getWeatherData = async (query) => {
    url1= `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_key}`;
    
      const response = await fetch(url1)
      const data = await response.json()
      console.log(data)
      return data
     
    }
//     catch(error{
//       console.error(`there was an error: ${error}`)
//     };
// }

// const form = document.querySelector('#search_form');


  
const displayData = async () => {
    // const form = document.querySelector('#search_form');
    const search_data = document.getElementById('city-zip');
    console.log(search_data)

    // let search_data = form[0].value.toLowerCase();
    if(!search_data)
    {   search_data = '10001';
        //alert('Please enter a city name.');
        return;
    }
    console.log(search_data)

    const display = document.querySelector('#city-country');
    const maxTemp = document.querySelector('#max_temp_row');
    const minTemp = document.querySelector('#min_temp_row');
    const forecast = document.querySelector('#forecast_row');
    const humidity = document.querySelector('#humidity_row');
    
    display.innerHTML = `<h1>${data.name}, ${data.sys.country} </h1>`;
    maxTemp.innerHTML =  `<h2> ${temp_k2f_converter(data.main.temp_max)}F </h2>`;
       
    minTemp.innerHTML = `<h2> ${temp_k2f_converter(data.main.temp_min)}F </h2>`;
    
    forecast.innerHTML = `<h3>${data.weather[0].description} </h3>`;
    
    humidity.innerHTML = `<h3>${data.main.humidity}</h3>`;
    
}

 

displayData(search_data);
const search_btn = document.querySelector('#search-btn')
search_btn.addEventListener('click',displayData)

function changeBackground(){
    let bg = document.getElementById('forecast_row').value;
    document.body.style.backgroundImage = url('images/${bg}')
  }







//================================================================

function temp_k2f_converter(temp_k){
    this.temp_k = temp_k;
    let temp_f; 
    temp_f = ((temp_k -273.15)* 1.8 + 32);
    temp_f = temp_f.toFixed(2);
   console.log(temp_f);
   return temp_f;
}

function temp_k2c_converter(temp_k){
    this.temp_k = temp_k;
    let temp_c; 
    temp_c = (temp_k -273.15).toFixed(2);
    console.log(temp_c);
    return temp_c;
}
// console.log(temp_k2f_converter(500));
// console.log(temp_k2c_converter(500));



/*===========================================================================
This is the data we need to read from------------------

{
    "coord": {
        "lon": -74.4932,
        "lat": 40.4509
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 275.94,
        "feels_like": 273.93,
        "temp_min": 273.44,
        "temp_max": 279.36,
        "pressure": 999,
        "humidity": 83
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.01,
        "deg": 306,
        "gust": 3.93
    },
    "clouds": {
        "all": 92
    },
    "dt": 1708754709,
    "sys": {
        "type": 2,
        "id": 2076514,
        "country": "US",
        "sunrise": 1708774806,
        "sunset": 1708814566
    },
    "timezone": -18000,
    "id": 5101717,
    "name": "New Brunswick",
    "cod": 200
}
*/