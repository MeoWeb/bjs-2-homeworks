// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
    avg = sum / arr.length;
  }

  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}


// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}