function updatePrice() {
    const hsdPriceSlider = document.getElementById('hsdPrice');
    const hsdPriceLabel = document.getElementById('hsdPriceLabel');
    const hsdPriceGoal = document.getElementById('hsdPriceGoal').checked;
    const termLengthSlider = document.getElementById('termLength');

    if (!hsdPriceGoal) {
        hsdPriceLabel.textContent = formatNumber(hsdPriceSlider.value);
        if (!document.getElementById('termLengthGoal').checked) {
            // Adjust term length based on price change
            const priceChange = hsdPriceSlider.value - 30; // Initial price 30
            const termAdjustment = Math.floor(priceChange / -2);
            termLengthSlider.value = 5 + termAdjustment; // Initial term 5 years
            document.getElementById('termLengthLabel').textContent = termLengthSlider.value;
        }
    }
    calculateSummary();
}

function updateTerm() {
    const termLengthSlider = document.getElementById('termLength');
    const termLengthLabel = document.getElementById('termLengthLabel');
    const termLengthGoal = document.getElementById('termLengthGoal').checked;
    const hsdPriceSlider = document.getElementById('hsdPrice');

    termLengthLabel.textContent = termLengthSlider.value;

    if (!termLengthGoal && !document.getElementById('hsdPriceGoal').checked) {
        // Adjust price based on term length change
        const termChange = termLengthSlider.value - 5; // Initial term 5 years
        const priceAdjustment = termChange * -2;
        hsdPriceSlider.value = 30 + priceAdjustment; // Initial price 30
        document.getElementById('hsdPriceLabel').textContent = formatNumber(hsdPriceSlider.value);
    }
    calculateSummary();
}

function calculateSummary() {
    const units = parseInt(document.getElementById('totalUnits').value) || 0;
    const capitalExpenses = parseFloat(document.getElementById('capitalExpenses').value) || 0;
    const hsdPrice = parseFloat(document.getElementById('hsdPrice').value) || 0;
    const mrr = units * hsdPrice;
    const capCostPerUnit = units > 0 ? (capitalExpenses / units) : 0;

    document.getElementById('mrr').textContent = formatNumber(mrr.toFixed(2));
    document.getElementById('capCostPerUnit').textContent = formatNumber(capCostPerUnit.toFixed(2));
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener('DOMContentLoaded', () => {
    updatePrice();
    updateTerm();
    calculateSummary();
});
