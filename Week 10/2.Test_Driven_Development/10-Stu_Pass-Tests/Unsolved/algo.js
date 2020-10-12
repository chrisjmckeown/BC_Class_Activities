function Algo() { }

Algo.prototype.reverse = function (str) {
    return str
        .split("")
        .reverse()
        .join("");
};

Algo.prototype.isPalindrome = function (str) {
    return str === this.reverse(str);
};

Algo.prototype.capitalize = function (str) {
    return str
        // .split(' ')
        // .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        // .join(' ');
        .split(' ')
        .map(word => word.substring(0, 1).toUpperCase() + word.substring(1))
        .join(' ');
};

module.exports = Algo;
