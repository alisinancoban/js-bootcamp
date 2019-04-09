function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
        })
        .catch(error => console.log(error));
}
getWeather(2344117);



async function getWeatherAW(woeid){
    try{
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

getWeatherAW(44418)
getWeatherAW(2344117)
getWeatherAW(2487956)
.then(result => {
    const today = result.consolidated_weather[0];
    console.log(`Temperatures today in ${result.title} stay between ${today.min_temp} and ${today.max_temp}.`); 
})
.catch(error => console.log(error)) //can not catch getWeatherAW error