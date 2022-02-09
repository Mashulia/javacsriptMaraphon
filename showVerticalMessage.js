function showVerticalMessage(str) {
  const MAX_LENGTH = 10;
  const FIRST_LETTER = "М";
  const UpperLetter = str.slice(0, 1).toUpperCase();
  let newString = "";

  if (UpperLetter === FIRST_LETTER) {
    newString = UpperLetter + str.slice(1);
  } else newString = str;

  for (let char of newString.slice(0, MAX_LENGTH)) {
    console.log(char);
  }
}

showVerticalMessage("марафоныоыорпgjfgkk");
