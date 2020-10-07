// Tipe data pada return function

// Mengembalikan data yang harus berupa string
function getName(): string {
  return 'Hallo, ini adalah string!';
}

console.log(getName());

// Mengembalikan data yang harus berupa string
function getAge(): number {
  return 19;
}

// Jika tidak ingin mengembalikan apa-apa kita bisa gunakan void
function printName(): void {
  console.log('Print My Name');
}

printName();

// Tipe data pada argument function
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(10, 2);
console.log(result);

// Dalam typescript kita bisa membuat tipe data custom ( yang kita inginkan )
type Tambah = (val1: number, val2: number) => number;

const Add = (val1: number, val2: number): number => {
  return val1 + val2;
};

// Default Parameter
const fullName = (first: string, last: string = 'Muhammad'): string => {
  return `${first} ${last}`;
};

console.log(fullName('Raihan'));
//Hasil: Raihan Muhammad

/* 
Optional Parameter
Ketika kita memberikan optional parameter seperti halnya val2 di bawah ini,
maka otomatis val2 akan menjadi undifined ketika kita tidak memberikan nilainya.
*/
const getGender = (val1: string, val2?: string): string => {
  return val1 + ' ' + val2;
};

console.log(getGender('Male'));
