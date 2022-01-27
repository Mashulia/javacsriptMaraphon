loop: for (let i = 2; i < 15; i++) {
  let j = i;
  while (j >= 1) {
    j--;
    if (i % j === 0 && j !== 1) {
      continue loop;
    }
  }
  console.log(i);
}
