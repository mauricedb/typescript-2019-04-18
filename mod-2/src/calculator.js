"use strict";
class Logger {
    print(text) {
        console.log(text);
    }
}
class Calculator {
    constructor(logger = { print() { } }) {
        this.logger = logger;
    }
    add(x, y) {
        if (this.logger) {
            this.logger.print('Aan het optellen');
        }
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
// const calculator = new Calculator(new Logger());
// const calculator = new Calculator(null);
const calculator = new Calculator();
if (result) {
    if (add) {
        add.addEventListener('click', () => {
            result.textContent = calculator.add(+x.value, +y.value).toString();
        });
    }
    subtract.addEventListener('click', () => {
        result.textContent = calculator.subtract(+x.value, +y.value).toString();
    });
    multiply.addEventListener('click', () => {
        result.textContent = calculator.multiply(+x.value, +y.value).toString();
    });
    divide.addEventListener('click', () => {
        result.textContent = calculator.divide(+x.value, +y.value).toString();
    });
}
function doeMeer(o) {
    console.log(o.firstName);
}
function doIets(o) {
    if (o.firstName) {
        doeMeer(o);
    }
}
doIets(1);
doIets({ firstName: 'Maurice' });
// doeMeer(1)
function geefNiets() {
    throw new Error();
}
function useAnimal(beestje) {
    if (beestje.type === 'hond') {
        beestje.blaf();
    }
    else if (beestje.type === 'kat') {
        beestje.miauw();
    }
    else {
        beestje.blub();
    }
}
// const katEnHond: KatEnHond = {
// type: 'kat'&& 'hond',
// //'kat' && 'hond',
// blaf(){},
// miauw(){}
// };
// class Demo implements KatEnHond {
// }
function eenNaam(param) { }
eenNaam(0);
eenNaam(1);
// eenNaam(3);
eenNaam(true);
eenNaam(false);
eenNaam('true');
async function getAsyncStuff() {
    try {
        const rsp = await fetch('http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript');
        if (rsp.ok) {
            const data = await rsp.json();
            console.log(data);
            return data;
        }
        else {
            throw new Error(rsp.statusText);
        }
    }
    catch {
        console.log('oops');
    }
    return null;
}
getAsyncStuff();
