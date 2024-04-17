

// Function to calculate tax based on form inputs
function calculateTax(event) {
    event.preventDefault();

    // Validate numeric input fields and display error icons if needed
    const inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(inputField => {
        
        const inputValue = inputField.value.trim();
        const isValid = !isNaN(parseFloat(inputValue)) && isFinite(inputValue);

        if (!isValid) {
            const errorIcon = inputField.nextElementSibling;
            errorIcon.style.display = 'inline';
        } else {
            const errorIcon = inputField.nextElementSibling;
            errorIcon.style.display = 'none';
        }
    });

    const age = document.getElementById('age').value;

    if (!age) {
        alert('Please select an age group.');
        return;
    }

    let income = parseFloat(document.getElementById('income').value) || 0;
    let extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    let deductions = parseFloat(document.getElementById('deductions').value) || 0;

    let taxableIncome = (income + extraIncome - deductions) - 8;
    taxableIncome = taxableIncome > 0 ? taxableIncome : 0;

    let taxRate = 0;
    if (age === '<40') {
        taxRate = 0.3;
    } else if (age === '40-60') {
        taxRate = 0.4;
    } else if (age === '60+') {
        taxRate = 0.1;
    }

    const taxAmount = (taxableIncome * taxRate).toFixed(2);

    // Display tax calculation result in the modal
    const taxAmountDisplay = document.getElementById('taxAmount');
    taxAmountDisplay.textContent = `Your calculated tax amount: ${taxAmount} Lakhs`;
    document.getElementById('resultModal').style.display = 'block';
}

// Function to close the result modal
function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}
