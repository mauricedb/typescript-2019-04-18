interface LoggerInterface {
  print(text: string): void;
}

class Logger implements LoggerInterface {
  print(text: string) {
    console.log(text);
  }
}

class Calculator {
  // private logger: Logger;

  // constructor(logger: Logger) {
  //   this.logger = logger;
  // }

  constructor(private readonly logger: LoggerInterface) {}

  add(x: number, y: number) {
    this.logger.print('Aan het optellen');

    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }

  multiply(x: number, y: number) {
    return x * y;
  }
  divide(x: number, y: number) {
    return x / y;
  }
}

const x = document.getElementById('x') as HTMLInputElement;
const y = document.getElementById('y') as HTMLInputElement;
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const result = document.getElementById('result');

const calculator = new Calculator(new Logger());

add.addEventListener('click', () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener('click', () => {
  result.textContent = calculator.subtract(+x.value, +y.value).toString();
});

multiply.addEventListener('click', () => {
  result.textContent = calculator.multiply(+x.value, +y.value).toString();
});

divide.addEventListener('click', () => {
  result.textContent = calculator.divide(+x.value, +y.value).toString();
});
