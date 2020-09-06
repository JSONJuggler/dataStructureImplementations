const plusMinus = (arr) => {
  let collector = {};

  for (let val of arr) {
    if (val < 0) {
      collector["negatives"] = (collector["negatives"] || 0) + 1;
    }

    if (val > 0) {
      collector["positives"] = (collector["positives"] || 0) + 1;
    }

    if (val === 0) {
      collector["zeros"] = (collector["zeros"] || 0) + 1;
    }
  }

  collector.positives ? collector.positives : (collector.positives = 0);
  collector.negatives ? collector.negatives : (collector.negatives = 0);
  collector.zeros ? collector.zeros : (collector.zeros = 0);

  //console.log("positives: " + collector.positives / arr.length);
  //console.log("negatives: " + collector.negatives / arr.length);
  //console.log("zeros: " + collector.zeros / arr.length);
  console.log((collector.positives / arr.length).toFixed(6));
  console.log((collector.negatives / arr.length).toFixed(6));
  console.log((collector.zeros / arr.length).toFixed(6));
};
