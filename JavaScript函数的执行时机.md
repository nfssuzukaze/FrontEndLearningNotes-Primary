## 定义一个函数

+ 具名函数

  ```javascript
  function fName(arguments) {
      statement
      return returnValue
  }
  ```

+ 匿名函数（函数表达式）

  ```javascript
  let f = function(x, y) {
      return x + y
  }
  ```

## 函数赋值

+ `fn` 与 `fn()` 的区别
  + `fn` ：指的是 `fn` 的函数体
  + `fn()` ：指的是执行 `fn` 函数体
  
  ```javascript
  let fn = function() {} // 将函数体的地址赋值给 fn 这个变量
  let f = fn // 将 fn 所对应的值（函数体的地址）赋给 f 这个变量
  fn === f // true
  ```

## 函数的执行

**函数在被创建的时候，其作用域链就已经生成好了**。在其被调用的时候，所需要的变量就是循着在被创建时生成的这个作用域链找的

因此，便出现了所谓的闭包

> 函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起构成**闭包**（**closure**）。

接下来看闭包的经典例子：

```javascript
let i = 0
for (i = 0; i < 6; i ++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}
// 打印出了 6 个 6
// 原因是与 setTimeout 中的匿名函数关联的 i 在这个匿名函数的更上一级的作用域（即全局作用域）中，其在 setTimeout 要执行之前的值就变为了 6

let i = 0
for (i = 0; i < 6; i ++) {
    ! function(i) {
    	setTimeout(() => {
            console.log(i)
        }, 0)
    }(i)
}
// 打印结果为 0 1 2 3 4 5
// 主要原因就在这个立即执行函数，当 for 循环中将 i 这个变量作为实参传入该立即执行函数时，与setTimeout 中的那个匿名函数所关联的 i 就不再是全局作用域的那个 i 了，而是立即执行函数的作用域的 i，而每次 for 循环都会有一个新的立即执行函数，所以循环六次就意味着六个匿名函数关联了六个不同的 i，值分别为 0, 1, 2, 3, 4, 5

// ES6 的 for 与 let 配合使用也可以达到上面那一段代码效果
for (let i = 0; i < 6; i ++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}
// 打印结果为 0 1 2 3 4 5
```

## 函数与 this

在调用函数时，`this` 会被作为隐藏参数传入

```javascript
let obj = {
    name: 'saber',
    func: function () { console.log('hi,' + this.name) }
}
window.name = 'berserker'
func = function() { console.log('hi,' + this.name) }
obj.func() // 输出 hi,saber ==> 此时传入的 this 就是 obj
func() // 输出 hi,berserker ==> 此时传入的 this 就是全局对象 window

// 为了清晰的了解每个函数的 this ，应该使用下面这种方法调用函数
obj.func.call(obj) // 输出 hi,saber
obj.func.call(window) // 输出 hi.berserker
func.call(obj) // 输出 hi,saber
func.call(window) // 输出 hi,berserker
```

## 函数与 arguments

当一个函数的功能是返回传入的所有参数的和时，可以用到 arguments 伪数组

```javascript
function add() {
    let sum = 0
    for (let i = 0; i < arguments.length; i ++) {
        sum += arguments[i]
    }
    return sum
}
```

