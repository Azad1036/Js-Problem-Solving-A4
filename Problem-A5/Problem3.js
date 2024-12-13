function checkDigitsInName(name) {
  if (typeof name === "string") {
    for (const valid of name) {
      if (!isNaN(valid)) {
        return true;
      }
    }
    return false;
  } else {
    return "Invalid input";
  }
}

const input = "Raj";

const result = checkDigitsInName(input);
console.log(result);
