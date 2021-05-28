function solve(townsArr) {
    let allCitys = [];
    let City = class {
        constructor(name, population) {
            this.name = name;
            this.population = population;
        }
    }

    for (const city of townsArr) {
        let cityData = city.split(' <-> ');
        const currCity = new City(cityData[0], Number(cityData[1]));
        if (allCitys.find(x => x.name === cityData[0]) != null) {
            let findCity = allCitys.find(x => x.name === cityData[0]);
            findCity.population += currCity.population;
        } else {
            allCitys.push(currCity);
        }
    }

    allCitys.forEach(element => {
        console.log(`${element.name} : ${element.population}`)
    });
}

/*
function solve(townsArr) {
    const towns = {};
    for (let townAsString of townsArr) {
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);
        if (towns[name] != undefined) {
            population += towns[name];
        }
        towns[name] = population;
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
*/

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);