// Get form elements
const form = document.querySelector("form");
const arrivalDateInput = document.querySelector('input[name="Arrival date:"]');
const nightsInput = document.querySelector('input[placeholder="two"]');
const adultsInput = document.querySelector('#Adults');
const childrensInput = document.querySelector('#Childrens');
const nameInput = document.querySelector("input[placeholder='Anne Boehm']");
const emailInput = document.querySelector("input[type='email']");
const phoneInput = document.querySelector("input[placeholder='9999999999']");

// Function to show an alert with the current date
function showDate() {
  alert("!!! Congratulations, your booking is confirmed at   " + arrivalDateInput.value);
}

// Function to reset the form fields
function resetForm() {
  arrivalDateInput.value = "";
  nightsInput.value = "";
  adultsInput.value = "";
  childrensInput.value = "";
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
}

// Add event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  showDate();
  resetForm();
});

// Add event listener to reset the form
document.querySelector("input[type='reset']").addEventListener("click", resetForm);