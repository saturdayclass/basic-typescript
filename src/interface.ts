// Interface harus ada di dalam sebuah class yang mengimplementasikanya.
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Acer implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log('Nyala...');
  }

  off(): void {
    console.log('Mati....');
  }
}

class Macbook implements Laptop {
  name: string;
  isKeyboardLight: boolean;

  constructor(name: string, isKeyboardLight: boolean) {
    this.name = name;
    this.isKeyboardLight = isKeyboardLight;
  }

  on(): void {
    console.log('Nyala...');
  }

  off(): void {
    console.log('Mati...');
  }
}

let acer = new Acer('Acer Kepo', true);
acer.on();
acer.off();

let mb = new Macbook('MBP 2014', true);
mb.on();
mb.off();
