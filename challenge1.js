// Reverse a string
// Reverse the provided String.

// reverseString("hello") should return a string.
// reverseString("hello") should become "olleh".


//solution1

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