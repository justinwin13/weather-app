window.addEventListener('load', ()=> {
    let long;
    let lat;
    let location = document.querySelector(".location-timezone");
    let icon = document.querySelector(".icon");
    let temperature = document.querySelector(".temperature-degree");
    let descriptionMain = document.querySelector(".weather-description-main");
    let description = document.querySelector(".weather-description");
    let lowTemp = document.querySelector(".low");
    let highTemp = document.querySelector(".high");
    let feelsLike = document.querySelector(".feels-like");
    let input = document.querySelector(".input");
    let button = document.querySelector(".search-button");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const apiKey = "e34a5d6f4b54cd4ca1d6f700603c0d48";
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;
            console.log(api);
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
                
                icon.setAttribute("src", iconLink);
                location.textContent = data.name;
                temperature.textContent = data.main.temp;
                descriptionMain.textContent = data.weather[0].main;
                description.textContent = data.weather[0].description;
                lowTemp.append(data.main.temp_min);
                lowTemp.append("F");
                highTemp.append(data.main.temp_max);
                highTemp.append("F");
                feelsLike.append(data.main.feels_like);
                feelsLike.append("F");

            });
        });
    }

    button.addEventListener("click", ()=> {
        let cityName = input.value;
        console.log(cityName);
        const apiKey = "e34a5d6f4b54cd4ca1d6f700603c0d48";
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;

        lowTemp.textContent = "Low: ";
        highTemp.textContent = "High: ";
        feelsLike.textContent = "Feels like: ";
        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
                
                icon.setAttribute("src", iconLink);
                location.textContent = data.name;
                temperature.textContent = data.main.temp;
                descriptionMain.textContent = data.weather[0].main;
                description.textContent = data.weather[0].description;
                lowTemp.append(data.main.temp_min);
                lowTemp.append("F");
                highTemp.append(data.main.temp_max);
                highTemp.append("F");
                feelsLike.append(data.main.feels_like);
                feelsLike.append("F");

            });
        
    })
});