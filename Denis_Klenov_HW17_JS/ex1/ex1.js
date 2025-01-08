let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

input.focus();

// https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
function printMessage(message) {
    let li = document.createElement('li');

    li.textContent = message;

    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input) return;

    if (!name) {
        name = input;
        clearOutput();
        printMessage(`Привет ${name}, загадано число от 0 до 100. Необходимо угадать его за наименьшее количество попыток.`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage('Число меньше. Попробуй еще раз.');
    } else if (guess < number) {
        printMessage('Число больше!. Попробуй еще раз.');
    } else {
        printMessage(`Верно - это число ${guess}.`);
        printMessage(`Количество попыток: ${guesses}.`);
        printMessage(`${name}, ты победитель!`);

        prompt.remove();
    }
}