'use strict';

let cost;
const country = prompt('Выберете вашу страну');
const countryCheck = country.toLowerCase();

switch (countryCheck) {
  case 'китай':
    cost = 100;
    console.log(`Доставка в ${countryCheck} будет стоить ${cost} кредитов`);
    break;

  case 'Чили':
    cost = 250;
    console.log(`Доставка в ${countryCheck} будет стоить ${cost} кредитов`);
    break;

  case 'австралия':
    cost = 170;
    console.log(`Доставка в ${countryCheck} будет стоить ${cost} кредитов`);
    break;

  case 'индия':
    cost = 80;
    console.log(`Доставка в ${countryCheck} будет стоить ${cost} кредитов`);
    break;

  case 'ямайка':
    cost = 120;
    console.log(`Доставка в ${countryCheck} будет стоить ${cost} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
