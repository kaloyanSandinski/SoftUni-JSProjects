function solve() {
    let productsInChart = [];
    let totalAmount = 0;

    let textFieldChart = document.querySelector('textarea');
    let allAddButtons = document.querySelectorAll('.add-product');

    let checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', calculateAmountOfMoney);

    for (const button of allAddButtons) {
        button.addEventListener('click', addProductToTheChart);
    }

    function addProductToTheChart(e) {
        let productNode = e.target.parentNode.parentNode;
        let productName = productNode.querySelector('.product-title').textContent;
        let productPrice = Number(productNode.querySelector('.product-line-price').textContent);
        totalAmount += productPrice;
        productsInChart.push({ Name: productName, Price: productPrice });
        textFieldChart.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }

    function calculateAmountOfMoney(e) {
        let uniqueProductNames = [];
        uniqueProductNames = [...new Set(productsInChart.map(x => x.Name))];
        textFieldChart.value += `You bought ${uniqueProductNames.join(', ')} for ${totalAmount.toFixed(2)}.`;
        for (const addButton of allAddButtons) {
            addButton.removeEventListener('click', addProductToTheChart);
        }
        checkoutButton.removeEventListener('click', calculateAmountOfMoney);
    }
}