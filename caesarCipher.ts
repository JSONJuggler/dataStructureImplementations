const caesarCipher = (s: string, k: number): string => {
  let input: Array<string> = [...s];
  let orig: string = "abcdefghijklmnopqrstuvwxyz";
  let newString: string = "";
  let newIdx: number;
  let rotate: number;

  if (k >= orig.length) {
    rotate = k % orig.length;
  } else {
    rotate = k;
  }

  input.forEach((x: string): void => {
    if (x.toUpperCase() !== x.toLowerCase()) {
      if (x === x.toUpperCase()) {
        newIdx = orig.indexOf(x.toLowerCase()) + rotate;
        if (newIdx >= orig.length) {
          newIdx -= orig.length;
        }
        newString += orig[newIdx].toUpperCase();
      }

      if (x === x.toLowerCase()) {
        newIdx = orig.indexOf(x.toLowerCase()) + rotate;
        if (newIdx >= orig.length) {
          newIdx -= orig.length;
        }
        newString += orig[newIdx];
      }
    } else {
      newString += x;
    }
  });
  return newString;
};
