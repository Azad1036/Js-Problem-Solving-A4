function waitingTime(waitingTimes, serialNumber) {
  // Value Store
  let countAvarageTime = 0;

  // Chaeck Data Type
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  // Validation SerralNumber Number bigger WattingTiems
  if (serialNumber <= waitingTimes.length) {
    return "Invalid Input";
  }

  // loop
  for (const avgTime of waitingTimes) {
    countAvarageTime += avgTime;
  }
  let avg = countAvarageTime / waitingTimes.length;
  let avgTimes = Math.round(avg);
  let serialTimeess = serialNumber - waitingTimes.length - 1;
  let total = avgTimes * serialTimeess;
  return total;
}

let test = [13, 2];
let serial = 6;
const result = waitingTime(test, serial);
console.log(result);
