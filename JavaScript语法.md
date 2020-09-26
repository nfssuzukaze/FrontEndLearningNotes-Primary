## 认识 `JavaScript` :

> 它的优秀之处并非原创，它的原创之处并不优秀

## JavaScript 语法

+ 大小写敏感

+ 空白

  + 大部分时候空白处对代码并没有影响
    + `var a = 1` 和 `var a=1` 没有区别
    + 加 `\n` 大部分时候也没有影响，但是在 `return` 后面不能加 `\n`

+ 标识符

  + 第一个字符可以是 `Unicode` 字母或 `$` 或 `_` 或 中文
  + 后面的字符还可以是数字

+ 注释

  + 注释格式
    + `//` 单行注释
    + `/**/` 多行注释
  + 注释内容
    + 踩坑注解
    + 为什么代码会写的这么奇怪，遇到过什么 `bug`

+ 区块 `block`

  + 将代码包在一起，形成一个小的作用域

    ```javascript
    {
        let a = 1
        let b = 2
    }
    ```

  + 常常与 `if` / `for` / `while` 合用

+ `if` 语句

  + 形式

    ```javascript
    if (expression1) {
        statement1
    } else if (expression2){
        statement2
    } else {
        statement3
    }
    ```

  + 若 `if` / `else if` / `else` 后面没有接括号，则直接作用于紧邻其的一条语句

    ```javascript
    if (expression1) statement1
    else if (expression2) statement2
    else statement3
    ```

+ `switch` 语句

  + 形式

    ```javascript
    switch (expression) {
        case value1:
            statement1
            break
        case value2:
            statement2
            break
        default:
            statement3
    }
    ```

  + 注意

    + 若没有 `break` ，则在执行完当前语句块后会继续执行下一个语句块，直到执行完所有的语句块或遇到 `break` 为止

+ 三目运算符

  + 形式

    ```javascript
    expression1 ? expression2 : expression3
    ```

  + 规则

    + 如果 `expression1` 成立，则求 `expression2` 的值，否则求 `expression3` 的值

  + 可以很优美地代替一些不是很复杂的 `if` / `else` 语句

+ 短路逻辑

  + 会被转换为 `false` 的 表达有
    + `null`
    + `undefined`
    + `NaN`
    + `0`
    + 空字符串（`''` / `""` / ``(反引号)）
  + `&&`
    + 形式
      + `expression1 && expression2 && expression3 && ... && expressionN` 
    + 作用
      + 返回第一个可以转换为 `false` 的 `expression` 或 最后一个可以转换为 `true` 的 `expression`
    + 常见用法
      + `fn && fn()`
  + `||`
    + 形式
      + `expression1 || expression2 || expression3 || ... || expressionN`
    + 作用
      + 返回第一个可以被转换为 `true` 的 `expression` 或 最后一个可以转换为 `false` 的 `expression`
    + 常见用法
      + `A = A || B`

+ 循环

  + `while` 循环

    + 形式

        ```javascript
        while (expression) {
            statement
        }
        ```

    	只要 `expression` 可以被转换为 `true` ，那么就会不断的执行 `statement`
    
  + `for` 循环

      + 形式

          ```javascript
          for (initialization; condition; final-expression) {
          statement
          }
          ```

  + `break`
      + 跳出当前循环
  
  + `continue`
  
      + 跳过此次循环
  
+ `label`

  + 举例

    ```javascript
    let itemsPassed = 0
    let i, j
    top:
    for (i = 0; i < items.length; i ++) {
        for (j = 0; j < tests.length; j ++) {
            if (!tests[j].pass(items[i])) {
                continue top
            }
        }
        itemsPassed ++
    }
    ```

  + 类似与 `c` 的 `goto step` 中的 `step`