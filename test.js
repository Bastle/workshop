const reuslt = (arr = [5, 5]) => {
  const list = arr;
  const length = list.reduce((cur, sum) => cur + sum, 0);
  let number = Math.random() * length;
  let result = 0;
  const len = list.length;
  for (let i = 0; i < len; i++) {
    if (number <= list[i]) {
      result = i;
      break;
    } else {
      number -= list[i];
    }
  }
  return result;
};

const deal = (arr, n) => {
  let resultList = [];
  for (let j = 0; j < n; j++) {
    const k = reuslt(arr);
    if (resultList[k] === undefined) {
      resultList[k] = 1;
    } else {
      resultList[k] = resultList[k] + 1;
    }
  }
  console.log(resultList);
};
deal([800, 1, 200], 1000);
