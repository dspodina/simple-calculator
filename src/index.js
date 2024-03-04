const resultValue = document.getElementById('result');
const clearResult = document.getElementById('clear-btn');
const calculateResult = document.getElementById('equal-sign');

function appendToResult(value) {
  resultValue.value += value;
}

clearResult.addEventListener('click', function () {
  resultValue.value = '';
});

calculateResult.addEventListener('click', function () {
  resultValue.value = eval(resultValue.value);
});
