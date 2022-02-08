// 1
function camelize(str) {
  return str
    .split("-")
    .map((item, index) => {
      return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
    })
    .join("");
}

console.log(camelize("background-color")); //== "backgroundColor";
console.log(camelize("list-style-image")); //== "listStyleImage";
console.log(camelize("-webkit-transition")); //== "WebkitTransition";

// 2
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
console.log(filterRange([5, 3, 8, 1], 1, 5));

//3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 0, 5);
console.log(arr);

// 4
let array1 = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
array1.sort((a, b) => b - a);

console.log(array1); // 8, 5, 2, 1, -10

// 5
let array2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(array2);

function copySorted(arr) {
  return arr.slice().sort();
}
console.log(sorted); // CSS, HTML, JavaScript
console.log(array2); // HTML, JavaScript, CSS (без изменений)

// 7
let users = [
  { name: "Вася", surname: "Пупкин", id: 1 },
  { name: "Петя", surname: "Иванов", id: 2 },
  { name: "Маша", surname: "Петрова", id: 3 },
];

let usersMapped = users.map((user) => ({
  fullName: user.name + " " + user.surname,
  id: user.id,
}));

console.log(usersMapped[0].fullName);

// 9
function unique(arr) {
  let uniqArray = [arr[0]];
  loop: for (let i = 1; i < arr.length; i++) {
    let isNotUnoque = uniqArray.find((element) => element === arr[i]);
    if (isNotUnoque) {
      continue loop;
    } else {
      uniqArray.push(arr[i]);
    }
  }
  return uniqArray;
}
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));

// 10

let users5 = [
  { name: "Вася", surname: "Пупкин", age: 23 },
  { name: "Петя", surname: "Иванов", age: 22 },
  { name: "Маша", surname: "Петрова", age: 22 },
];
function getAverageAge(users) {
  return Math.round(
    users.reduce((prev, user) => prev + user.age, 0) / users.length
  );
}
console.log(getAverageAge(users5));

// 11
let arr4 = [1, 2, 3];
function shuffle(array) {
  array.sort((a, b) => a - b);
  const maxElement = array[0];
  const minElement = array[array.length - 1];
  const range = maxElement - minElement + 1;
  let newElement = Math.floor(Math.random() * range + minElement - 0.5);

  let newArray = [newElement];

  while (
    newArray.length !== array.length ||
    !newArray.find((element) => element === newElement)
  ) {
    if (newArray.find((element) => element === newElement)) {
      continue;
    } else {
      newArray.push(newElement);
    }
    return newArray;
  }
}

console.log(shuffle(arr4));
