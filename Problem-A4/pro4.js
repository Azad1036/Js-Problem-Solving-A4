function password(obj) {
  const name = obj.name;
  const birth = obj.birthYear;
  const birthYear = birth.toString();
  const siteName = obj.siteName;

  if (birthYear.length === 4 && name && siteName && birthYear) {
    const capitalize = siteName.split("")[0].toUpperCase();
    const splitCaplaize = siteName.substring(1);
    const joinString = capitalize + splitCaplaize;
    const output = joinString + "#" + name + "@" + birthYear;
    return output;
  } else {
    return "Invalid";
  }
}

const obj = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
console.log(password(obj));
