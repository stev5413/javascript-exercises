const removeFromArray = function(arr, ...values) {

    newArr = arr.filter(item => !values.includes(item));
    return newArr;
    
    };

// Do not edit below this line
module.exports = removeFromArray;
