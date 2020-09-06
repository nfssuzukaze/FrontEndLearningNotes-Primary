+ + # 1. transform

    ## 1.1 translate

    + `translateX(<length-percentage>)` : 正方向自左向右
      + 其中 `<percentage>` 的参考是该元素的宽度
    + `translateY(<length-percentage>)` : 正方向自上向下
      + 其中 `<percentage>` 的参考是该元素的高度
    + `translateZ(<length>)` : 方向自屏幕里向屏幕外
      + 需要给父元素设置 `perspective` 才会显示出效果(从某点观看)
    + `translate(<length-percentage> , <length-percentage>?)` : `translate X, Y, Z` 的结合体
      + 若有一个参数, 则代表 `translateX`
      + 若有两个参数, 则第一个是 `translateX` , 第二个是 `translateY`
      + 若有三个参数, 则第一个是 `translateX` , 第二个是 `translateY` , 第三个是 `translateZ`

    由 `translate(-50%, -50%)` 可以做到绝对定位元素的居中

    ```html
    <div>
        <div></div>
    </div>
    ```

    ```css
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body > div {
      margin: 20px;
      height: 200px;
      width: 600px;
      background-color: grey;
      position: relative;
    }
    
    div > div {
      height: 50px;
      width: 80px;
      background-color: yellow;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
    ```

    ![001](https://user-images.githubusercontent.com/70133960/92322465-eb664c80-f063-11ea-84fa-877fd761048d.png)

    ## 1.2 scale

    + `scaleX(<number>)` 将元素在 `x轴` 方向上进行缩放, `<number>` 指的是相对于原来的倍数
    + `scaleY(<number>)` 将元素在 `y轴` 方向上进行缩放, `<number>` 指的是相对于原来的倍数
    + `scale(<number> , <number>?)`
      + 若有一个参数, 则代表 `scaleX`
      + 若有两个参数, 则第一个是 `scaleX` , 第二个是 `scaleY`
      + 若有三个参数, 则第一个是 `scaleX` , 第二个是 `scaleY` , 第三个是 `scaleZ`

    ## 1.3 rotate

    + `rotate(<angle>) | rotateZ(<angle>)` : 绕 `z轴` 旋转, 若值为正, 则顺时针旋转, 否则逆时针旋转
    + `rotateX(<angle>)` : 绕 `x轴` 旋转, 若值为正, 则顺时针旋转, 否则逆时针旋转
    + `rotateY(<angle>)` : 绕 `y轴` 旋转, 若值为正, 则顺时针旋转, 否则逆时针旋转

    由 `rotate` 可用于制作旋转 loading

    ## 1.4 skew

    + 初始状态: 

      ![skew](https://user-images.githubusercontent.com/70133960/92322489-0d5fcf00-f064-11ea-89c8-d87ecf0f3ebd.png)


    + `skewX(<angle>)` : 
    ![skewX](https://user-images.githubusercontent.com/70133960/92322492-13ee4680-f064-11ea-8604-fd4a7f28c62a.png)

    + `skewY(<angle>)` : 
    ![skewY](https://user-images.githubusercontent.com/70133960/92322496-1a7cbe00-f064-11ea-8973-6dad77559845.png)

    + `skew(<angle> , <angle>?)` : 
    ![skewXY](https://user-images.githubusercontent.com/70133960/92322558-91b25200-f064-11ea-8716-411374d7afcb.png)

      + 若有一个参数, 则代表 `skewX` 
      + 若有两个参数, 则第一个是 `skewX` , 第二个是 `skewY` 

    # 2. transition

    语法 : `transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay]` 

    + `transition-property` : 有渐变需求的属性, 可以写如 `right-margin` , `padding` 之类详细的属性, 也可以写 `all` 来直接代称所有属性
    + `transition-duration` : 指定渐变的时间, 可以是秒 `s` , 可以是毫秒 `ms` 
    + `transition-timing-function` : 渐变的速度
      + `ease` : ![01](https://developer.mozilla.org/files/3429/cubic-bezier,ease.png)
      + `linear` : ![02](https://developer.mozilla.org/files/3425/cubic-bezier,linear.png)
      + `ease-in` : ![03](https://developer.mozilla.org/files/3426/cubic-bezier,ease-in.png)
      + `ease-out` : ![04](https://developer.mozilla.org/files/3427/cubic-bezer,ease-out.png)
      + `ease-in-out` : ![05](https://developer.mozilla.org/files/3428/cubic-bezier,ease-in-out.png)
      + `step-start` : 在改变属性, 触发 `transition` 时, 直接跳到指定状态
      + `step-end` : 在改变属性, 触发 `transition` 开始, 经过 `transition-duration` 后, 直接跳到指定状态
    + `transition-delay` : 渐变的延迟

    # 3. animation

    语法 : `animation: [animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-direction] [animation-iteration-count] [animation-fill-mode] [animation-play-state]`

    + `<animation-name> = <keyframes-name> ` 
    + `animation-duration` : 与 `transition-duration` 类似
    + `animation-timing-function` : 与 `transition-timing-function` 类似
    + `animation-delay` : 与 `transition-delay` 类似
    + `animation-direction` : 用于指示动画是否反向播放
      + `normal` : 动画向前循环, 每当动画循环结束, 便回到初始状态
      + `alternate` : 动画交替反向运行, 从 1 状态变成 2 状态是一次循环, 从 2 状态变回 1 状态又是一次循环, 结束时回到初始状态
      + `reverse` : 动画从尾到头运行
      + `alternate-reverse` : 动画从结束的状态开始, 交替反向运行
    + `animation-iteration-count` : 循环次数
    + `animation-fill-mode` : 
      + `none` (默认值)
      + `forwards` : 动画结束时, 将保留最后一帧的状态
      + `backwards` : 动画生效时, 直接将第一帧应用到目标上(在 `animation-delay` 开始之前)
    + `animation-play-state` : 设置动画运行和暂停
      + `running` 
      + `pause` 