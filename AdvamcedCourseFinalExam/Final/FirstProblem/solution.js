window.addEventListener('load', solution);

function solution() {
    let submitButton = document.querySelector('#block #form #submitBTN');
    let fields = Array.from(document.querySelectorAll('#block #form div'));
    let infoPreview = document.querySelector('.preview #infoPreview');
    let inputFields = [];
    fields.forEach(field => {
        inputFields.push(field.querySelector('input'));
    });

    submitButton.addEventListener('click', e => {
        e.preventDefault();
        if (inputFields[0] != '' && inputFields[1] != '') {
            inputFields.forEach(field => {
                let listItem = document.createElement('li');
                listItem.textContent = `${field.parentNode.querySelector('label').textContent} ${field.value}`;
                infoPreview.appendChild(listItem);
                field.value = '';
            });

            e.target.disabled = true;
            let editBtn = document.querySelector('#information #editBTN');
            let contionueBtn = document.querySelector('#information #continueBTN');
            editBtn.disabled = false;
            contionueBtn.disabled = false;
            editBtn.addEventListener('click', goBackForEditing);
            contionueBtn.addEventListener('click', reservationComplete);
        }
    })

    function goBackForEditing(e) {
        let allLists = Array.from(infoPreview.querySelectorAll('li'));
        for (let i = 0; i < fields.length; i++) {
            let startIndex = allLists[i].textContent.indexOf(':');
            let valueToBeEdited = allLists[i].textContent.slice(startIndex + 2);
            fields[i].querySelector('input').value = valueToBeEdited;
            allLists[i].remove();
        }
        e.target.disabled = true;
        document.querySelector('#information #continueBTN').disabled = true;
        submitButton.disabled = false;
    }

    function reservationComplete(e) {
        let block = document.querySelector('#block');
        block.innerHTML = '';
        let finalMsg = document.createElement('h3');
        finalMsg.textContent = "Thank you for your reservation!";
        block.appendChild(finalMsg);
    }
}