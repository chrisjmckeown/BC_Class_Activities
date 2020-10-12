// module.exports is an object we use to store variables or methods
function add (a, b) {
    return a + b;
}

module.exports = {
    sum: function (a, b){
       return add (a, b);
    },
    difference: function (a, b) {
        return a - b;
    },
    product: function (a, b) {
        return a * b;
    },
    quotient: function (a, b) {
        return a / b;
    }
};