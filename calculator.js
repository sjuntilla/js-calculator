/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function () {
    var memory = 0;
    var total = 0;

    var load = function (num) {
        if (typeof num === 'number') {
            total = num;
            return num;
        } else {
            throw error;
        }
    }
    var getTotal = function () {
        if (typeof total === 'number') {
            return total;
        }
    }

    var add = function (num) {
        if (typeof num === 'number') {
            return total += num;
        } else {
            throw error;
        }
    }

    var subtract = function (num) {
        if (typeof num === 'number') {
            return total -= num;
        } else {
            throw error;
        }
    }

    var multiply = function (num) {
        if (typeof num === 'number') {
            return total *= num;
        } else {
            throw error;
        }
    }

    var divide = function (num) {
        if (typeof num === 'number') {
            return total /= num;
        } else {
            throw error;
        }
    }

    var recallMemory = function () {
        return memory;
    }

    var saveMemory = function () {
        memory = total;

    }

    var clearMemory = function (num) {
        memory = 0;
    }

    return {
        load,
        getTotal,
        add,
        subtract,
        multiply,
        divide,
        recallMemory,
        saveMemory,
        clearMemory
    }


};

/**
 * sets the `total` to the number passed in
 * @param  { Number } x
 * @return { Number }    current total
 */


/**
 * Return the value of `total`
 * @return { Number }
 */


/**
 * Sums the value passed in with `total`
 * @param { Number } x
 */


/**
 * Subtracts the value passed in from `total`
 * @param  { Number } x
 */


/**
 * Multiplies the value by `total`
 * @param  { Number } x
 */


/**
 * Divides the value passing in by `total`
 * @param  { Number } x
 */


/**
 * Return the value stored at `memory`
 * @return { Number }
 */


/**
 * Stores the value of `total` to `memory`
 */


/**
 * Clear the value stored at `memory`
 */

/**
 * Validation
 */