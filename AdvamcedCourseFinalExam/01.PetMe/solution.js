function solve() {
    let inputData = Array.from(document.querySelectorAll('#add #container input'));
    let addButton = document.querySelector('#add #container button');
    let adoptionList = document.querySelector('#adoption ul');
    addButton.addEventListener('click', e => {
        e.preventDefault();
        let list = document.createElement('li');
        let pharagraph = document.createElement('p');
        if (!inputData.every(x => x.value)) {
            return;
        }
        if (!Number(inputData[1].value)) {
            return;
        }
        pharagraph.innerHTML = `<strong>${inputData[0].value}</strong> is a <strong>${inputData[1].value}</strong> year old <strong>${inputData[2].value}</strong>`;
        let span = document.createElement('span');
        span.textContent = `Owner: ${inputData[3].value}`;
        button = document.createElement('button');
        button.textContent = 'Contact with owner';
        button.addEventListener('click', e => {
            e.target.parentNode.appendChild(document.createElement('div'));
            e.target.parentNode.querySelector('div').appendChild(document.createElement('input'));
            e.target.parentNode.querySelector('input').placeholder = 'Enter your names';
            e.target.parentNode.querySelector('div').appendChild(document.createElement('button'));
            e.target.parentNode.querySelector('div button').textContent = 'Yes! I take it!';
            e.target.parentNode.querySelector('div button').addEventListener('click', transferPetToNewOwner);
            e.target.remove();
        })
        list.appendChild(pharagraph);
        list.appendChild(span);
        list.appendChild(button);
        adoptionList.appendChild(list);

        inputData.forEach(element => {
            element.value = '';
        });
    });

    function transferPetToNewOwner(e) {
        let listItem = e.target.parentNode.parentNode;
        if (listItem.querySelector('input').value != '') {
            listItem.querySelector('span').textContent = `New Owner: ${listItem.querySelector('input').value}`;
            listItem.querySelector('div').remove();
            listItem.appendChild(document.createElement('button'));
            listItem.querySelector('button').textContent = 'Checked';
            listItem.querySelector('button').addEventListener('click', removeListItem);
            document.querySelector('#adopted ul').appendChild(listItem);
        }
    }

    function removeListItem(e) {
        e.target.parentNode.remove();
    }
}