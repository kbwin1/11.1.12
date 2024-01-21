let years = document.getElementById("loan-years")
let amount = document.getElementById("loan-amount")
let rate =  document.getElementById("loan-rate")
let monthlyPayment =  document.getElementById("monthly-payment")


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      calculateMonthlyPayment();
      update();
      updateMonthly();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
    
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 20000
  document.getElementById("loan-years").value = 10
  document.getElementById("loan-rate").value = 8

  const i = (rate.value / 100) / 12;
  const n = years.value * 12
  const p = amount.value
  
  let monthlyPayment = (i * p) /
  (1 - ((1 + i)** -n))
  document.getElementById("monthly-payment").innerText = monthlyPayment.toFixed(2)

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  return calculateMonthlyPayment()
  
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment() {
const i = (rate.value / 100) / 12;
const n = years.value * 12
const p = amount.value
let monthlyPayment = (i * p) /
(1 - ((1 + i)** -n))
return monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
  document.getElementById("monthly-payment").innerText = update()
  
}
