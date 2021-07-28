const API_KEY = "fd385ac158f58820db4f4d4c72b5b3db";

function onGeoOk(positon){

    const lat=positon.coords.latitude;
    const lng=positon.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response)=> response.json())
    .then((data) =>{
      const weather =document.querySelector("#weather span:first-child")
      const city =document.querySelector("#weather span:last-child")
        city.innerText= data.name;
       weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
        });
          // url을 실행시킴 data.temp,  data.temp_max, data.temp_min

}

function onError(){
alert("where are you? I can't find you.");

}

navigator.geolocation.getCurrentPosition(onGeoOk,onError);
