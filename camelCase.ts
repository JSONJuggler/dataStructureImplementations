const camelCase = (s: String): number => {
  interface Collector {
    capitals: number | undefined;
  }
  if (!s) {
    return 0;
  }

  let collector: Collector = { capitals: undefined };

  for (let val of s) {
    if (val === val.toUpperCase())
      collector["capitals"] = (collector["capitals"] || 0) + 1;
  }

  if (collector.capitals) {
    //console.log(collector.capitals + 1);
    return collector.capitals + 1;
  } else {
    return 1;
  }
};
