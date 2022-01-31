function showVerticalMessage(str) {
  let UpperLetter = str.slice(0, 1).toUpperCase();
  let newString = "";

  if (UpperLetter === "М") {
    newString = UpperLetter + str.slice(1);
  } else newString = str;

  if (newString.length > 10) {
    for (let char of newString.slice(0, 10)) {
      console.log(char);
    }
  } else {
    for (let char of newString) {
      console.log(char);
    }
  }
}

showVerticalMessage('марафон');
