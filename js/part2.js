// Get form elements
const form = document.querySelector("form");
const changeAmountInput = document.querySelector('input[name="changeAmount"]');
const quartersInput = document.querySelector('input[name="quarters"]');
const dimesInput = document.querySelector('input[name="dimes"]');
const nickelsInput = document.querySelector('input[name="nickels"]');
const penniesInput = document.querySelector('input[name="pennies"]');

// Function to calculate Quarters, Dimes, Nickels, and Pennies
function calculate() {
  const changeAmount = Math.round(parseFloat(changeAmountInput.value));

  if (isNaN(changeAmount) || changeAmount < 0 || changeAmount > 99) {
    alert("Please enter a valid amount between 0 and 99.");
    return;
  }

  const quarters = Math.floor(changeAmount / 25);
  const remainingAmount = changeAmount % 25;
  const dimes = Math.floor(remainingAmount / 10);
  const remainingAmount2 = remainingAmount % 10;
  const nickels = Math.floor(remainingAmount2 / 5);
  const penniesValue = remainingAmount2 % 5;

  quartersInput.value = quarters;
  dimesInput.value = dimes;
  nickelsInput.value = nickels;
  penniesInput.value = penniesValue;
}

// Add event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculate();
});