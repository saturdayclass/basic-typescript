/*
CLASS
Ketika kita membuat sebuah class di typescript, nantinya dia akan di compile menjadi prototype dalam javascript
*/

export class User {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName = (value: string): void => {
    this.name = value;
  };

  getName = (): string => {
    return this.name;
  };
}

// Public = bisa di akses di semua class atau dari luar class
// protected = hanya bisa di akses oleh class tsb dan class turunanya
// private = hanya bisa di akses oleh class itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = '';

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return { read: this.read, write: this.write };
  }

  // Biasanya digunakan untuk memvalidasi data
  set email(value: string) {
    this._email = value;
  }

  // Untuk mengambil data
  get email(): string {
    return this._email;
  }
}

let admin = new Admin('Raihan', 19, '628737367676');
admin.email = 'admin@kepo.com';
console.log(admin.email);
