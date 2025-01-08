// Напишите программу, которая принимает строку от пользователя и
// выполняет следующие операции:
// 1. Подсчитывает количество букв в строке.
// 2. Подсчитывает количество цифр в строке.
// 3. Определяет, сколько символов являются пробелами.
// Используйте циклы и условные операторы для анализа
// каждого символа строки.

// const userInput = prompt("Введите строку для анализа:");
const userInput = "Привет Мир! 2025 год";

function analyzeString(input) {
    let letters = 0;
    let digits = 0;
    let spaces = 0;

    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

    for (let symb of input) {
        if (/[a-zA-Zа-яА-Я]/.test(symb)) {
            letters++;
        } else if (symb >= '0' && symb <= '9') {
            digits++;
        } else if (symb === ' ') {
            spaces++;
        }
    }

    console.log(`Количество букв: ${letters}`);
    console.log(`Количество цифр: ${digits}`);
    console.log(`Количество пробелов: ${spaces}`);
}

analyzeString(userInput);
