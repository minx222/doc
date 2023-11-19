// call
Function.prototype.customCall = function(_this, ...args) {
    _this = _this ? Object(_this) : this;
    let fn = this;
    _this.fn = fn;
    let res = _this.fn(...args);
    delete _this.fn;
    return res;
};

// apply
Function.prototype.customApply = function(_this, args) {
    _this = _this != undefined && _this != null ? Object(_this) : this;
    let fn = this;
    _this.fn = fn;
    args = Array.isArray(args) ? args : []
    let res = _this.fn(...args);
    delete _this.fn;
    return res;
};

// bind
Function.prototype.customBind = function(_this, ..._args) {
    _this = _this != undefined && _this != null ? Object(_this) : this;
    let fn = this;
    _this.fn = fn;
    return function(...args) {
        let res = _this.fn(..._args, ...args);
        delete _this.fn;
        return res;
    }
};
function num1(val1, val2) {
    console.log(this)
    console.log('num1 function')
    return val1 + val2
}

const num2 = (val1, val2) => {
    console.log(this)
    console.log('num2 function')
    return val1 + val2
}

// console.log(num1.customBind("customCall", 1, 2)())
// console.log(num2.customBind("customCall", 1, 2)())

const _deleteRepeat = array => {
    // 补全代码
    return [...new Set(array)]
}
console.log(_deleteRepeat([-1,1,2,2]))