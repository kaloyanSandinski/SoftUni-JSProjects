function addItem() {
    let inputText = document.getElementById('newItemText');
    let items = document.getElementById('items');
    let itemToAdd = document.createElement(items.children[0].tagName);
    itemToAdd.textContent = inputText.value;
    items.appendChild(itemToAdd);

    inputText.value = '';
}