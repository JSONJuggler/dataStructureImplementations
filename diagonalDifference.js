const diagonalDifference = (arr) => {
  let leftSum = 0;
  let rightSum = 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftSum - rightSum);
};
