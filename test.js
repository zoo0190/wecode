const evenCheck = () => {
  let evenArr = [];
  for (i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;
};
