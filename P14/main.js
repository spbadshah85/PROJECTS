// Function to calculate the monthly loan payment
function calculateLoan() {
  
  // Get the loan amount input from the user
  loanAmountValue = document.getElementById("loan-amount").value;

  // Get the interest rate input from the user
  interestRateValue = document.getElementById("interest-rate").value;

  // Get the number of months to repay the loan input from the user
  MonthsToPayValue = document.getElementById("months-to-pay").value;

  // Calculate the interest per month based on the loan amount and interest rate
  interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

  // Calculate the monthly payment by dividing the loan amount by the number of months and adding the interest
  monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

  // Display the calculated monthly payment in the HTML element with id "payment"
  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
