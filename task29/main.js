
//task01,task02,task03
// let person = {
//     name: 'Sevinc',
//     gender:'Female',
//     birthday: '12th July 2004',
//     age: '19',
//     setAge: (newAge) => {
//         person.age = newAge
//     },
//     getYearBeforeRetirement () {
//         return 65 - person.age
//     },
// }

// person.setAge(20);
// console.log(person.getYearBeforeRetirement());

//?task4

// const client = {
//   fullName: "Sevinc",
//   creditLimit: 5000,
//   balance: 3000,
//   percentOfMinPayment: 5,
// }

// getBalance: function () {
//   if (this.balance >= 0) {
//     return `Balansınız: ${this.balance}`;
//   } else {
//     return `Borcunuz: ${Math.abs(this.balance)}`;
//   }
// }

// getMinPayment: function () {
//   if (this.balance > 0) {
//     const minPayment = ((this.balance * this.percentOfMinPayment) / 100);
//     return `Minimum ödənişiniz: ${minPayment}`;
//   } else {
//     return `Sizin borcunuz yoxdur`;

//   }
// };

// console.log(client.getBalance())
// console.log(client.getMinPayment())


//!Task

let country = ["Azeribaijan", "Georgia", "Turkiye"]
result = country.forEach(item,index) =>{
  let val ="o" + (index+1) + item.slice(0,3).toUpperCase();
  return val
}
console.log(result);