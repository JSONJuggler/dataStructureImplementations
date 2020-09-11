const ransomNote = (ransomNote: string, magazine: string): boolean => {
  let collector: any = {};

  for (let val of magazine) {
    collector[val] = (collector[val] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (collector[ransomNote[i]]) {
      collector[ransomNote[i]] -= 1;
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
};
