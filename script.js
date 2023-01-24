const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '760baa61fdmshe2a1f77b7c1f4b4p1ae55cjsn8ae0cc9ad1a6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
	cityName.innerHTML = city


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
		

			console.log(response)
		})
		.catch(err => console.error(err));
}


submit.addEventListener('click', (e) => {

	e.preventDefault()
	getWeather(city.value)


})

const getWeatherShanghai = (city1) => {



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options)
		.then(response => response.json())
		.then(response => {


			cloud_pct1.innerHTML = response.cloud_pct
			temp1.innerHTML = response.temp
			feels_like1.innerHTML = response.feels_like
			humidity1.innerHTML = response.humidity
			min_temp1.innerHTML = response.min_temp
			max_temp1.innerHTML = response.max_temp
			wind_speed1.innerHTML = response.wind_speed
			wind_degrees1.innerHTML = response.wind_degrees
		

			console.log(response)
		})
		.catch(err => console.error(err));
}


// submit.addEventListener('click', (e) => {

// 	e.preventDefault()
// 	getWeather(city.value)


// })

getWeather("Mumbai")
getWeatherShanghai("Shanghai")