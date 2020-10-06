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
