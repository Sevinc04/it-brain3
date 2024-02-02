//?task1

// function isActive(username) {
//     alert(`${username} is active now`)
// }

// isActive("Jake")
// isActive("John")
// isActive("Jane")

//?task2

// function comparison(a, b, c) {
//     if ( a > b && a > c ) {
//         console.log(a);
//     } else if ( b > a && b > c ) {
//         console.log(b);
//     } else if ( c > a && c > b ) {
//         console.log(c);
//     } else{
//         console.log( "yalnis deyer" );
//     }
    
// }
// comparison(2, 3, 4);

//?task3

// function showBalance(rubl, dollar) {
//     let result = rubl + (dollar * 75)
//     console.log(result);
// }
// showBalance(600, 100);





//?task6
let result;
function calc(a, b, c) {
    switch (c) {
        case "+":
            result = a + b
            break;
         case "-":
             result = a - b
             break;
         case "*":
             result = a * b
             break;
         case "/":
             result = a / b
             break;
    }
    console.log(result);
}
calc(10, 5, "-")