// Reverse a string

// Reverse the provided String.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.


//solution1

// function reverseString(str){

//}
//reverseString("hello");

function reverseString(str){
    let stringArray = str.split("");
    let reverseStringArray = stringArray.reduce();
    let reversedString = reverseStringArray.join("");
    return reversedString
}
console.log(reverseString("hello"));

//solution2
function reverseString(str){
    return str.split("").reduce().join("");
}
console.log(reverseString("hello"));

//solution3

function reverseString(str){
    let final = "";
    for(let i = str.length-1; i >= 0; i--){
        final += str[i];
    }
    return final
}
console.log(reverseString("hello"));