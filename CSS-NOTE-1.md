不要在 `inline` 元素中添加 `block` 元素

`div` 的宽度是默认能有多宽有多宽, 是 `width=auto` 而不是 `width=100%`, `div` 默认高度为 0

`span` 宽度默认为 0, 高度由 `line_height` 所决定

`content-box` 的 `width` 只包含 `content` , `border-box` 的 `width` 包含 `border`

`margin` 重叠: 

+ 上下重叠
  + `block` 元素的 `margin` 会上下合并, 而 `inline-block` 则不会
  + 第一个子元素和最后一个子元素的 `margin` 会与其父元素的 `margin` 合并
    + 解决方法: 
      1. 给父元素加 `border` 属性
      2. 给父元素加 `padding` 属性
      3. 给父元素设置 `overflow: hidden` 
+ 左右不重叠



