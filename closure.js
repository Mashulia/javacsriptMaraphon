"use strict";
// Сумма с помощью замыканий
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(1)(2));
console.log(sum(5)(-2));

// Фильтрация с помощью функции
function inBetween(a, b) {
  return function (element) {
    return element >= a && element <= b;
  };
}

function inArray(array) {
  return function (element) {
    return array.includes(element);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 4, 10]))); // 1,2

// Сортировать по полю
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

// Армия функций
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // функция shooter
      console.log(i++); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();

console.log(army[0]()); // у 0-го стрелка будет номер 10
console.log(army[5]()); // и у 5-го стрелка тоже будет номер 10
console.log(army[6]()); // и у 5-го стрелка тоже будет номер 10
console.log(army[7]()); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
