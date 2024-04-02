// Get form elements
const form = document.getElementById("salestax-form");
const subtotalInput = document.querySelector('input[name="subtotal"]');
const taxRateInput = document.querySelector('input[name="taxrate"]');
const salesTaxInput = document.querySelector('input[name="salestax"]');
const totalInput = document.querySelector('input[name="total"]');

// Function to calculate Sales Tax and Total
function calculate() {
  const subtotal = parseFloat(subtotalInput.value);
  const taxRate = parseFloat(taxRateInput.value);

  if (isNaN(subtotal) || isNaN(taxRate)) {
    alert("Please enter valid Subtotal and Tax Rate.");
    return;
  }

  const salesTax = subtotal * (taxRate / 100);
  const total = subtotal + salesTax;

  salesTaxInput.value = salesTax.toFixed(2);
  totalInput.value = total.toFixed(2);
}

// Add event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculate();
});

// Add event listener to reset the form
form.addEventListener("reset", () => {
  salesTaxInput.value = "";
  totalInput.value = "";
});