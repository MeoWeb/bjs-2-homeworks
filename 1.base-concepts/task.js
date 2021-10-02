'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return arr;
  } else if (D == 0) {
    arr.push(-b / (2 * a));
    return arr;
  } else {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a))
    return arr;
  }
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let S = amount - contribution;
  let P = percent * (1 / 12);
  let today = new Date();

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  percent = percent / 100;

  if (percent.isNan || contribution.isNan || amount.isNan || percent <= 0 || contribution < 0 || amount <= 0) {
    return 'Ошибка';
  }

  let checkDateYear = date.getFullYear() - today.getFullYear();
  let checkDateMonth = date.getMonth() - today.getMonth();

  if (checkDateYear < 0) { return 'Ошибка'; }

  let numberOfMonths = checkDateMonth + (checkDateYear * 12);
  let monthAmount = S * (P + P / (((1 + P) ** numberOfMonths) - 1));
  let totalAmount = monthAmount * numberOfMonths;

  return Number(totalAmount.toFixed(2));
}