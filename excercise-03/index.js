'use strict';

const ADMIN_PASSWORD = 'rva';
let message = prompt('Введите ваш пароль');

if (message === null) {
  alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
} else if (message !== ADMIN_PASSWORD) {
  alert('Доступ запрещен, неверный пароль!');
}
