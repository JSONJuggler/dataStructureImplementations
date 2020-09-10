const alternate = (s: string): number => {
  let candidates: any = [];
  let temp: any = s;
  let collector: any = {};
  let tempCollector: any = {};

  if (s.length < 2) {
    return 0;
  }

  for (let val of s) {
    collector[val] = (collector[val] || 0) + 1;
    tempCollector[val] = (tempCollector[val] || 0) + 1;
  }

  for (let valOne in collector) {
    for (let valTwo in collector) {
      if (valTwo !== valOne) {
        for (let val in collector) {
          if (val !== valOne && val !== valTwo) {
            temp = temp.split(val).join("");
          }
        }
        candidates.push(temp);
        temp = s;
      }
    }
    collector = { ...tempCollector };
  }

  candidates = [...new Set(candidates)];

  let testedCandidates = candidates.map((string: string): number => {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        return 0;
      }
    }
    return string.length;
  });

  if (!testedCandidates.length) {
    return 0;
  }

  return Math.max(...testedCandidates);
  //console.log(Math.max(...testedCandidates));

  //console.log(test);
  //console.log(candidates);

  //console.log(Object.keys(collector));
  //console.log(collector);
  //console.log(tempCollector);
};

alternate("aaaaa");
