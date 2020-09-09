//const strongPassword = (n: number, password: string): number => {
//// Defining the interface this way allows me to loop through the collector as seen below. any number of string keys can be added with a number or undefined value
//interface Collector {
//[key: string]: number | undefined;
//}

//let min: number = 6;
//let out: number = 0;
//let collector: Collector = {
//upper: undefined,
//lower: undefined,
//special: undefined,
//number: undefined,
//};

//for (let val of password) {
//if (
//val.includes("!") ||
//val.includes("@") ||
//val.includes("#") ||
//val.includes("$") ||
//val.includes("%") ||
//val.includes("^") ||
//val.includes("&") ||
//val.includes("*") ||
//val.includes("(") ||
//val.includes(")") ||
//val.includes("-") ||
//val.includes("+")
//) {
//collector["special"] = (collector["special"] || 0) + 1;
//} else {
//if (parseInt(val) || parseInt(val) === 0) {
//collector["number"] = (collector["number"] || 0) + 1;
//} else {
//if (val === val.toUpperCase()) {
//collector["upper"] = (collector["upper"] || 0) + 1;
//}
//if (val === val.toLowerCase()) {
//collector["lower"] = (collector["lower"] || 0) + 1;
//}
//}
//}
//}

//for (let val in collector) {
//if (!collector[val]) {
//out += 1;
//}
//}

//if (out + password.length >= min) {
//} else {
//out = min - password.length;
//}

//console.log(out);
//console.log(collector);
//return out;
//};

const strongPassword = (n: number, password: string): number => {
  let out: number = 0;

  out += (password.match(/[0-9]/) || []).length;
  out += (password.match(/[a-z]/) || []).length;
  out += (password.match(/[A-Z]/) || []).length;
  out += (password.match(/[\!@#\$%^&\*\(\)\-\+]/) || []).length;

  return Math.max(4 - out, 6 - password.length);
};
