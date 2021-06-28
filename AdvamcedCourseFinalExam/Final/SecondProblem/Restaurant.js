class Restaurant {
    stockProducts = {};
    menu = {};
    history = [];
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
    }

    loadProducts(products) {
        let output = '';
        products.forEach(product => {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            product = product.split(' ');
            if (this.budgetMoney >= productTotalPrice) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName][1] += productQuantity;
                }
                this.stockProducts[productName] = product;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                output += `Successfully loaded ${productQuantity} ${productName}`;
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                output += `There was not enough money to load ${productQuantity} ${productName}`;
            }
            output += '\n';
        });
        return output;
    }

    addToMenu(meal, neededProducts, price) {
        let output = '';
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products: neededProducts, price: price };
            if (Object.keys(this.menu).length < 1 || Object.keys(this.menu).length > 1) {
                output += `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            } else {
                output += `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
        } else {
            output += `The ${meal} is already in the our menu, try something different.`;
        }
        return output;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length < 1) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let allMeals = '';
            for (const key in this.menu) {
                allMeals += `${key} - $ ${this.menu[key].price}\n`;
            }
            return allMeals;
        }
    }

    makeTheOrder(meal) {
        let isThereAMeal = false;
        let haveProducts = true;
        let output = '';
        for (const key in this.menu) {
            if (this.menu[key] == meal) {
                isThereAMeal = true;
                this.menu[key].products.forEach(product => {
                    if (!this.stockProducts.hasOwnProperty(product)) {
                        if (!this.stockProducts[product[0]][1] >= product[1]) {
                            haveProducts = false;
                        }
                    }
                });
            }
        }
        if (isThereAMeal) {
            output += `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            if (!haveProducts) {
                output += `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            } else {
                output += `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
                this.menu[meal].products.forEach(product => {
                    product = product.split(' ');
                    if (this.stockProducts[product[0]][1] >= product[1]) {
                        this.stockProducts[product[0]][1] -= product[1];
                    }

                });
                this.budgetMoney += this.menu[meal].price;
            }
        }
        return output;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));