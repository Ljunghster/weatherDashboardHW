    fetch('https://api.openweathermap.org/data/2.5/weather?id=${document.getElementById(weather).value}&appid=a7ba34611b0e3462cd66466a1b5d8fc6')
        .then(r => r.json())
        .then(weather => {
            document.getElementById('weather').innerHTML = `
            <h1>${weather.temperature.getElementById('')}</h1>
            `
        })
        .catch(e => console.log(e))
