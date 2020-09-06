const staircase = (n) => {
  let steps = "#";

  for (let i = 0; i < n; i++) {
    console.log(steps.padStart(n, " "));
    steps += "#";
  }
};
