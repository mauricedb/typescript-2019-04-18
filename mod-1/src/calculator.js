import * as jQuery from 'jquery';
jQuery.ajax({
    url: '', headers: {}
});
jQuery.ajax({});
class Person {
}
function doIets(person) {
    console.log(person.firstName.toLowerCase());
}
doIets({ firstName: 'Maurice' });
doIets(new Person());
class Logger {
    // class Logger  {
    // class Logger  implements {print(s:string){}} {
    log(text) {
        console.log(text);
    }
    print(text) {
        console.log(text);
    }
}
class Calculator {
    // private logger: Logger;
    // constructor(logger: Logger) {
    //   this.logger = logger;
    // }
    constructor(logger) {
        this.logger = logger;
    }
    add(x, y) {
        this.logger.print('Aan het optellen');
        if (this.logger instanceof Logger) {
            console.log('Het is een Logger');
        }
        // if (this.logger instanceof LoggerInterface) {
        //   console.log('Het is een LoggerInterface');
        // }
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        return x / y;
    }
}
const x = document.getElementById('x');
const y = document.getElementById('y');
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
