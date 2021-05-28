function cityTaxes(name, population, treasury) {
    const cityObj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function collectTaxes() {
            this.treasury += (this.population * this.taxRate);
        },
        applyGrowth: function applyGrowth(pecentage) {
            this.population += this.population * pecentage / 100;
        },
        applyRecession: function applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
        },
    };
    return cityObj;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);