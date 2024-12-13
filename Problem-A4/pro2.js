function checkName(name) {
  if (
    typeof name !== "number" &&
    typeof name !== "undefined" &&
    typeof name !== NaN &&
    !Array.isArray(name)
  ) {
    const names = name.toLowerCase();
    const splitNames = names.slice(-1);
    if (
      splitNames === "a" ||
      splitNames === "y" ||
      splitNames === "i" ||
      splitNames === "e" ||
      splitNames === "o" ||
      splitNames === "u" ||
      splitNames == "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
}

const input = "hello";
const result = checkName(input);
console.log(result);
