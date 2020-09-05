## 1. 层叠上下文

`z-index` 只有在成为层叠上下文时有效

`img` 是 `inline 元素`

### 1. 将普通元素变为层叠上下文元素(常用方法)

1. 令某元素 `position: relative | absolute;` 且使该元素 `z-index: <integer>;` , 则该元素就会成为层叠上下文元素
2. 令某元素 `position: fixed | sticky;` , 则该元素就会成为层叠上下文元素
3. 令父元素的 `display: flex | grid;` , 令子元素的 `z-index: <integer>;` , 则 `z-index: <integer>` 的子元素就会成为层叠上下文元素
4. 令某元素 `opacity: <number>; (number < 1)` , 则该元素就会成为层叠上下文元素
5. 令某元素的 `transform` 属性值不为 `none` , 则该元素就会成为层叠上下文元素

### 2. 当一个元素为层叠上下文元素时



+ 当两个元素处于同一个层叠上下文元素中, 且 `z-index` 的值相同时, 在 DOM 流中处于后面的元素 `z值` 更大, 且 **`z值` 更大的元素中所有子元素都有能力覆盖掉 `z值` 较小的元素中的所有子元素**

  ```html
  <div class="container">
      <div class="inner1">
          <div></div>
      </div>
      <div class="inner2">
          <div></div>
      </div>
  </div>
  ```

  ```css
  .container {
    height: 300px;
    width: 500px;
    background-color: lightgreen;
    display: flex;
  }
  
  [class^="inner"] {
    height: 100px;
    width: 100px;
    z-index: 1;
  }
  
  [class^="inner"] > div {
    height: 60px;
    width: 60px;
  }
  
  .inner1 {
    background-color: yellow;
  }
  
  .inner1 > div {
    background-color: blue;
  }
  
  .inner2 {
    background-color: orange;
    margin-left: -65px;
  }
  
  .inner2 > div {
    background-color: red;
  }
  ```

  