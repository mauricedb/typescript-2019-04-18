import * as jQuery from 'jquery'

jQuery.ajax({
  url: '', headers:{}
})

jQuery.ajax({

})

interface LoggerInterface {
  print(text: string): void;
}

class Person {
  public firstName: string;
  public lastName: string;
}

function doIets(person: { firstName: string }) {
  console.log(person.firstName.toLowerCase());
}

doIets({ firstName: 'Maurice' });
doIets(new Person());

class Logger implements LoggerInterface {
  // class Logger  {
  // class Logger  implements {print(s:string){}} {
  log(text: string) {
    console.log(text);
  }

  print(text: string) {
    console.log(text);
  }
}

class Calculator {
  // private logger: Logger;

  // constructor(logger: Logger) {
  //   this.logger = logger;
  // }

  constructor(private readonly logger: { print(s: string): void }) {}

  add(x: number, y: number) {
    this.logger.print('Aan het optellen');

    if (this.logger instanceof Logger) {
      console.log('Het is een Logger');
    }

    // if (this.logger instanceof LoggerInterface) {
    //   console.log('Het is een LoggerInterface');
    // }

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
