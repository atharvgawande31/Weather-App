
            let apiKey = "5743f7c1ea3ce541db80ad520c7738e7"
            let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
            let cityInput = document.querySelector(".search input");
            let searchBtn = document.querySelector(".search button");

            async function checkWeather(cityName) {
                let response = await fetch(apiURL + cityName + `&appid=${apiKey}`);
                let data = await response.json()
                let rain = data.clouds.all
                let tempr = data.main.temp

                function changeImg() {
                    if (tempr <= 0) {
                        document.getElementsByTagName("img")[0].src = "snow.png";
                    }
                    else if (rain <= 50) {
                        document.getElementsByTagName("img")[0].src = "clear.png";
                    } else if (rain <= 100) {
                        document.getElementsByTagName("img")[0].src = "clouds.png";
                    } else if (rain <= 150) {
                        document.getElementsByTagName("img")[0].src = "mist.png";
                    } else if (rain <= 200) {
                        document.getElementsByTagName("img")[0].src = "drizzle.png";
                    } else {
                        document.getElementsByTagName("img")[0].src = "rain.png";
                    }

                }

                changeImg()
                console.log(data);
                console.log(rain)

                document.querySelector(".cityName").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = data.main.temp + " °C" ;
                document.querySelector(".hPercentage").innerHTML = data.main.humidity;
                document.querySelector(".wSpeed").innerHTML = data.wind.speed + "km/h";
            }

            searchBtn.addEventListener("click", () => {
                checkWeather(cityInput.value);
            })
