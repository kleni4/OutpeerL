// Объявите три переменные с помощью let, которые будут хранить ваше имя, возраст и статус студента (true/false).
// Затем выведите их в консоль.

let name = 'Алексей';
let age = 25;
let StudStatus = true;

console.log('Имя:', name);
console.log('Возраст:', age);
console.log('Статус студента:', StudStatus);
console.log('__________________________________');

//Создайте константу для хранения числа Пи и вычислите длину окружности с радиусом 5. Выведите результат в консоль.

const P = 3.141592653589793;
const R = 5;
const circum = 2 * P * R;

console.log('Длина окружности с радиусом', R, 'равна', circum.toFixed(2));
console.log('__________________________________');

// Объявите переменные разных примитивных типов данных: String, Number, Boolean, null, и undefined.
// Проверьте их типы с помощью typeof и выведите результат.

let str = "Привет, мир!";
let nubmer = 42;
let bool = false;
let testnull = null;
let notdef;

console.log("Тип переменной 'строка':", typeof str);
console.log("Тип переменной 'число':", typeof nubmer);
console.log("Тип переменной 'булево':", typeof bool);
console.log("Тип переменной 'пусто':", typeof testnull);
console.log("Тип переменной 'неопределено':", typeof notdef);
console.log('__________________________________');

// Создайте объект, который будет описывать книгу (название, автор, год издания) и выведите его свойства.

let book = {
    book_name: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869
};

console.log('Название книги:', book.book_name);
console.log('Автор книги:', book.author);
console.log('Год издания:', book.year);
console.log('__________________________________');

// Создайте массив из трёх любых чисел и найдите их сумму.

let numbers = [500, 765, 80];
let summ = numbers[0] + numbers[1] + numbers[2];

console.log("Массив чисел:", numbers);
console.log("Сумма чисел:", summ);
console.log('__________________________________');

// Напишите функцию, которая принимает два числа, складывает их и возвращает результат.

function fold (a, b) {
    return a + b;
}

let num1 = 15;
let num2 = 25;
let result = fold (num1, num2);

console.log(num1, '+', num2, '=', result);
console.log('__________________________________');

// Используя шаблонные строки, создайте переменную, которая будет содержать информацию
// о человеке (имя, возраст и город), и выведите эту строку.

let name_man = 'Жанбулат';
let age_man = 30;
let city = 'Алматы';

let information = `Имя: ${name_man}, Возраст: ${age_man}, Город: ${city}.`;

console.log(information);
console.log('__________________________________');

// Напишите функцию, которая принимает имя, возраст
// и город, а затем возвращает строку с использованием
// шаблонных строк.

function createInfo(name_info, age_info, city_info) {
    return `Имя: ${name_info}, Возраст: ${age_info}, Город: ${city_info}.`;
}

let name_info = 'Denis';
let age_info = 28;
let city_info = 'Astana';

let inform = createInfo(name_info, age_info, city_info);
console.log(inform);












