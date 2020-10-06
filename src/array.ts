/* Khusus untuk type data array ketika melakukan pendeklarasian variable seperti di bawah ini, 
maka itu otomatis akan menjadi array yang isinya hanya boleh number
*/
let array = [1, 2, 3];

// Jika ingin array nya hanya boleh di isi string saja maka kita bisa tambahkan seperti ini
let array2: string[];
array2 = ['a', 'b', 'c'];

// Jika ingin array nya bisa di isi semua type data, kita bisa gunakan any seperti di bawah ini
let array3: any[];
array3 = ['1', 2, false, {}, ['aa', 11]];

/* 
Tuples
Adalah sebuah array yang tipe ny bisa berbagai macam tipe data tetapi terbatas.
*/

let biodata: [string, number];
biodata = ['Raihan', 19];

// Tidak bisa
// biodata = [19, 'surakarta', false];
