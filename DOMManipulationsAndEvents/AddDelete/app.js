function addItem() {
    let addedItem = document.createElement('li');
    let items = document.getElementById('items');
    let textToAdd = document.getElementById('newItemText');
    addedItem.textContent = textToAdd.value;
    textToAdd.value = '';
    let deleteItem = document.createElement('a');
    deleteItem.href = '#';
    deleteItem.textContent = '[Delete]';
    addedItem.appendChild(deleteItem);
    items.appendChild(addedItem);

    deleteItem.addEventListener('click', removingItem);

    function removingItem() {
        items.removeChild(addedItem);
    }
}