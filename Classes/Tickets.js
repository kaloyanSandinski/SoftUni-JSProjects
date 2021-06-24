function ticketsData(inputArrOfTickets, criteria) {
    let data = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    inputArrOfTickets.forEach(currTicket => {
        currTicket = currTicket.split('|');
        data.push(new Ticket(currTicket[0], currTicket[1], currTicket[2]));
    });


    function compareTo(a, b, passedCriteria) {
        if (typeof a[passedCriteria] === 'string') {
            return a[passedCriteria].localeCompare(b[passedCriteria]);
        } else {
            return a[passedCriteria] - b[passedCriteria];
        }
    }
    data = data.sort((a, b) => compareTo(a, b, criteria));

    return data;
}

console.log(ticketsData(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'));