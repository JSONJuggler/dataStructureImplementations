const marsExploration = (s: string): number => {
  let alteredCount: number = 0;

  for (let i = 0; i < s.length; i++) {
    switch (i % 3) {
      case 0:
      case 2:
        if (s[i] !== "S") {
          alteredCount++;
        }
        break;
      case 1:
        if (s[i] !== "O") {
          alteredCount++;
        }
        break;
      default:
        break;
    }
  }
  return alteredCount;
};
