function updatePrice() {
    const hsdPriceSlider = document.getElementById('hsdPrice');
    const hsdPriceLabel = document.getElementById('hsdPriceLabel');
    const hsdPriceGoal = document.getElementById('hsdPriceGoal').checked;

    if (!hsdPriceGoal) {
        hsdPriceLabel.textContent = hsdPriceSlider.value;
    }
    calculateSummary();
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

function calculateSummary() {
    const units = parseInt(document.getElementById('totalUnits').value) || 0;
    const capitalExpenses = parseFloat(document.getElementById('capitalExpenses').value) || 0;
    const hsdPrice = parseFloat(document.getElementById('hsdPrice').value) || 0;
    const mrr = units * hsdPrice;
    const capCostPerUnit = units > 0 ? (capitalExpenses / units).toFixed(2) : 0;

    document.getElementById('mrr').textContent = mrr.toFixed(2);
    document.getElementById('capCostPerUnit').textContent = capCostPerUnit;
}

document.addEventListener('DOMContentLoaded', () => {
    updatePrice();
    updateTerm();
    calculateSummary();
});
