
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "e4acda5dd7msh315a3c69717abfcp14c703jsn3f4c60cfb45e",
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};
const getAQI = (city) => {

	cityName.innerHTML = city;

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			overall_aqi.innerHTML = response.overall_aqi
			CO_concentration.innerHTML = response.CO.concentration
			CO_aqi.innerHTML = response.CO.aqi
			NO2_concentration.innerHTML = response.NO2.concentration
			NO2_aqi.innerHTML = response.NO2.aqi
			O3_concentration.innerHTML = response.O3.concentration
			O3_aqi.innerHTML = response.O3.aqi
			SO2_concentration.innerHTML = response.SO2.concentration
			SO2_aqi.innerHTML = response.SO2.aqi
			PM10_concentration.innerHTML = response.PM10.concentration
			PM10_aqi.innerHTML = response.PM10.aqi



			let obj = { CO_aqi, NO2_aqi, O3_aqi, SO2_aqi, PM10_aqi };
			let obj2 = { co_aqi, no_aqi, o_aqi, so_aqi, pm_aqi };

			//CO_AQI
			if (response.CO.aqi >= 0 && response.CO.aqi <= 50) {
				co_aqi.innerHTML = "Good";
			}
			if (response.CO.aqi > 50 && response.CO.aqi <= 100) {
				co_aqi.innerHTML = "Moderate";
			}
			if (response.CO.aqi > 100 && response.CO.aqi <= 150) {
				co_aqi.innerHTML = "Unhealthy";
			}
			if (response.CO.aqi > 150 && response.CO.aqi <= 200) {
				co_aqi.innerHTML = "Unhealthy";
			}
			if (response.CO.aqi > 200 && response.CO.aqi <= 300) {
				co_aqi.innerHTML = "Very Unhealthy";
			}
			if (response.CO.aqi > 300) {
				co_aqi.innerHTML = "Hazardous";
			}
			//NO2_AQI
			if (response.NO2.aqi >= 0 && response.NO2.aqi <= 50) {
				no_aqi.innerHTML = "Good";
			}
			if (response.NO2.aqi > 50 && response.NO2.aqi <= 100) {
				no_aqi.innerHTML = "Moderate";
			}
			if (response.NO2.aqi > 100 && response.NO2.aqi <= 150) {
				no_aqi.innerHTML = "Unhealthy";
			}
			if (response.NO2.aqi > 150 && response.NO2.aqi <= 200) {
				no_aqi.innerHTML = "Unhealthy";
			}
			if (response.NO2.aqi > 200 && response.NO2.aqi <= 300) {
				no_aqi.innerHTML = "Very Unhealthy";
			}
			if (response.NO2.aqi > 300) {
				no_aqi.innerHTML = "Hazardous";
			}

			//O3_AQI
			if (response.O3.aqi >= 0 && response.O3.aqi <= 50) {
				o_aqi.innerHTML = "Good";
			}
			if (response.O3.aqi > 50 && response.O3.aqi <= 100) {
				o_aqi.innerHTML = "Moderate";
			}
			if (response.O3.aqi > 100 && response.O3.aqi <= 150) {
				o_aqi.innerHTML = "Unhealthy";
			}
			if (response.O3.aqi > 150 && response.O3.aqi <= 200) {
				o_aqi.innerHTML = "Unhealthy";
			}
			if (response.O3.aqi > 200 && response.O3.aqi <= 300) {
				o_aqi.innerHTML = "Very Unhealthy";
			}
			if (response.O3.aqi > 300) {
				o_aqi.innerHTML = "Hazardous";
			}

			//SO2_AQI
			if (response.SO2.aqi >= 0 && response.SO2.aqi <= 50) {
				so_aqi.innerHTML = "Good";
			}
			if (response.SO2.aqi > 50 && response.SO2.aqi <= 100) {
				so_aqi.innerHTML = "Moderate";
			}
			if (response.SO2.aqi > 100 && response.SO2.aqi <= 150) {
				so_aqi.innerHTML = "Unhealthy";
			}
			if (response.SO2.aqi > 150 && response.SO2.aqi <= 200) {
				so_aqi.innerHTML = "Unhealthy";
			}
			if (response.SO2.aqi > 200 && response.SO2.aqi <= 300) {
				so_aqi.innerHTML = "Very Unhealthy";
			}
			if (response.SO2.aqi > 300) {
				so_aqi.innerHTML = "Hazardous";
			}

			//pm_aqi
			if (response.PM10.aqi >= 0 && response.PM10.aqi <= 50) {
				pm_aqi.innerHTML = "Good";
			}
			if (response.PM10.aqi > 50 && response.PM10.aqi <= 100) {
				pm_aqi.innerHTML = "Moderate";
			}
			if (response.PM10.aqi > 100 && response.PM10.aqi <= 150) {
				pm_aqi.innerHTML = "Unhealthy";
			}
			if (response.PM10.aqi > 150 && response.PM10.aqi <= 200) {
				pm_aqi.innerHTML = "Unhealthy";
			}
			if (response.PM10.aqi > 200 && response.PM10.aqi <= 300) {
				pm_aqi.innerHTML = "Very Unhealthy";
			}
			if (response.PM10.aqi > 300) {
				pm_aqi.innerHTML = "Hazardous";
			}


		})
		.catch(err => console.error(err));

}

submit.addEventListener('click', (e) => {
	e.preventDefault()
	getAQI(city.value);
})

