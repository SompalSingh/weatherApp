//API:-  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//Key Code:- 62464b99cae185d5c2a734c6440d175c
const input = document.getElementById('inputSearch');
const weatherApi = {
    key: '62464b99cae185d5c2a734c6440d175c',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}
// Add event methods
input.addEventListener('keypress', (e)=>{
    if(e.keyCode == 13){
        //console.log(input.value)
        getWeatherReport(input.value)
    }
})
//Get weather Report
function getWeatherReport(city){
 fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
 .then(weather => {return weather.json()})
 .then(showWeatherReport);
}
//Show weather report
function showWeatherReport(weather){
    const city = document.getElementById('city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    const temp = document.getElementById('temper');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    
    const minMax = document.getElementById('minMax');
    minMax.innerHTML = `${Math.floor(weather.main.temp_max)}&deg;C (Max) / ${Math.floor(weather.main.temp_min)}&deg;C (Min)`;

    const weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    const dateTime = document.getElementById('dateTime');
    const todatDate = new Date()
    dateTime.innerHTML = dateManage(todatDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = 'url(images/clear.jpg)'
    }
    else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = 'url(images/haze.jpg)'
    }
    else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = 'url(images/cloudy.jpg)'
    }
    else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = 'url(images/rain.jpg)'
    }
    else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = 'url(images/snow.jpg)'
    }
    else if(weatherType.textContent == 'Stormy'){
        document.body.style.backgroundImage = 'url(images/snow.jpg)'
    }
    else{
        document.body.style.backgroundImage = 'url(images/clear.jpg)'
    }
}

function dateManage(dateAry){
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const date = dateAry.getDate();
    const month = months[dateAry.getMonth()];
    const day = days[dateAry.getDay()];
    const year = dateAry.getFullYear().toString().substr(-2);
    return `${day}' ${date}-${month}-${year}`
}