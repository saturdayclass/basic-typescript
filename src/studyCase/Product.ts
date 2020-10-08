import Acer from './Acer';
import Macbook from './Macbook';

let acer = new Acer('Aspire', true, true);
console.log(acer);
acer.a();
acer.b();

let macbook = new Macbook(2019, false, false);
console.log(macbook);
macbook.a();
macbook.b();
