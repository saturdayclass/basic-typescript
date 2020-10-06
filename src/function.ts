// Tipe data return function

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
