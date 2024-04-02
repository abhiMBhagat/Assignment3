  // Get form elements
  const form = document.querySelector("form");
  const taxableIncomeInput = document.querySelector('input[name="taxableIncome"]');
  const incomeTaxOwedInput = document.querySelector('input[name="incomeTaxOwed"]');

  // Function to calculate the income tax owed
  function calculateIncomeTax() {
    const taxableIncome = Math.round(parseFloat(taxableIncomeInput.value));

    if (isNaN(taxableIncome) || taxableIncome < 0) {
      alert("Please enter a valid taxable income.");
      return;
    }

    const incomeTaxOwed = 0.15 * taxableIncome;

    incomeTaxOwedInput.value = incomeTaxOwed.toFixed(2);
  }

  // Add event listener to the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateIncomeTax();
  });