function calculateTax(income, expenses) {
  // Validation input
  if (
    typeof income === "number" &&
    typeof expenses === "number" &&
    income >= 0 &&
    expenses >= 0 &&
    income > expenses
  ) {
    let profit = income - expenses;
    let tax = profit * 0.2;
    return tax;
  } else {
    return "Invalid Input";
  }
}

const result = calculateTax(10000, 3000);
console.log(result);
