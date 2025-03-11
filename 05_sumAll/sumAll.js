const sumAll = function (start, end) {

    if (!Number.isInteger(start) || start < 0 || !Number.isInteger(end) || end < 0) {

        return 'ERROR';
    }

    else {

    let min = Math.min(start, end);

    let max = Math.max(start, end);

    let arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    

    let sum = 0;

    for (let k = 0; k < arr.length; k++) {
        sum += arr[k];
    }

    return sum;

    }
};

// Do not edit below this line
module.exports = sumAll;
