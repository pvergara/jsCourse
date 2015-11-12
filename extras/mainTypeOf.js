var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22T14:55:00.000+0000",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23T10:42:00.000+0000",
        city: "Los Angeles"
    },
};

flight.status = 'overdue';

console.log("typeof flight.number: {0}".format(typeof flight.number));
console.log("typeof flight.status: {0}".format(typeof flight.status));
console.log("typeof flight.arrival: {0}".format(typeof flight.arrival));
console.log("typeof flight.manifest: {0}".format(typeof flight.manifest));

console.log("typeof flight.constructor: {0}".format(typeof flight.constructor));
console.log("typeof flight.toString: {0}".format(typeof flight.toString));

console.log("flight.hasOwnProperty('number'): {0}".format(flight.hasOwnProperty('number')));
console.log("flight.hasOwnProperty('constructor'): {0}".format(flight.hasOwnProperty('constructor')));
