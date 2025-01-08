// Создайте объект, представляющий студента, с полями: имя, возраст,
// курс, и оценки (массив чисел). Напишите функцию, которая:
// 1. Подсчитывает средний балл студента.
// 2. Выводит имя, возраст и средний балл студента.
// 3. Добавляет новое свойство статус, которое указывает, сдал ли
// студент курс. Если средний балл 50 и выше — статус "сдал",
// иначе — "не сдал".


const student = {
    name: "Алибек Юнусов",
    age: 22,
    course: "2 курс",
    grades: [75.5, 85, 90, 62, 42]
};

// ср. балл
function calculateAverage(grades) {
    let sum = 0;
    for (let grade of grades) {
        sum += grade;
    }
    return sum / grades.length;
}

// инфо студента
function displayStudentInfo(student) {
    const averageGrade = calculateAverage(student.grades);
    student.averageGrade = averageGrade;

    student.status = averageGrade >= 50 ? "сдал" : "не сдал";

    console.log(`Имя: ${student.name}`);
    console.log(`Возраст: ${student.age}`);
    console.log(`Средний балл: ${averageGrade.toFixed(2)}`);
    console.log(`Статус: ${student.status}`);
}

displayStudentInfo(student);
