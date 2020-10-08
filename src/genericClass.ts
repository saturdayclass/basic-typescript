class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(elements: T): void {
    this.data.push(elements);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// let numbers = new List<number>(1, 2, 3);
// numbers.add(11);
// numbers.addMultiple(112, 23);
// console.log(numbers.getAll());

let random = new List<number | string>(1, `qa`, 2);
random.add('b');
random.addMultiple(12, 'c');
console.log(random.getAll());
