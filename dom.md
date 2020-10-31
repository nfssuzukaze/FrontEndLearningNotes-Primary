+ `ParentNode.children` : 返回一个 `Node` 的子 `elements` ，是一个**动态更新**的 `HTMLCollection` （即获取的伪数组会动态更新）
+ `template` : 常用于包含任意标签的标签
  + 其中有一个 `DocumentFragment` （`template.content`），存储由 `nodes` 组成的文档结构，且其不是真实 `dom` 树的一部分，其变化不会触发 `dom` 树的重新渲染，且不会导致性能问题
    + 最常用的方法是使用文档片段作为参数（例如，任何 `Node` 接口类似 `Node.appendChild` 和 `Node.insertBefore` 的方法），这种情况下被添加（append）或被插入（inserted）的是片段的所有子节点, 而非片段本身。因为所有的节点会被一次插入到文档中，而这个操作仅发生一个重渲染的操作，而不是每个节点分别被插入到文档中，因为后者会发生多次重渲染的操作。
    + 可以使用[`document.createDocumentFragment`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment) 方法或者构造函数来创建一个空的 `DocumentFragment`。
    + `DocumentFragment` 没有 `innerHTML` 属性
+ `childNode` ：childNode.remove() 移除该节点
+ 当 `Number` 为小于 `2^31 - 1` 的整数时，`Number` 为 32 位 `int` 类型，当 `Number` 为浮点数类型或 `Number` 的值大于 `2^31 - 1` 时，`Number` 为 64 位 `IEEE754` 双精度浮点数
  + 证明：
    + `Number` 不能精准表示 `2^53` 以上的整数
    + `Number` 大于 `2^31 - 1` 时，不能正常使用位运算，而 `Number` 小于 `2^31 - 1` 时却可以