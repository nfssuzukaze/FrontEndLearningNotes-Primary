# flex 布局

在 `flex` 布局中, `flex` 子项设置的 `float` , `clear` , `vertical-align` 都没用

## HTML结构

```html
<div class="container">
    <div class="item"></div>
</div>
```

## 将容器标记为 flex 容器

```css
.container {
    display: flex;
    /* display: inline-flex; (inline 使用) */
}
```

这里将主轴方向视为行, 交叉轴方向视为列

## 作用在 flex 容器上的 CSS 属性

### 1. flex-direction

`flex-direction` 用来设置**主轴方向**, 是从左向右还是从右向左, 是从上向下还是从下向上

语法 : `flex-direction: row | row-reverse | column | column-reverse;`

属性值

+ `row` : 默认值, 设置 `flex` **主轴的方向为当前文本流方向**, 默认情况是从左向右
+ `row-reverse` : 设置 `flex` **主轴的方向与当前文本流方向相反**
+ `column` : 设置 `flex` 主轴的方向为**自上向下**
+ `column-reverse` : 设置 `flex` 主轴的方向为**自下向上**

### 2. flex-wrap

`flex-wrap` 用来控制子项整体是单行显示还是换行显示, 如果换行, 则下面一行是否反方向显示

语法 : `flex-wrap: nowrap | wrap | wrap-reverse;`

属性值

+ `nowrap` : 默认值, 表示单行显示, 不换行. 容易出现宽度溢出的现象
+ `wrap` : 宽度不足则换行
+ `wrap-reverse` : 宽度不足则换行, 然而第 `n + 1` 行会在第 `n` 行的上面

### 3. flex-flow

`flex-direction` 与 `flex-wrap` 的综合

语法 : `flex-flow: <'flex-direction'> || <'flex-wrap>';` 可以写两项, 也可以写任意一项

### 4. justify-content

`justify-content` 决定了**每行子项**的**分布方式**

语法 : `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;` 

属性值

+ `flex-start` : 默认值, 与 `flex` 容器主轴的方向有关, 所有子项都靠着**主轴起点**
+ `flex-end` : 与 `flex` 容器主轴的方向有关, 所有的子项都靠着**主轴终点**
+ `center` : 每行所有的子项都与**主轴中点**对齐
+ `space-between` : 将所有的间隙都平均分配在子项之间
+ `space-around` : 将每个子项的两边都分配同样大小的空间, 导致子项之间的距离是子项与边框之间的距离的一倍
+ `space-evenly` : 子项与子项之间的距离, 子项与边框之间的距离 完全相等

### 5. align-items

`align-items` 决定了子项在交叉轴上的对齐方式

语法 : `align-items: flex-start | flex-end | center | baseline | stretch;` 

属性值

+ `flex-start` : 每行的子项都靠着交叉轴的起点
+ `flex-end` : 每行的子项都靠着交叉轴的终点
+ `center` : 每行的子项都与**交叉轴中点**对齐
+ `baseline` : 子项的第一行文字的基线对齐
+ `stretch` : 默认值
  + 主轴水平时, 如果子项未设置高度或设置为 `auto` , 其高度将占满每行
  + 主轴竖直时, 如果子项未设置宽度或设置为 `auto` , 其宽度将占满每行

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="001" style="zoom:67%;" />


### 6. align-content

`align-content` 定义了**所有子项整体**在交叉轴上的对齐方式

语法 : `align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

属性值

+ `flex-start` : 子项整体靠着交叉轴的起点
+ `flex-end` : 子项整体靠着交叉轴的终点
+ `center` : 子项整体与交叉轴的中点对齐
+ `space-between` : 交叉轴方向的间隔都平均分布在每行之间
+ `space-around` : 每行的两边都分配同样大小的间隔, 所以行与行之间的间隙是行与边框之间的间隙的一倍
+ `stretch` : 默认值
  + 主轴水平时, 如果子项未设置高度或设置为 `auto` , 其高度将占满每行
  + 主轴竖直时, 如果子项未设置宽度或设置为 `auto` , 其宽度将占满每行

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="002" style="zoom:67%;" />


## 作用在flex子项上的属性

### 1. order

`order` 属性定义了子项的排列顺序, `order` 的值越小, 其越靠近主轴起点, 默认值是 0

语法 : `order: <integer>` (可以是正数 , 0 , 负数)

### 2. flex-grow

`flex-grow` 属性定义了子项对剩余空间的占有量, 默认为 0 (即不会占有剩余空间)

语法 : `flex-grow: <number>` (可以是小数) 

+ 所有剩余空间的总量是 1
+ 如果只有一个 `flex` 子项设置了 `flex-grow` 属性值
  + 如果 `flex-grow` 值小于 1 , 则该子项所占的空间为 `number / 1 * 空间大小`
  + 如果 `flex-grow` 值大于等于 1 , 则该子项占据所有的剩余空间
+ 如果有多个 `flex` 子项设置了 `flex-grow` 属性值
  + 如果 `flex-grow` 的总和小于 1 , 则每个对应子项占的空间为 `number / 1 * 空间大小`
  + 如果 `flex-grow` 的总和大于等于 1 , 则对应子项按比例划分剩余空间 (如: 三个子项的 `flex-grow` 的值分别为 1 , 2 , 1. 则第二个子项占据剩余空间的一半, 第一个和第三个子项各占 1/4)

### 3. flex-shrink

`flex-shrink` 属性定义了空间不足时, 子项缩小的比例, 默认值是 1

语法 : `flex-shrink: <number>` (可以是小数 , 不可以是负数)

+ 被缩减的空间总量是 1
+ 如果只有一个 `flex` 子项设置了 `flex-shrink` 属性值
  + 如果 `flex-shrink` 的值小于 1 , 则该行的缩减不完全, 会有溢出
  + 如果 `flex-shrink` 的值大于等于 1 , 则缩减完全
+ 如果有多个 `flex` 子项设置了 `flex-shrink` 属性值
  + 如果 `flex-shrink` 的总和小于 1 , 则每个对应子项缩减的空间为 `number / 1 * 空间大小` , 且缩减不完全, 会有溢出
  + 如果 `flex-shrink` 的总和大于等于 1 , 则按比例缩减, 缩减完全

### 4. flex-basis

当一个元素同时被设置了 `flex-basis` (除值为 `auto` 外) 和 `width` (或者在 `flex-direction: column` 情况下设置了 `height` , `flex-basis` 具有更高的优先级)

`flex-basis` 属性定义了某个子项在主轴方向上的初始大小 ( 这个大小是弹性的 , 如果有足够的空间就给足 , 而如果没有足够的空间 , 则是能给多少给多少 ) ; 在赋予了足够指定的空间后, 若剩余空间还有富余 , 则会按照 `flex-grow` 分配

语法 : `flex-basis: <length> | auto` 

### 5. flex

`flex` 是 `flex-grow` , `flex-shrink` , `flex-basis` 的缩写

语法 

+ 单值语法 : 
  + 一个无单位数(`<number>`) : 会被当做 `<flex-grow>` 的值
  + 一个有效的宽度(`width`)值 : 会被当做 `<flex-basis>` 的值
  + 关键字 `none(相当于0 0 auto)` , `auto(相当于1 1 auto)` 或 `initial(相当于0 1 auto)`
+ 双值语法 : 第一个值是 `<flex-grow>` , 第二个值为以下之一
  + 一个无单位数(`<number>`) : 会被当做 `<flex-shrink>` 的值
  + 一个有效的宽度值 : 会被当做 `<flex-basis>` 的值
+ 三值语法 : 
  + 第一个值是 `<flex-grow>`
  + 第二个值是 `<flex-shrink>`
  + 第三个值是 `<flex-basis>`

### 6. align-self

`align-self` 与 `align-items` 一样