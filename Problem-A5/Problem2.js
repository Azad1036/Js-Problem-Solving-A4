function sendNotification(email) {
  // Validation Sting or Not
  if (typeof email === "string" && email !== "") {
    // Find @ Value
    const indexFind = email.indexOf("@");
    // Split Tow Part Username & Domin
    const userDomin = email.split("@");
    // Count @ Value in String
    const divided = userDomin.length - 1;

    // Validation Value
    if (indexFind !== -1 && divided === 1) {
      const sendNotification =
        userDomin[0] + " " + "sent you an email from" + " " + userDomin[1];
      return sendNotification;
    }
  } else {
    return "Invalid Email";
  }
}

const input = "azad255@outlook.com";
const result = sendNotification(input);
console.log(result);
