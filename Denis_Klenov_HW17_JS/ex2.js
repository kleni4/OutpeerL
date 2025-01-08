// Напишите программу, которая принимает массив чисел и выводит
// следующие данные:
// ● Наибольшее число в массиве.
// ● Наименьшее число в массиве.
// ● Среднее арифметическое всех чисел в массиве. Используйте
// циклы для обработки массива и условные операторы для
// нахождения наибольшего и наименьшего чисел.

const numbers = [12, 5, 8, 130, 44];
analyzeArray(numbers);

function analyzeArray(numbers) {
    let max_num = numbers[0];
    let min_num = numbers[0];
    let summ = 0;

    for (let i = 0; i < numbers.length; i++) {
        let numer = numbers[i];

        //наибольшее число
        if (numer > max_num) {
            max_num = numer;
        }

        //наименьшее число
        if (numer < min_num) {
            min_num = numer;
        }

        summ += numer;
    }
// https://www.w3schools.com/jsreF/jsref_length_string.asp
    
    let average = summ / numbers.length; // Среднее

    console.log(`Наибольшее число: ${max_num}`);
    console.log(`Наименьшее число: ${min_num}`);
    console.log(`Среднее арифметическое: ${average.toFixed(2)}`);
}


