class Calculator {
  constructor() {}

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }
}

const x = document.getElementById('x');
const y = document.getElementById('y');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const result = document.getElementById('result');

const calculator = new Calculator();

add.addEventListener('click', () => {
  result.textContent = calculator.add(x.value, y.value);
});

subtract.addEventListener('click', () => {
  result.textContent = calculator.subtract(x.value, y.value);
});

multiply.addEventListener('click', () => {
  result.textContent = calculator.multiply(x.value, y.value);
});

divide.addEventListener('click', () => {
  result.textContent = calculator.divide(x.value, y.value);
});
