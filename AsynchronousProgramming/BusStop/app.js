async function getInfo() {
    let stopIdField = document.querySelector('#stopId');
    let stopNameDiv = document.querySelector('#stopName');
    let ulBuses = document.querySelector('#buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdField.value}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status == 404) {
            throw new Error();
        }
        stopNameDiv.textContent = data.name;
        for (const busId in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${data.buses[busId]}`;
            ulBuses.appendChild(li);
        }
    } catch (error) {
        ulBuses.innerHTML = '';
        stopNameDiv.textContent = 'Error';
    }
}