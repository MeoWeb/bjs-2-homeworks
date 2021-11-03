// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;


  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  let avg = sum / arr.length;

  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker, worker2) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max2 = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max2) {
      max2 = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let diff = max2 - min;

  return diff;
}