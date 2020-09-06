const timeConversion = (s) => {
  let time = s.slice(2, 8);
  let firstTwoDigits = s.slice(0, 2);

  if (firstTwoDigits === "12") {
    if (s.slice(8) === "AM") {
      let tempTwo = parseInt(firstTwoDigits);
      tempTwo -= 12;
      tempTwo = tempTwo.toString();
      time = "0" + tempTwo + time;
    } else {
      time = firstTwoDigits + time;
    }
  } else {
    if (s.slice(8) === "PM") {
      let tempTwo = parseInt(firstTwoDigits);
      tempTwo += 12;
      tempTwo = tempTwo.toString();
      time = tempTwo + time;
    } else {
      time = firstTwoDigits + time;
    }
  }
  console.log(time);
  return time;
};
