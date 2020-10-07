export class User {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}

let user = new User('Raihan', 19);
console.log(user);
