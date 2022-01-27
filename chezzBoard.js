for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    console.log("_#_#_#_#");
  } else {
    console.log("#_#_#_#_");
  }
}
console.log("---------------------");
let n = 8;
let chezzBoard = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n / 2; j++) {
    if (i % 2 === 0) {
      chezzBoard += "#_";
    } else {
      chezzBoard += "_#";
    }
  }
  chezzBoard += "\n";
}
console.log(chezzBoard);
