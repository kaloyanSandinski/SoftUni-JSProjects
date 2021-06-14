function validate() {
    let inputText = document.querySelector('#email');
    inputText.addEventListener('change', function(event) {
        let matchedElements = inputText.value.match(/([a-z]+)@([a-z]+).([a-z]+)/);
        if (matchedElements != null) {
            event.currentTarget.classList.remove('error');
        } else {
            event.currentTarget.classList.add('error');
        }

    });
}