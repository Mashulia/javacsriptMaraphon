function calc(action, a, b) {
  let result;
  let isFullData = (action !== undefined && a !== undefined && b !== undefined);
  let isDivisionByZero = (action === "div" && b === 0) || (action === "rem" && b === 0);
  let isNotTypeNumber = typeof (a) !== "number" || typeof (b) !== "number";
  if (!isFullData) {
    alert("Error!!! Вы ввели не все данные");
    return;
  } else if (isNotTypeNumber) {
    alert("Error!!! Вы ввели не число");
    return;
  } else if (isDivisionByZero) {
    alert("Error!!! На 0 делить нельзя");
    return;
  }
  else {
    switch (action) {
      case "sum":
        result = a + b;
        break;
      case "sub":
        result = a - b;
        break;
      case "div":
        result = a / b;
        break;
      case "multi":
        result = a * b;
        break;
      case "rem":
        result = a % b;
        break;
      case "pow":
        result = a ** b;
        break;
      default:
        result = "Error";
        alert("unknown operation")
    }
  }
  if (isNaN(result)) {
    alert("Error");
  } else {
    alert(`Результат операции равен ${result}`);
  }
}

calc("multi", 4, "6");


