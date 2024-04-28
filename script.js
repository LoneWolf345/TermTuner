function calculateSummary() {
    const units = parseInt(document.getElementById('totalUnits').value) || 0;
    const capitalExpenses = parseFloat(document.getElementById('capitalExpenses').value) || 0;
    const hsdPrice = parseFloat(document.getElementById('hsdPrice').value) || 0;
    const mrr = units * hsdPrice;
    const capCostPerUnit = units > 0 ? (capitalExpenses / units).toFixed(2) : 0;
    
    document.getElementById('mrr').textContent = formatNumber(mrr.toFixed(2));
    document.getElementById('capCostPerUnit').textContent = formatNumber(capCostPerUnit);

    // Add simplified placeholders for IRR, NPV, and Payback Period
    document.getElementById('irr').textContent = calculateIRR();  // Assuming you implement this
    document.getElementById('npv').textContent = calculateNPV();  // Assuming you implement this
    document.getElementById('paybackPeriod').textContent = calculatePaybackPeriod();  // Assuming you implement this
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateIRR() {
    // Placeholder for IRR calculation
    return "TBD";
}

function calculateNPV() {
    // Placeholder for NPV calculation
    return "TBD";
}

function calculatePaybackPeriod() {
    // Placeholder for payback period calculation
    return "TBD";
}

document.addEventListener('DOMContentLoaded', () => {
    updatePrice();
    updateTerm();
    calculateSummary();
});
