import Laptop from './BaseLaptop';

class Acer<T> extends Laptop<T> {
  constructor(type: T, numeric: boolean, keyboard: boolean) {
    super('Acer', type, numeric, keyboard);
  }
}

export default Acer;
