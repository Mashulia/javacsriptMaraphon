function getNameIdentificator(action) {
  let result;
  switch (action) {
    case "sum":
      result = "сложение";
    case "sub":
      result = "вычитание";
      break;
    case "div":
      result = "умножение";
      break;
    case "multi":
      result = "деление";
      break;
    case "rem":
      result = "остаток от деления";
      break;
    case "pow":
      result = "возведение в степень";
      break;
    default:
      result = "Error";
  }
  return result;
}

function showMessage(result, action) {
  alert(`Производимая операция над числами: ${action}. Результат равен ${result}`)
}

function checkParametrs(action, a, b) {
  let isEmptyData = (action == null && a == null && b == null) || (action === "" && a === "" && b === "");
  if (isEmptyData) {
    alert("Error");
    alert("Вы не ввели никакие данные!");
    return "Error";
  } else if (isNaN(+a) == true || isNaN(+b) == true) {
    alert("Error");
    alert("Вы ввели не число!");
    return "Error";
  } else if (a === "" || b === "") {
    alert("Error");
    alert("Вы не ввели число!");
    return "Error";
  } else if (action === "div" && +b === 0) {
    alert("Error");
    alert("На ноль делить нельзя");
    return "Error";
  }
  if (action === "Error") {
    alert("Вы ввели неверную математическую операцию");
    return "Error";
  }
  return true;
}

let actionIdentificator = prompt(`Введите одну из следующих операций:\n
sum - сложение;
sub - вычитание;
multi - умножение;
div - деление;
rem - остаток от деления;
pow - возведение в степень;
`, '');
let operand1 = prompt("Введите первое число", "");
let operand2 = prompt("Введите второе число", "");

let iscorrectParametrs = checkParametrs(actionIdentificator, operand1, operand2);

let nameIdentificator = getNameIdentificator(actionIdentificator);

function calc(action, a, b) {
  let result;
  switch (action) {
    case "sum":
      result = +a + +b;
      showMessage(result, nameIdentificator);
      break;
    case "sub":
      result = a - b;
      showMessage(result, nameIdentificator);
      break;
    case "div":
      result = a / b;
      showMessage(result, nameIdentificator);
      break;
    case "multi":
      result = a * b;
      showMessage(result, nameIdentificator);
      break;
    case "rem":
      result = a % b;
      showMessage(result, nameIdentificator);
      break;
    case "pow":
      result = a ** b;
      showMessage(result, nameIdentificator);
      break;
    default:
      alert("Не знаю таких операций")
  }
}

if (iscorrectParametrs !== "Error") {
  calc(actionIdentificator, operand1, operand2);
}
