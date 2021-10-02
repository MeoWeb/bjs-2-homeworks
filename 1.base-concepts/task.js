"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let D = b ** 2 - 4 * a * c;

    if (D == 0) {
        arr.push(-b / (2 * a));
    } else if (D > 0) {
        arr.push((-b + Math.sqrt(D)) / (2 * a));
        arr.push((-b - Math.sqrt(D)) / (2 * a));
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let S = amount - contribution;
    let P = (percent * (1 / 12)) / 100;
    let today = new Date();

    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);

    if (
        isNaN(percent) ||
        isNaN(contribution) ||
        isNaN(amount) ||
        percent <= 0 ||
        contribution < 0 ||
        amount <= 0
    ) {
        return `Параметр содержит неправильное значение`;
    }

    let checkDateYear = date.getFullYear() - today.getFullYear();
    let checkDateMonth = date.getMonth() - today.getMonth();

    if (checkDateYear < 0) {
        return `Ошибка`;
    }

    let numberOfMonths = checkDateMonth + checkDateYear * 12;
    let monthAmount = S * (P + P / ((1 + P) ** numberOfMonths - 1));
    let totalAmount = monthAmount * numberOfMonths;

    return Number(totalAmount.toFixed(2));
}