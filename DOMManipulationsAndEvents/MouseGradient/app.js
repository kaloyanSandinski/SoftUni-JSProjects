function attachGradientEvents() {
    let element = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    element.addEventListener('mousemove', resultFromMovingIn);
    element.addEventListener('mouseout', resultFromMovingOut)

    function resultFromMovingIn(event) {
        let percentage = event.offsetX / (event.target.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        resultElement.textContent = `${percentage}%`;
    }

    function resultFromMovingOut(event) {
        resultElement.textContent = '';
    }
}