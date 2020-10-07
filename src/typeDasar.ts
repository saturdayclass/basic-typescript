// Typescript adalah static typeing
// Typescript juga sangat strict

// Jika di rubah nilainya selain string maka di akan error
// Contoh penggunaan Typescript dengan beberapa tipe data yang sering di gunakan

// String
let nama: string = 'Nama';

// Number
let age: number;
age = 17;

// Boolean
let isMerried: boolean;
isMerried = false;

/*
Any
Khusus untuk tipe data any dalam typescript ini, kita bisa memasukan berbagai macam tipe data. Seperti javascript pada umum nya.
*/
let heroes: any = 'Khalid bin walid';
heroes = 10;
heroes = [];
heroes = {};

/* 
Union Type
Kita bisa menentukan suatu variable itu mempunyai type data lebih dari satu 
*/

let phone: number | string;

phone = 6287720213121;
phone = '092323232';
