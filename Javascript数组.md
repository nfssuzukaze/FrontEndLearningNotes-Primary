## js 数组对象

### js 没有真正的数组

+ 典型的数组
  + 元素的数据类型相同
  + 使用连续的内存存储
  + 通过数字下标获取元素
+ `JS` 数组
  + 元素的数据类型可以不同
  + 内存不一定是连续的（对象所占的内存在堆区）
  + 不是通过数字下标获取元素，而是通过字符串下标获取元素

---

+ 创建一个数组

    ```javascript
    let arr = [1, 2, 3]
    let arr = new Array(1, 2, 3)
    let arr = new Array(3)			// 创建长度为 3 的数组
    ```

    

+ 数组元素的访问

    + 数组元素的访问与对象属性的访问方法相似

        ```javascript
        // arr[0] 与 arr['0'] 的效果一致
        arr.0 // 语法错误 ==> 原因：js 不支持 点号引用 以数字开头的属性
        // 解决方法：使用方括号引用
        ```

---

### Array方法

+ `Array.from(arrayLike, mapFn?, thisArg?)` ：**尝试将某对象转换为数组**

  + `parameters`：

    + `arrayLike` : 被转换为数组的**伪数组**或**可迭代对象**
      + 伪数组对象（有一个 `length` 属性和若干索引属性）
      + 可迭代元素（可以获取对象中的元素,如 Map和 Set 等）
    + `mapFn` : 对每个数组元素所执行的回调函数
    + `thisArg` : 执行回调函数时的 `this` 对象

  + `description` :

    ```javascript
    Array.from(obj, mapFn, thisArg) 
    // has the same result as 
    Array.from(obj).map(mapFn, thisArg)
    ```

  + `returnValue` : 一个新的数组实例

+ `Array.isArray(obj)` : **用来确定传递的值是否是 `Array` **

  + `parameters` : 
    + `obj` : 被判定的对象
  + `returnValue` : 
    + `true` : `obj` 是 `Array`
    + `false` : `obj` 不是 `Array`



### Array 原型的方法

#### 1. 不修改原数组的方法

+ `Array.prototype.concat(value*)` ：**返回连接 this 后的浅拷贝的值**
  + `parameters`
    + 当没有 `value` 时，返回 `arr` 的浅拷贝
    + 若有 `value` ，则将 `arr` 与 `value` 合并到一个数组中
  + `description` : `value` 既可以是引用类型值也以是基本类型值

+ `Array.prototype.slice(start?, end?)` : **返回对应 this 的下标为 [start, end) 的子数组**
  + `parameters`
    + `start` : 
      + 缺省值为 0
      + 若 `start` >= `this.length` ，则返回空数组
    + `end` : 
      + 缺省值为 `this.length`
      + 若 `end` > `this.length` ，则令 `end` = `this.length`

+ `Array.prototype.toString()` ：**返回数组的字符串形式，元素之间以逗号隔开**

+ `Array.prototype.join(seperator?)` ：**将数组转换为字符串，数组元素以分隔符连接起来**
  + `parameters`
    + `seperator` :
      + 缺省值为 `,` 
      + 若为空字符串，则数组元素之间没有任何字符
+ 