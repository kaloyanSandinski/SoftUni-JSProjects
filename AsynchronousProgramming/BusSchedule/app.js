function solve() {
    let firstStop = 'depot';
    let nextStop = '';
    let infoField = document.querySelector('#info span');
    let departButton = document.querySelector('#depart');
    let arriveButton = document.querySelector('#arrive');

    async function depart(event) {
        let url = ` http://localhost:3030/jsonstore/bus/schedule/${firstStop}`;
        const response = await fetch(url);
        const data = await response.json();
        infoField.textContent = `Next stop ${data.name}`;
        firstStop = data.name;
        nextStop = data.next;
        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    function arrive() {
        infoField.textContent = `Arriving at ${firstStop}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
        firstStop = nextStop;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();