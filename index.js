let topDisplay = document.getElementById('display-top');
let botDisplay = document.getElementById('display-bot');
let eqBtn = document.querySelector('.equal-button');
let clearBtn = document.getElementById('clear-button');
let delBtn = document.getElementById('del');

topDisplay.innerHTML = "";
let numA, numB, op, newOp;

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b == 0) {
        return 0;
    }
    return Number(a) / Number(b);
}

function operate(operation, a, b) {
    switch (operation) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

let numbers = document.querySelectorAll('.number');
numbers.forEach(nrButton => {
    nrButton.addEventListener('click', function (e) {
        if (botDisplay.textContent === '0') {
            botDisplay.textContent = e.target.textContent;
        } else if (e.target.textContent == '.' && botDisplay.textContent.includes('.')) {

        } else {
            botDisplay.innerHTML += e.target.textContent;
        }
    })
});

let ops = document.querySelectorAll('.operation');
ops.forEach(opButton => {
    opButton.addEventListener('click', function (e) {
        console.log(numA);
        if (numA) {
            numB = +botDisplay.innerHTML;
            numA = operate(op, numA, numB);
            newOp = e.target.textContent;
            topDisplay.textContent += numB + " " + newOp;
            op = newOp;
        } else {
            op = e.target.innerHTML;
            numA = +botDisplay.innerHTML;
            topDisplay.innerHTML += numA + " " + op;
        }

        botDisplay.innerHTML = "";
    });
});

eqBtn.addEventListener('click', () => {

    numB = botDisplay.textContent;
    let result = operate(op, numA, numB);

    botDisplay.textContent = result;
    topDisplay.textContent = '';
    numA = null;
    numB = null;
});

clearBtn.addEventListener('click', () => {
    topDisplay.innerHTML = '';
    botDisplay.innerHTML = '0';
});

delBtn.addEventListener('click', () => {
    if (botDisplay.textContent !== '0') {
        botDisplay.textContent = botDisplay.textContent.slice(0, -1);
    }
});

console.log(numA);
console.log(numB);