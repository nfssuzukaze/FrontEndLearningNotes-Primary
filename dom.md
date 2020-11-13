+ `ParentNode.children` : 返回一个 `Node` 的子 `elements` ，是一个**动态更新**的 `HTMLCollection` （即获取的伪数组会动态更新）
+ `template` : 常用于包含任意标签的标签
  + 其中有一个 `DocumentFragment` （`template.content`），存储由 `nodes` 组成的文档结构，且其不是真实 `dom` 树的一部分，其变化不会触发 `dom` 树的重新渲染，且不会导致性能问题
    + 最常用的方法是使用文档片段作为参数（例如，任何 `Node` 接口类似 `Node.appendChild` 和 `Node.insertBefore` 的方法），这种情况下被添加（append）或被插入（inserted）的是片段的所有子节点, 而非片段本身。因为所有的节点会被一次插入到文档中，而这个操作仅发生一个重渲染的操作，而不是每个节点分别被插入到文档中，因为后者会发生多次重渲染的操作。
    + 可以使用`document.createDocumentFragment` 方法或者构造函数来创建一个空的 `DocumentFragment`。
    + `DocumentFragment` 没有 `innerHTML` 属性
+ `childNode` ：childNode.remove() 移除该节点
+ 当 `Number` 为小于 `2^31 - 1` 的整数时，`Number` 为 32 位 `int` 类型，当 `Number` 为浮点数类型或 `Number` 的值大于 `2^31 - 1` 时，`Number` 为 64 位 `IEEE754` 双精度浮点数
  + 证明：
    + `Number` 不能精准表示 `2^53` 以上的整数
    + `Number` 大于 `2^31 - 1` 时，不能正常使用位运算，而 `Number` 小于 `2^31 - 1` 时却可以

---

+ `Document`
  + 常用方法：
    + `document.createElemenet(tagName)` : 以标签名创建一个新的元素
    + `document.querySelector(selectors)` : 通过 `CSS 选择器字符串` 获取文档中第一个与其匹配的元素（`HTMLElement`），若没有匹配到，则返回 `null`
    + `document.querySelectorAll(selectors)` : 通过 `CSS 选择器字符串` 获取文档中所有与其匹配的元素的集合（一个伪数组）
+ `Node` 
  + 属性
    + 只读	
      + `Node.parentNode` : 返回该节点的父节点 `Node` 
      + `Node.parentElement` : 返回该节点的父节点 `Element`
      + `Node.childNodes` : 返回包含了该节点所有子节点的**动态伪数组** `NodeList`
      + `Node.firstChild` : 返回该节点的第一个子节点 `Node` 
      + `Node.lastChild` : 返回该节点的最后一个子节点 `Node` 
      + `Node.nextSibling` : 返回该节点的下一个兄弟节点 `Node` 
      + `Node.previousSibling` : 返回该节点的上一个兄弟节点 `Node` 
      + `Node.nodeType` : 返回与该节点类型对应的值，常用来检测是 `text` 节点（ `Node.nodeType === Node.TEXT_NODE` ）还是 `element` 节点（ `Node.nodeType === Node.ELEMENT_NODE` ）
      + `Node.textContent` 
      + `Node.children` : 返回一个 `Node` 的子 `elements` 
  + 方法
    + `node.appendChild(childNode)` ：将 `childNode` 插入到 `node` 的末尾
    + `node.cloneNode(deep?)` : 克隆一个该 `node` 并返回，`deep` 为 `true` 会克隆子节点（默认为 `true` ），`deep` 为 `false` 时，不克隆子节点
    + `node1.contains(node2)` : 查看 `node2` 节点是否是 `node1` 节点的后代节点
    + `node.insertBefore(newNode)` : 在 `node` 节点前插入 `newNode` 
    + `parentNode.removeChild(childNode)` : 从 `parentNode` 中移除 `childNode` 
  + `parentNode.replaceChild(newChild, oldChild)` : 以 `newChild` 替换 `oldChild` ，返回被替换的 `oldChild`
  
+ `Element`
  + 属性
    + `Element.classList` : 返回该元素包含的 `class` 属性
    + `Element.className` : 对应元素的 `class` 属性
    + `Element.innerHTML` : 返回这个元素的内容文本
    + `Element.tagName` : 返回该元素的标签名
  + 方法
    + `element.querySelector(cssSelector)` : 从 `element` 节点中寻找是否有能与 `cssSelector` 匹配的元素 `Element` 
    + `EventTarget.addEventListener()`
    + `EventTarget.removeEventListener()` 