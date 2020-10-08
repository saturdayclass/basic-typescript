/*
Generic adalah sebuah type data yang dinamis
*/

function getData(value: any) {
  return value;
}

console.log(getData('Kepo').length);
console.log(getData(111).length);

const myData = <T>(value: T) => {
  return value;
};

console.log(myData('Kepo').length);
console.log(myData(111));
