function calculateFinalScore(obj) {
  // Value Store
  let isFFamilyTotal = obj.isFFamily === true;
  let totalNumber = 0;

  // Validation Data Type
  if (
    typeof obj !== "number" &&
    typeof obj !== "undefined" &&
    typeof obj !== NaN &&
    typeof obj !== "string" &&
    !Array.isArray(obj)
  ) {
    // Validation Check Object Value
    if (obj.testScore <= 50 && obj.schoolGrade <= 30) {
      // Store Value
      let testScoreTotal = obj.testScore;
      let schoolGradeTotal = obj.schoolGrade;
      const total = testScoreTotal + schoolGradeTotal;
      totalNumber = total + totalNumber;
      if (isFFamilyTotal) {
        totalNumber = totalNumber + 20;
      }
      // More Than 80 or eqal
      if (totalNumber >= 80) {
        return true;
      }
    }

    // less than 80
    else {
      return false;
    }
  } else {
    return "Invalid input";
  }
}

const admisionResult = [10];

const result = calculateFinalScore(admisionResult);
console.log(result);
