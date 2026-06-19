const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function appendFunction(func) {
    display.value += func;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Factorial Function
function factorial(n) {
    n = parseInt(n);

    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
