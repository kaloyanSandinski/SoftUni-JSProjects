function attachEvents() {
    const getWeatherButton = document.querySelector('#submit');

    getWeatherButton.addEventListener('click', getWeatherInfo);
}

async function getWeatherInfo() {
    let forecastDiv = document.querySelector('#forecast');
    let locationField = document.querySelector('#location').value;
    Array.from(forecastDiv.querySelector('#current').querySelectorAll('div')).forEach((el, i) => {
        i !== 0 ? el.remove() : el;
    });
    Array.from(forecastDiv.querySelector('#upcoming').querySelectorAll('div')).forEach((el, i) => {
        i !== 0 ? el.remove() : el;
    });
    forecastDiv.style.display = 'inline';
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = await response.json();

    try {
        let result = data.find(obj => {
            return obj.name === locationField;
        })
        if (result == undefined) {
            throw new Error();
        } else {
            forecastDiv.querySelector('#current div').textContent = 'Current conditions';
            forecastDiv.querySelector('#upcoming').style.display = 'inline';
            const currentConditions = await getCurrentConditions(result.code);
            const upcomingForecast = await getUppcommingForecast(result.code);

            let forecastsDiv = createDOMElements('div', 'forecasts');
            let spanConditionSymbol = createDOMElements('span', 'condition symbol', getWeatherSymbols(currentConditions.forecast.condition));
            let spanCondition = createDOMElements('span', 'condition');
            spanCondition.appendChild(createDOMElements('span', 'forecast-data', currentConditions.name));
            spanCondition.appendChild(createDOMElements('span', 'forecast-data', `${currentConditions.forecast.low}°/${currentConditions.forecast.high}°`));
            spanCondition.appendChild(createDOMElements('span', 'forecast-data', currentConditions.forecast.condition));
            forecastsDiv.appendChild(spanConditionSymbol);
            forecastsDiv.appendChild(spanCondition);
            forecastDiv.querySelector('#current').appendChild(forecastsDiv);

            let forecastInfoDiv = createDOMElements('div', 'forecast-info');
            upcomingForecast.forecast.forEach(currForecast => {
                let upcomingSpan = createDOMElements('span', 'upcoming');
                upcomingSpan.appendChild(createDOMElements('span', 'symbol', getWeatherSymbols(currForecast.condition)));
                upcomingSpan.appendChild(createDOMElements('span', 'forecast-data', `${currForecast.low}°/${currForecast.high}°`));
                upcomingSpan.appendChild(createDOMElements('span', 'forecast-data', currForecast.condition));
                forecastInfoDiv.appendChild(upcomingSpan);
            });
            forecastDiv.querySelector('#upcoming').appendChild(forecastInfoDiv);
        }
    } catch (error) {
        forecastDiv.querySelector('#current div').textContent = 'Error';
        forecastDiv.querySelector('#upcoming').style.display = 'none';
    }
}

async function getCurrentConditions(code) {
    const codeUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const response = await fetch(codeUrl);
    const data = await response.json();
    return data;
}

async function getUppcommingForecast(code) {
    const codeUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
    const response = await fetch(codeUrl);
    const data = await response.json();

    return data;
}

function getWeatherSymbols(weatherType) {
    let symbol = '';
    if (weatherType == 'Sunny') {
        symbol = '☀';
    } else if (weatherType == 'Partly sunny') {
        symbol = '⛅';
    } else if (weatherType == 'Overcast') {
        symbol = '☁';
    } else if (weatherType == 'Rain') {
        symbol = '☂';
    }
    return symbol;
}

function createDOMElements(elementType, elementClassName, content) {
    let element = document.createElement(elementType);
    element.className = elementClassName;
    element.textContent = content;
    return element;
}

attachEvents();