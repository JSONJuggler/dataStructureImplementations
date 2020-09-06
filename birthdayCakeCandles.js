const birthdayCakeCandles = (candles) => {
  let collector = {};
  let max = -Infinity;

  for (let val of candles) {
    collector[val] = (collector[val] || 0) + 1;
    max = Math.max(max, val);
  }
  return collector[max];
};
