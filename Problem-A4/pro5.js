function monthlySavings(arr, livingCost) {
  let savemoney = 0;
  bankText = 0.2;
  if (
    Array.isArray(arr) ||
    typeof livingCost === "number" ||
    Number.isNaN(livingCost)
  ) {
    for (const saveing of arr) {
      if (saveing >= 3000) {
        let tax = saveing * 0.2;
        savemoney += saveing - tax;
      } else {
        savemoney += saveing;
      }
    }

    const money = savemoney - livingCost;
    if (money >= 0) {
      return money;
    } else {
      return "earn more";
    }
  } else {
    return "Invalid Input";
  }
}

console.log(monthlySavings(100, [900, 2700, 3400]));
