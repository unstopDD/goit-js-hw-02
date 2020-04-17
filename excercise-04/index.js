'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let accountBalance;
const numberOfDroids = prompt('Сколько дроидов вы хотите купить?');

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(numberOfDroids) * pricePerDroid;
  console.log(totalPrice);
}

if (credits < totalPrice) {
  console.log('Недостаточно средств на счету!');
} else if (credits > totalPrice) {
  accountBalance = credits - totalPrice;
  alert(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${accountBalance} кредитов.`,
  );
}
