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

class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    return { read: this.read, write: this.write };
  }
}

let admin = new Admin('Raihan', 19);
console.log(admin.getName());
console.log(admin.getRole());
