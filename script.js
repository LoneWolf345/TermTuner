function updatePrice() {
    const hsdPriceSlider = document.getElementById('hsdPrice');
    const hsdPriceLabel = document.getElementById('hsdPriceLabel');
    const hsdPriceGoal = document.getElementById('hsdPriceGoal').checked;
    const previousPrice = parseFloat(hsdPriceLabel.textContent.replace(/,/g, ''));

    if (!hsdPriceGoal) {
        hsdPriceLabel.textContent = formatNumber(hsdPriceSlider.value);
    }
    
    // Adjust the term length based on the price change, if not locked as a goal
    if (!document.getElementById('termLengthGoal').checked) {
        const priceChange = hsdPriceSlider.value - previousPrice;
        const termAdjustment = -Math.floor(priceChange / 2);
        if (termAdjustment !== 0) {
            const termLengthSlider = document.getElementById('termLength');
            termLengthSlider.value = parseInt(termLengthSlider.value) + termAdjustment;
            updateTermLabel(termLengthSlider.value);
        }
    }

    calculateSummary();
}

function updateTerm() {
    const termLengthSlider = document.getElementById('termLength');
    const termLengthGoal = document.getElementById('termLengthGoal').checked;
    const previousTerm = parseInt(document.getElementById('termLengthLabel').textContent.replace(/,/g, ''));
    
    if (!termLengthGoal) {
        updateTermLabel(termLengthSlider.value);
    }

    // Adjust the price based on the term length change, if not locked as a goal
    if (!document.getElementById('hsdPriceGoal').checked) {
        const termChange = termLengthSlider.value - previousTerm;
        const priceAdjustment = -termChange * 2;
        if (priceAdjustment !== 0) {
            const hsdPriceSlider = document.getElementById('hsdPrice');
            hsdPriceSlider.value = parseInt(hsdPriceSlider.value) + priceAdjustment;
            updatePriceLabel(hsdPriceSlider.value);
        }
    }

    calculateSummary();
}

function updatePriceLabel(value) {
    const hsdPriceLabel = document.getElementById('hsdPriceLabel');
    hsdPriceLabel.textContent = formatNumber(value);
}

function updateTermLabel(value) {
    const termLengthLabel = document.getElementById('termLengthLabel');
    termLengthLabel.textContent = formatNumber(value);
}

function calculateSummary() {
    const units = parseInt(document.getElementById('totalUnits').value) || 0;
    const capitalExpenses = parseFloat(document.getElementById('capitalExpenses').value) || 0;
    const hsdPrice = parseFloat(document.getElementById('hsdPrice').value) || 0;
    const mrr = units * hsdPrice;
    const capCostPerUnit = units > 0 ? (capitalExpenses / units).toFixed(2) : 0;

    document.getElementById('mrr').textContent = formatNumber(mrr.toFixed(2));
    document.getElementById('capCostPerUnit').textContent = formatNumber(capCostPerUnit);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener('DOMContentLoaded', () => {
    updatePrice();
    updateTerm();
    calculateSummary();
});
