---
title: 浅谈JS的作用域(scope)
date: 2017-12-16 12:16:09
tags:
---

------

作用域：作用域指的是代码中的某些特定部分的变量、函数和对象的可访问性。换句话说，作用域决定了这些变量、函数和对象等资源的可见性。作用域在代码中无处不在，我觉得它其中的一个优点就是为你的代码提供了一定程度的安全性。

------

- 概念

作用域指的是代码中的某些特定部分的变量、函数和对象的可访问性。换句话说，作用域决定了这些变量、函数和对象等资源的可见性。作用域在代码中无处不在，我觉得它其中的一个优点就是为你的代码提供了一定程度的安全性。

- 种类

在JS中，作用域有两类：全局作用域(Global Scope)和局部作用域(Local Scope)。如果变量被定义在一个函数内部，那它就处在一个局部作用域中；被定义在函数外部，那它就处在全局作用域中。每个函数被调用的时候都会创建一个新的作用域。

1. 全局作用域

当你开始写一段JS代码的时候，你就已经处在一个全局作用域中了。
```
// The scope is by default global
var name = 'Dean';
```

在全局作用域下的变量可以在任何其他作用域下被访问和修改
```
var name = 'Dean';
console.log(name); // 'Dean'
function showName() {
    console.log(name); // name能被访问到
}
showName(); // 'Dean'
```

2. 局部作用域(函数作用域)

在函数内定义的变量处在一个局部作用域中，并且值得注意的是，该函数的每一次调用，都会有不用的作用域。这就意味着，拥有相同名称的变量能够在不同的函数中使用。这是因为这些变量与它们各自的函数相绑定，各自都有不同的作用域，并且不能在其他函数中被访问到。
```
// 全局作用域
function demoFunc() {
    // 局部作用域 #1
    function demoOtherFunc() {
        // 局部作用域 #2
    }
}

// 全局作用域
function anotherFunc() {
    // 局部作用域 #3
}
// 全局作用域
```

3. 块级语句

块级语句(例如表示条件的if和switch以及表示循环的for和while)不像其他函数一样，它不会创建新的作用域。在块级语句中定义的变量，将保留其已经存在着的作用域。
```
if(true) {
    // 这个'if'块级语句不会创建新的作用域
    var name = 'Dean'; // 变量name仍旧处在全局作用域中
}
```
在ECMAScript6中引入了了关键字let和const。这些关键字可以替代var关键字。
```
var name = 'Dean';

let like = 'Music';
const love = 'Girlfriend'
```
与var关键字相反，let和const支持在块级语句中定义局部作用域
```
if(true) {
    // 这个'if'块级语句不会创建新的作用域

    // 变量'name'在全局作用域中，因为关键字var
    var name = 'Dean';
    // 变量'like'在局部作用域中，因为关键字let
    let like = 'Music';
    // 变量love在局部作用域中，因为关键字const
    let love = 'Girlfriend';
}
console.log(name); // 输出'Dean'
console.log(like); // Uncaught ReferenceError: like is not defined
console.log(love); // Uncaught ReferenceError: love is not defined
```