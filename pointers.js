const countUniqueValues = (arr) => {
  let index = 0;
  let checker = 1;
  let counter = 0;
  if (arr.length === 0) {
    return counter;
  }

  while (checker < arr.length) {
    if (arr[index] === arr[checker]) {
      checker++;
    } else {
      index = checker;
      counter++;
    }
  }
  counter++;
  return counter;
};
