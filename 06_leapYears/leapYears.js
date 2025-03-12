const leapYears = function(year) {

    if (year % 400 === 0) {
        //can return true or false (non-string) for a boolean value
        return true;
    
    }
    // could I use || in the first part 
    else if (year % 4 === 0 && year % 100 !== 0) {
    
        return true;
    }
    
    else {

        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
