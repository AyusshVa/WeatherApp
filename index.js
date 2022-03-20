 document.querySelector('.btn').addEventListener('click', ()=>{
    let city =  document.querySelector('.search-bar').value;
     fetchData(city);
 })

 document.addEventListener('keydown', (element)=>{
     if(element.key == 'Enter'){
         let city = document.querySelector('.search-bar').value;
         fetchData(city);
     }
 })

 function fetchData(city){
     
     const appId = '6a5d4c9b68cc759181dedec086745c8d';
     const url= 'https://api.openweathermap.org/data/2.5/weather?q='+city+ '&units=metric'+'&appid='+appId ;


    // use of fetch method to make get request in simple javascript
    
    fetch(url)
    .then((response) => {
        if(!response.ok) 
        alert('City not available')
     return response.json();
    })
    .then((data) => findParameters(data));
    
 }

 function findParameters(weatherData){
const temp = weatherData.main.temp;
const icon = weatherData.weather[0].icon;
const description = weatherData.weather[0].description;
const speed = weatherData.wind.speed;
const humidity = weatherData.main.humidity;
const city = weatherData.name;

document.querySelector('.city').innerHTML = 'Weather in '+ city;
document.querySelector('.temp').innerHTML = temp + '°C';
document.querySelector('.description').innerHTML = description;
const iconUrl = "http://openweathermap.org/img/wn/"+icon+".png"
document.querySelector('.icon').setAttribute('src', iconUrl);
document.querySelector('.humidity').innerHTML = 'Humidity:' +humidity;
document.querySelector('.wind').innerHTML = 'Wind speed: '+speed + 'Km/h';
document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?landscape/)";

 }

 fetchData('Delhi');

