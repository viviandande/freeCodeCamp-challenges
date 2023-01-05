// Factorialize a Number

// return the factorial of the provided integer
// If the integer is represented by the letter n, a factorial product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//solution
//function factorialize(num){
    //return num
//}
//factorialize(5);

function factorialize(num){
    let result = 1 // cannot be zero because any number multiplied by zero is zero
    for(let i = 1; i <= num; i++){
        result *= i // or result = result * i
    }
    return result
}
factorialize(5);