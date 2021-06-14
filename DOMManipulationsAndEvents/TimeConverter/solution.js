function attachEventsListeners() {
    let allConvertFields = document.getElementsByTagName('div');
    for (const key in allConvertFields) {
        let currButton = allConvertFields[key].children[2];
        currButton.addEventListener('click', converting);
    }

    function converting(event) {
        let currButton = event.target;
        let parent = currButton.parentNode;
        let valueToConvert = 0;
        let days = parent.parentNode.querySelector('#days');
        let hours = parent.parentNode.querySelector('#hours');
        let minutes = parent.parentNode.querySelector('#minutes');
        let seconds = parent.parentNode.querySelector('#seconds');
        if (currButton.id == 'daysBtn') {
            valueToConvert = parent.querySelector('#days').value;
            hours.value = valueToConvert * 24;
            minutes.value = hours.value * 60;
            seconds.value = minutes.value * 60;
        } else if (currButton.id == 'hoursBtn') {
            valueToConvert = parent.querySelector('#hours').value;
            days.value = valueToConvert / 24;
            minutes.value = valueToConvert * 60;
            seconds.value = minutes.value * 60;
        } else if (currButton.id == 'minutesBtn') {
            valueToConvert = parent.querySelector('#minutes').value;
            days.value = valueToConvert / 60 / 24;
            hours.value = days.value * 24;
            seconds.value = hours.value * 60 * 60;
        } else {
            valueToConvert = parent.querySelector('#seconds').value;
            minutes.value = valueToConvert / 60;
            hours.value = minutes.value / 60;
            days.value = hours.value / 24;
        }
    }
}