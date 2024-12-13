function calculateMoney(ticketSale) {
  if (0 <= ticketSale) {
    let totalIncome = ticketSale * 120 - (500 + 8 * 50);
    return totalIncome;
  } else {
    return "Invalid Number";
  }
}

const perTicket = 93;
const result = calculateMoney(perTicket);
console.log(result);
