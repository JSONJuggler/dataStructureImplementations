const validAnagram = (str1, str2) => {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  let strChars1 = {};
  let strChars2 = {};

  for (val of str1) {
    //console.log(str1[val]);
    strChars1[val] = (strChars1[val] || 0) + 1;
  }

  for (val of str2) {
    //console.log(str1[val]);
    strChars2[val] = (strChars2[val] || 0) + 1;
  }

  for (key in strChars1) {
    if (!(key in strChars2)) {
      return false;
    }

    if (strChars1[key] !== strChars2[key]) {
      return false;
    }
  }

  console.log(strChars1);
  console.log(strChars2);

  return true;
};
