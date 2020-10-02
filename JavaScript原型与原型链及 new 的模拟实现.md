## 原型与原型链及 new 的模拟实现

### 原型与原型链

#### 1.原型的基本概念：

+ **每个函数都有一个 `prototype` ，对函数使用 `new` 操作符构造出的对象其 `__proto__` 指向该构造函数的 `prototype` **

+ **每个对象（在 js 中，除了 `null` 有争议以外，默认所有数据类型都为对象）都有一个 `__proto__` ，每个对象的 `__proto__` 均为其构造函数的 `prototype` ，而构造函数的  `__proto__` 则为 `Function.prototype`**

+ 正常情况下，每个 `prototype` 原型都有一个 `constructor` 属性指向与之相关的构造函数

  ```javascript
  xxx.prototype.constructor === xxx //true
  ```


#### 2.实例与原型的关系：

+ 当读取实例的属性时，如果无法直接在实例对象中找到该属性，则会寻找到该对象的 `__proto__` 上，如果找到了该属性，则返回该属性的值，而如果还找不到，则会沿着该 `__proto__` 的 `__proto__` 继续向上查找……如果一直找到 `Object.prototype` 上也没有该属性的话，则返回  `undefined` 

  ```javascript
  function Person() {
  	this.x = 1;
  }
  Person.prototype.y = 2;
  var person = new Person();
  console.log(person.x); //1  在 person 对象中有私有属性 x ，所以可以直接打印出结果 1
  console.log(person.y); //2  在 person 对象中并没有名为 y 的属性，所以需要沿着原型链查找到 person.__proto__ (也就是 Person.prototype) 上，此时发现了名为 y 的属性，打印出结果2
  console.log(person.z); //undefined 在原型链上没有名为 z 的属性，所以只能打印出 undefined
  ```

### new 的执行过程及相应模拟

```javascript
function Foo() {...};
let f1 = new Foo();  // 与 let f1 = new Foo 的效果一样
```

#### new 的执行过程

+ 形成一个新的执行上下文 EC

+ **创建一个对象，并将 this 指向这个对象（该对象就是当前类的实例）**

+ 形成一个 AO 变量对象，并开始预编译

  + 函数对应形参和变量的声明
  + 函数的形参赋值和arguments实参赋值
  + 函数体中的函数定义

+ 初始化作用域链 <AO, [[scope]]>

+ 代码执行

+ **如果构造函数 `return` 的是引用类型值，[new] 返回的就是构造函数 return 的引用类型值**

  **而如果构造函数 `return` 的是基本类型值，那么 [new] 就会返回新创建的实例对象**

#### new 的模拟实现

```javascript
function _new(constructFunction, ...args) {
    let obj = Object.create(constructFunction.prototype); //创建一个新对象，其原型是构造函数的prototype
	let result = consturctFunction.call(obj, ...args);//执行构造函数，同时将函数中的this指向obj实例对象，并创建一个result变量用来存储执行constructFunction所返回的值
	if ((result !== null && typeof (result) === 'object') || typeof (result) === 'function') {
		return result;//若原函数返回的是引用类型值，则返回值不作变动
	}
	return obj;//若原函数返回的不是引用类型值，则返回新创建的实例对象
}
```