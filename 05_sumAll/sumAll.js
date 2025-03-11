const sumAll = function(arr) {

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0

    for (i = min; i >= max; i++); {

    sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
