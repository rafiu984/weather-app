let input= document.getElementById('input');
let search= document.getElementById('search');
let region= document.getElementById('region');
let temperature = document.getElementById('temperature');
let humidity = document.getElementById('humidity');
let  wind= document.getElementById('wind');
let feelslike= document.getElementById('feelslike');
let visibility= document.getElementById('visibility');
let pressure= document.getElementById('pressure');
let uvindex= document.getElementById('uvindex');

let xhr = new XMLHttpRequest();

search.addEventListener('click', function () {
    

 xhr.open ('GET', `https://api.weatherapi.com/v1/current.json?key=b22ad911f07743808da102148240309&q=${input.value}&aqi=no`);


xhr.onload = function() {
console.log(xhr);
console.log(xhr.responseText);

let data = xhr.responseText;
console.log(data);

let newdata = JSON.parse(data);
console.log(newdata);


region.innerHTML = newdata.location.name;
temperature.innerHTML = `${newdata.current.temp_c}∘c`  ;
humidity.innerHTML = `${newdata.current.humidity} %`;
wind.innerHTML = `${newdata.current.wind_mph} km/ph`;
feelslike.innerHTML = `${newdata.current.feelslike_c}∘`;
visibility.innerHTML = `${newdata.current.vis_km} km`;
pressure.innerHTML = `${newdata.current.pressure_mb} pa`;
uvindex.innerHTML = `${newdata.current.uv} mw`;

}
xhr.send();
})