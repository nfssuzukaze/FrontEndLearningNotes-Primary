## 浏览器的事件模型

所谓的浏览器事件模型就是指：

**通过监听函数对事件作出反应，事件发生后，浏览器监听到了这个事件的发生，就会执行对应的监听函数**

### 1. 监听函数的设置

**设置监听函数有三种方法：**

1. **HTML 的 on-事件** 

   在 `HTML` 中通过事件监听属性 **'on-' + 事件名** 来设置监听函数

   一旦事件触发，`on-事件名` 属性的值将会被传入 `javascript` 引擎执行

   **缺点：违反了 HTML 与 JavaScript 相分离原则**

   ```html
   <div onclick="func()"></div>
   <!-- 此时为该 div 设置的就是 点击事件属性 -->
   <!-- 当该点击事件被触发时，就会将 func() 传入 javascript 引擎执行 -->
   ```

2. **元素节点的事件属性** 

   可以为元素节点的对象属性设置监听函数

   **缺点：只能为一个事件设置一个监听函数，若设置多个，则以最后那个为准**

   ```javascript
   div.onclick = fn
   div.onclick = func
   // 当该 div 的事件被触发时，就会执行 func 函数
   ```

3. **EventTarget.addEventListener()**

   通过为节点设置 `addEventListener` 函数可以为其对应任意事件设置监听函数

   ```javascript
   div.addEventListener('click', () => console.log(1), false)
   div.addEventListener('click', () => console.log(2), false)
   // 为该 div 元素监听点击事件，当点击事件被触发时，就会在冒泡阶段执行函数，输出 1 和 2
   ```

**若监听函数并不是 ES6 函数，则其 this 为对应触发事件的节点元素** 

### 2. 事件的传播

当一个事件被触发后，其祖先若也监听了相同事件的话，其祖先也会触发该事件对应的监听函数

**事件的传播分为三个阶段**：

1. **从 window 对象到目标节点，称为 “捕获阶段” ** 
2. **在目标节点触发，称为 “目标阶段” ** 
3. **从目标节点到 window 对象，称为 “冒泡阶段” ** 

```html
  <div id=d1>
    <div id="d2">
   	  <div id="d3"></div>
    </div>
  </div>
```

```javascript
d1.addEventListener('click', ()=>console.log(1), true)
d2.addEventListener('click', ()=>console.log(2), true)
d3.addEventListener('click', ()=>console.log(3), true)
d1.addEventListener('click', ()=>console.log(11), false)
d2.addEventListener('click', ()=>console.log(22), false)
d3.addEventListener('click', ()=>console.log(33), false)
// 当点击 d3 元素时，控制台输出 1 2 3 33 22 11
// 其中，1 2 是捕获阶段输出的，3 33 是目标阶段输出的，22 11 是冒泡阶段输出的
```

注意：**若事件只在目标节点上触发，则设置监听函数时，该监听函数对应的执行阶段是捕获还是冒泡对监听函数执行的先后并没有影响，函数执行的先后由设置函数的先后决定**

#### stopPropagation 与 preventDefault

**stopPropagation 阻止冒泡而不阻止默认事件**

**preventDefault 阻止默认事件而不阻止冒泡**

所谓的默认事件就是对某个事件进行触发后，浏览器的默认行为，如

+ 点击一个链接，会跳转到 url 对应的页面
+ 在文本框键入字符，字符会输入到文本框中
+ 在文本上按下鼠标左键并移动，会选中文本

```javascript
inner.addEventListener('contextmenu', (e) => {
    console.log("event1")
    e.preventDefault()
})
mid.addEventListener('contextmenu', (e) => {
    console.log("event2")
    e.stopPropagation()
})
container.addEventListener('contextmenu', (e) => {
    console.log("evnet3")
})
// 在 inner 上点击鼠标右键，并没有调出菜单栏，而输出了 event1 和 event2，并没有输出 event3
// 说明在 inner 上阻止了默认事件的触发，而没有阻止事件的冒泡
// 在 mid 上点击鼠标右键，可以调出菜单栏，而输出了 evnet2，并没有输出 event3
// 说明在 mid 上阻止了事件继续向上冒泡，而并没有阻止默认事件的触发
```

### 3. 事件的代理

当需要为大量的节点设置同一监听函数时，可以将该监听函数设置在其祖先节点上，每当该祖先节点的后代节点的某一事件被触发时，由该祖先节点的监听函数来对后代节点触发的事件进行处理。这样不仅能够节省为大量后代节点设置监听器所占用的内存，而且也能对动态生成的节点起作用

```javascript
// 为 element 元素设置 eventType 事件，并当其子元素 selector 被点击的时候，将子元素的事件传入 callback 函数并执行
function on(eventType, element, selector, callback) {
    if (!(element instanceof Element)) {
        element = document.querySelector(element)
    }
    element.addEventListener(eventType, (e) => {
        const t = e.target
        if (t.matches(selector)) {
            callback(e)
        }
    })
}
```

```javascript
// 当子元素 selector 的后代元素被触发某事件时，将后代元素被触发事件传入 callback 函数并执行
function on(eventType, element, selector, fn) {
    if (!(element instanceof Element)) {
        element = document.querySelector(element)
    }
    element.addEventListener(eventType, e => {
        let t = e.target
        while (!t.matches(selector)) { // 如果 t 能够匹配传入的 selector
            if (t === element) {
                t = null
                break
            }
            t = t.parentNode
        }
        t && fn.call(t, e, t)
    })
}
```

