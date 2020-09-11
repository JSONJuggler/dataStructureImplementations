const validParenthesis = (s: string): boolean => {
  let counter: any = 0;

  for (let val of s) {
    if (val === "(") {
      counter += 1;
    } else {
      counter -= 1;
    }

    if (counter < 0) {
      console.log(false);
      return false;
    }
  }

  console.log(counter === 0);
  return counter === 0;
};

const validParenthesisLC = (s: string): boolean => {
  // INCORRECT

  //let collector: any = {
  //p: 0,
  //b: 0,
  //s: 0,
  //};

  //for (let val of s) {
  //if (val === "(" || val === ")") {
  //if (val === "(") {
  //collector.p += 1;
  //} else {
  //collector.p -= 1;
  //}
  //}
  //if (collector.p < 0) {
  //console.log(false);
  //return false;
  //}
  //if (val === "[" || val === "]") {
  //if (val === "[") {
  //collector.b += 1;
  //} else {
  //collector.b -= 1;
  //}
  //}
  //if (collector.b < 0) {
  //console.log(false);
  //return false;
  //}
  //if (val === "{" || val === "}") {
  //if (val === "{") {
  //collector.s += 1;
  //} else {
  //collector.s -= 1;
  //}
  //}
  //if (collector.s < 0) {
  //console.log(false);
  //return false;
  //}
  //}
  //if (collector.p !== 0) {
  //console.log(false);
  //return false;
  //}
  //if (collector.b !== 0) {
  //console.log(false);
  //return false;
  //}
  //if (collector.s !== 0) {
  //console.log(false);
  //return false;
  //}

  //console.log(collector);
  //console.log(true);
  //return true;

  let stack: any = [];

  for (let val of s) {
    if (val === "(") {
      stack.push(")");
    }
    if (val === "[") {
      stack.push("]");
    }
    if (val === "{") {
      stack.push("}");
    }
    if (val === ")" || val === "]" || val === "}") {
      if (val === ")") {
        if (val === stack[stack.length - 1]) {
          stack.pop();
        } else {
          console.log(false);
          return false;
        }
      }
      if (val === "]") {
        if (val === stack[stack.length - 1]) {
          stack.pop();
        } else {
          console.log(false);
          return false;
        }
      }
      if (val === "}") {
        if (val === stack[stack.length - 1]) {
          stack.pop();
        } else {
          console.log(false);
          return false;
        }
      }
    }
  }

  if (stack.length) {
    console.log(false);
    return false;
  }
  console.log(true);
  return true;
};
