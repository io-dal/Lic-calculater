function calculatePremium() {
    const sumAssured = parseFloat(document.getElementById('sumAssured').value);
    const policyTerm = parseInt(document.getElementById('policyTerm').value);
    const age = parseInt(document.getElementById('age').value);
    const policyType = document.getElementById('policyType').value;

    // Calculation logic
    let basePremium = sumAssured / (policyTerm * 12);
    const modifiers = {
        term: 0.75,
        endowment: 1.0,
        moneyback: 1.25
    };
    const ageFactor = 1 + ((Math.min(Math.max(age, 18), 60) - 25) * 0.008);
    const premium = basePremium * modifiers[policyType] * ageFactor;

    // Display result
    document.getElementById('result').innerHTML = `
        <h3>Estimated Monthly Premium: ₹${premium.toFixed(2)}</h3>
        <p>Based on ${policyType.replace(/([A-Z])/g, ' $1')} Plan</p>
    `;
}
