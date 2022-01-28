function Calc(operation, a, b) {
  const OPERATIONS = {
    sum: a + b,
    sub: a - b,
    div: a / b,
    multi: a * b,
    rem: a % b,
    pow: a ** b,
  };

  let result;
  let isFullData =
    operation !== undefined && a !== undefined && b !== undefined;
  let isDivisionByZero =
    (operation === "div" && b === 0) || (operation === "rem" && b === 0);
  let isNotTypeNumber = typeof a !== "number" || typeof b !== "number";
  if (!isFullData) {
    console.log("Error!!! Вы ввели не все данные");
    return;
  } else if (isNotTypeNumber) {
    console.log("Error!!! Вы ввели не число");
    return;
  } else if (isDivisionByZero) {
    console.log("Error!!! На 0 делить нельзя");
    return;
  } else {
    result =
      OPERATIONS[operation] !== undefined
        ? OPERATIONS[operation]
        : "unknown operation";
  }
  console.log(result);
}

Calc("multi", 4, 6);
Calc("rem", 10, 6);
Calc("sum", 4, 6);
Calc("sub", 4, 3);
Calc("div", 4, 0);
Calc("div", 4, 2);
Calc("pow", 4, 9);
Calc("pw", 4, 9);
Calc(4, 9);
Calc(9);
Calc();
