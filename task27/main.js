//?task1
// let studentsArr = ["Sevinc", "Xanim", "Ilaya"];
// studentsArr.push("Feride")
// studentsArr.shift() 
// console.log(studentsArr); 

//?task2
// let numArray = [4, 8, 15, 2, 9, 5, 7, 1, 6, 10];
// let maxArray = Math.max(...numArray);
// console.log(maxArray);

//?task3
// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
//   ];
// let development = [];
// employees.forEach(myfunc);
// function myfunc(item){
//   if (item[1]=== 'development') {
//     development.push(item[0])
    
//   }
// }
// console.log(development);

//!task4


//?task5
// let numArray = [10, -5, 3, -3, 9];
// 1.Massiv olaraq:
// let result = numArray.filter(item => item < 0)
// console.log(result);
// 2.Number olaraq
// numArray.forEach(myfunc);
// function myfunc(item){
//   if (item < 0 ) {
//     console.log(item);
//   }
// }

//?task6
//let numArray = [10, -5, 3, -3, 9];
// 1.Massiv olaraq:
// let result = numArray.filter(item => item > 0)
// console.log(result);
// 2.Number olaraq
// numArray.forEach(myfunc);
// function myfunc(item){
//   if (item > 0 ) {
//     console.log(item);
//   }
// }

//!task7
// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// function printWithDashes(name) {
//     console.log("-------" );
//     console.log(name);
//     console.log("-------");
// }
// names.forEach(printWithDashes);

// function printWithHearts(name) {
//     console.log("<3<3<3<3 " + name + " <3<3<3<3");
// }
// names.forEach(printWithHearts);

// function printWithIndex(name, index) {
//     console.log(index + " - " + name);
// }
// names.forEach(printWithIndex);

//!task8
// function kebabToUpper(kebabCaseString) {
//     var cleanString = kebabCaseString.replace(/-/g, '');

//     var upperCaseString = cleanString.toUpperCase();

//     return upperCaseString;
// }

// var kebabCaseText = "kebab-case-sample-text";
// var upperCaseResult = kebabToUpper(kebabCaseText);

// console.log("Kebab-case mətni:", kebabCaseText);
// console.log("UPPER_CASE mətni:", upperCaseResult);


//?task9
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let result1 = numbers.filter(item => item < 0).map(item => Math.abs(item));
// console.log(result1);
// let result2 = numbers.filter(item => item > 0).map(item => item * 2);
// console.log(result2);
// console.log([...result1, ...result2]);

//?task11
// let name = ['Aydan', 'Ayxan', 'Leman', ' Zeyneb', 'Andrew']
// let result = name.filter(item => item[0] === 'A')
// console.log(result);

//?task12

