interface LoggerInterface {
  print(text: string): void;
}

class Logger implements LoggerInterface {
  print(text: string) {
    console.log(text);
  }
}

class Calculator {
  constructor(private readonly logger: LoggerInterface | null = {print(){}}) {}

  add(x: number, y: number) {
    if (this.logger) {
      this.logger.print('Aan het optellen');
    }


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

// const calculator = new Calculator(new Logger());
// const calculator = new Calculator(null);
const calculator = new Calculator();

if (result) {
  if (add) {
    add.addEventListener('click', () => {
      result.textContent = calculator.add(+x.value, +y.value).toString();
    });
  }

  subtract!.addEventListener('click', () => {
    result.textContent = calculator.subtract(+x.value, +y.value).toString();
  });

  multiply!.addEventListener('click', () => {
    result.textContent = calculator.multiply(+x.value, +y.value).toString();
  });

  divide!.addEventListener('click', () => {
    result.textContent = calculator.divide(+x.value, +y.value).toString();
  });
}

type Person = {
  firstName: string;
};
function doeMeer(o: Person) {
  console.log(o.firstName);
}

function doIets(o: unknown) {
  if ((o as Person).firstName) {
    doeMeer(o as Person);
  }
}

doIets(1);
doIets({ firstName: 'Maurice' });

// doeMeer(1)

function geefNiets(): never {
  throw new Error();
}

// const x1 = geefNiets();

type Hond = {
  type: 'hond';
  blaf(): any;
};

type Kat = {
  type: 'kat';
  miauw(): void;
};

type Vis = {
  type: 'vis';
  blub(): string;
};

type KatOfHondOfVis = Kat | Hond | Vis;
type KatEnHond = Kat & Hond;

function useAnimal(beestje: KatOfHondOfVis) {
  if (beestje.type === 'hond') {
    beestje.blaf();
  } else if (beestje.type === 'kat') {
    beestje.miauw();
  } else {
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

function eenNaam(param: 0 | 1 | boolean | 'true') {}

eenNaam(0);
eenNaam(1);
// eenNaam(3);
eenNaam(true);
eenNaam(false);
eenNaam('true');

type Iets = Partial<KatOfHondOfVis>;

async function getAsyncStuff() {
  try {
    const rsp = await fetch(
      'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript'
    );

    if (rsp.ok) {
      const data = await rsp.json();
      console.log(data);

      return data;
    } else {
      throw new Error(rsp.statusText);
    }
  } catch {
    console.log('oops');
  }
  return null;
}

getAsyncStuff();
