const jewelsAndStone = (J: string, S: string): number => {
  let jewelCollector: any = {};
  let jewelCount: any = 0;

  for (let i = 0; i < J.length; i++) {
    jewelCollector[J[i]] = jewelCollector[J[i]] || true;
  }

  for (let val of S) {
    if (jewelCollector[val]) {
      jewelCount += 1;
    }
  }
  //console.log(jewelCount);
  return jewelCount;
};
