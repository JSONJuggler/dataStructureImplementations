//const superReducedString = (s) => {
//let result;

//const dupeCheck = (s) => {
//let idx = 0;
//let checker = 1;
//let duplicates = "";
//let dupeIdxArr = [];
//let string = "";

//while (checker <= s.length) {
//if (s[idx] === s[checker]) {
//duplicates = duplicates + s.slice(idx, checker + 1);
//dupeIdxArr.push(idx);
//dupeIdxArr.push(checker);
//idx++;
//idx++;
//checker++;
//checker++;
//} else {
//idx++;
//checker++;
//}
//}

//if (duplicates) {
//for (let i = 0; i < s.length; i++) {
//if (i === dupeIdxArr[0]) {
//dupeIdxArr = dupeIdxArr.slice(1);
//} else {
//string = string + s[i];
//}
//}

//return dupeCheck(string);
//} else {
//return s;
//}
//};

//result = dupeCheck(s);

//if (result.length === 0) {
////console.log("Empty String");
//return "Empty String";
//} else {
////console.log(result);
//return result;
//}
//};

const superReducedString = (s) => {
  let string = s;

  for (let i = 0; i < s.length; i++) {
    if (string[0] === string[string.length - 1]) {
      string = string.slice(1, string.length - 1);
    } else {
      string = string.slice(1, string.length);
      string = string + s[i];
    }
  }

  if (!string) {
    return "Empty String";
  } else {
    return string;
  }
};
