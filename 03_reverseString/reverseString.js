const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;

    //instead of making new variables, I can chain the methods together
};



// Do not edit below this line
module.exports = reverseString;
