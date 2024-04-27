function updatePrice() {
    const hsdPriceSlider = document.getElementById('hsdPrice');
    const hsdPriceLabel = document.getElementById('hsdPriceLabel');
    const hsdPriceGoal = document.getElementById('hsdPriceGoal').checked;

    if (!hsdPriceGoal) {
        hsdPriceLabel.textContent = hsdPriceSlider.value;
    }
}

function updateTerm() {
    const termLengthSlider = document.getElementById('termLength');
    const termLengthLabel = document.getElementById('termLengthLabel');
    const termLengthGoal = document.getElementById('termLengthGoal').checked;
    const hsdPriceGoal = document.getElementById('hsdPriceGoal').checked;

    termLengthLabel.textContent = termLengthSlider.value;

    if (!hsdPriceGoal && !termLengthGoal) {
        const adjustment = (termLengthSlider.value - 5) * 2;
        document.getElementById('hsdPrice').value = 30 + adjustment;
        updatePrice();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updatePrice();
    updateTerm();
});
