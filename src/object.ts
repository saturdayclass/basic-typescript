/* Object
Dalam typescript ketika kita membuat sebuah variable berisi object.
itu akan secara otomatis menjadi sebuah type baru
*/

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: 'Raihan',
  age: 20,
};
