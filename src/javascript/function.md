---
outline: deep
---


# 常用函数合集

## 1. 原型
```
原型(prototype)的本质是一个对象，它可以为其他对象提供共享的属性和方法，类似静态属性和方法

原型链是一个单向查找链表如果我们访问某个对象的某个属性，而这个对象本身并没有这个属性，那么JavaScript会在原型链上查找，通过对象.__proto__，直到找到这个属性或者查找到原型链的末尾为止
末尾为Object，Object.__proto__ 指向Object
```
ps: {}.prototype === undefined

## 1. 修改this方法
修改this指向原生提供了bind、call、apply方法


### 1.1 bind
bind可以修改this指向，传入一个字符串剩余参数，不会立即执行，而是返回一个新的函数，需要手动执行
```typescript
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
```

### 1.2 call
call可以修改this指向，传入一个字符串剩余参数，会立即执行，返回函数执行结果
```typescript
Function.prototype.customCall = function(_this, ..._args) {
    _this = _this != undefined && _this != null ? Object(_this) : this;
    let fn = this;
    _this.fn = fn;
    let res = _this.fn(..._args);
    delete _this.fn;
    return res;
};
```