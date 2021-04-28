function calculateMoneyYouNeed(typeOfFruit, weight, pricePerKilo){
    let moneyNeeded = (weight/1000*pricePerKilo).toFixed(2);
    console.log(`I need $${moneyNeeded} to buy ${(weight/1000).toFixed(2)} kilograms ${typeOfFruit}.`);
}

calculateMoneyYouNeed('orange', 2500, 1.80);