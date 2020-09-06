const miniMaxSum = (arr) => {
  let n = arr.length;
  let counter = 0;
  let max = -Infinity;
  let min = Infinity;
  let arrSum = arr.reduce((prev, current) => prev + current);

  while (counter < n) {
    let temp = arrSum;
    temp -= arr[counter];

    min = Math.min(temp, min);
    max = Math.max(temp, max);
    counter++;
  }
  //return [min, max];
  console.log(min + " " + max);
};
