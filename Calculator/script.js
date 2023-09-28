// script.js
let result = '0';

function clearResult() {
    result = '0';
    document.getElementById('result').value = result;
}

function appendToResult(value) {
    if (result === '0' && value !== '.') {
        result = value;
    } else {
        result += value;
    }
    document.getElementById('result').value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        result = '0';
    }
}
