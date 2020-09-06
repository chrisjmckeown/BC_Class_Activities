var obj = {
    first: "john",
    last: "smith",
    fullname: function () {
        return first + ' ' + this.last;
    }
}

obj.fullname();