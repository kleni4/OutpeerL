// Напишите программу, которая создает и выводит таблицу
// умножения от 1 до 10. При этом:
// ● Таблица должна быть в виде матрицы 10x10.
// ● Используйте вложенные циклы for.

function createMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let row = ''; // Строка для текущей строки таблицы
        for (let n_multip = 1; n_multip <= 10; n_multip++) {

            // Выравнивание https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
            row += (i * n_multip).toString().padStart(4);
        }
        console.log(row); // Выводим строку
    }
}

createMultiplicationTable();
