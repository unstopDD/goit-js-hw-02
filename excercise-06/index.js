'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Введите число`);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    const inputNumber = Number(input);
    numbers.push(inputNumber);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}

alert(`Общая сумма чисел равна ${total}`);
