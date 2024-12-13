function deleteInvalids(array) {
  let arr = [];
  if (Array.isArray(array)) {
    for (const duplicate of array) {
      if (typeof duplicate === "number" && !Number.isNaN(duplicate)) {
        arr.push(duplicate);
      }
    }
  } else {
    return "Invalid Array";
  }
  console.log(arr);
}

const array = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const result = deleteInvalids(array);
console.log(result);
