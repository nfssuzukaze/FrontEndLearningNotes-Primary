## 1. 对象

+ 定义：对象是由一堆键值对组成的集合

+ 对象的构造方法

  ```javascript
  let person = new Object()
  person.name = 'saber'	// 为空对象 person 赋予 name: 'saber' 的键值对 
  ```

  ```javascript
  let person = {name: 'saber'}
  // 在 javascript 中，对象的键名（属性名）是 String 类型
  // 通过 Object 的 keys 方法可以证明对象的属性名就是 String
  Object.keys(person) // 返回值为 ["name"]
  ```

  + **注意：对象的属性名为 `String` 类型**

+ 使用变量的值作为属性名

  ```javascript
  let tempvalue = 'name'
  let person = {tempvalue: 'saber'}		// 此时的属性名为 "tempvalue"
  let pers = {[tempvalue]: 'saber'} 		// 此时的属性名为 "name"
  ```

+ 引用对象值时，`[]` 的作用

  ```javascript
  let person = {name: 'saber'}
  let arr = [1,2,3]
  
  let obj = {[person]: 'person'}
  // obj 对象中有	[object Object]: "person" 键值对;其中 [object Object] 是 person 对象隐式转换为 String 类型的结果
  let o = {[arr]: 'arr'}
  // obj 对象中有 1,2,3: "arr" 键值对;其中 1,2,3 是 arr 数组隐式转换为 String 类型的结果
  // 可以知道，js 中与对象有关的 [] 可以将其中的值隐式转换为 String 类型
  ```

  + **结论：与对象的属性名有关时的 `[]` 会尝试将其中的值隐式转换为 `String` 类型，并以转换所得的结果作为属性名**

+ 对象的隐藏属性

  + 每个对象都有一个隐藏属性指向其原型（详见原型及原型链）

## 2. 对象属性的 CRUD

+ 删除属性

  ```javascript
  delete obj.xxx // 删除 obj 对象的 "xxx" 属性
  'xxx' in obj === false // obj 没有 "xxx" 属性
  'xxx' in obj && obj.xxx === undefined // obj 能够获取 "xxx" 属性，其值为 undefined
  ```

  + 注意：**没有对应属性** 和 **对应属性的值为 `undefined`** 是不一样的
  + 一个对象的属性没有被定义并不代表对象没有这个属性

+ 读取属性

  ```javascript
  Object.keys(obj) // 查看 obj 对象的所有属性名
  console.dir(obj) // 查看完整的 obj 对象
  obj.hasOwnProperty('toString') // 判断 "toString" 属性是否在没有原型的情况下还存在
  obj['name'] // 查看 obj 的 "name" 属性 等价与 obj.name
  obj[name] // 查看 obj 的 name (指的是 name 这个变量的值隐式转换为 String 类型后的值) 属性
  ```

+ 添加属性或修改属性

  + 对自身属性的添加/修改

      ```javascript
      // 直接赋值
      let person = {}
      person.name = 'saber'
      person.age  = 16

      // 批量赋值
      let person = {}
      Object.assign(obj, {name: 'saber', age: 16})
      ```

  + 对原型链上的属性进行修改/添加
  
    ```javascript
    obj.__proto__.toString = 'hello' // __proto__ 这个名字不是官方制定的，所以非 chrome 的浏览器的隐藏属性名可能不会是 __proto__ , 故一般不使用 __proto__ 对原型进行修改
    Object.prototype.toString = 'hello' // 如果要修改原型，一般是这种形式
    ```
  
  + 修改隐藏属性
  
    ```javascript
    let obj = Object.create(o) // 此时，obj 的隐藏属性指向了对象 o
    ```

+ `'xxx' in obj` 与 `obj.hasOwnProperty('xxx')` 的区别
  + `'xxx' in obj` 指的是 `obj` 能否获得 `'xxx'` 属性，不论是私有还是公有
  + `obj.hasOwnProperty('xxx')` 是指 `obj` 是否有名为 `'xxx'` 的私有属性