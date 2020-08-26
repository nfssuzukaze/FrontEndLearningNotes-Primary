# HTML 入门笔记1

> www 的创造者 **Tim Berners Lee** 发明了 HTML 标签

在写 HTML 时, 最初要写的大多是如下代码

```html
<!DOCTYPE html>
<!-- 向编辑器说明该文本是 HTML 类型 -->
<html lang="zh-CN">
<!-- 该 HTML 文档的根标签, 同时说明该文档的语言为中文 -->
<head>
<!-- head 标签, 规定与文档相关的配置信息 -->
    <meta charset="UTF-8">
    <!-- 将该文档的字符编码集设置为 UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 使该 HTML 页面兼容手机, 将页面宽度设置为跟随屏幕宽度, 并将缩放级别设置为 1.0 -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 告诉 IE 使用 edge 内核 -->
    <title>Document</title>
    <!-- 设置该网页的标题 -->
</head>
<body>
<!-- 用来容纳文档的具体内容 -->
</body>
</html>
```

常用的表示章节的标签有:

+ 标题标签: `h1~h6`
+ 章节标签: `section`
+ 文章标签: `article`
+ 段落标签: `p`
+ 头部标签: `header`
+ 脚部标签: `footer`
+ 主要内容: `main`
+ 旁支内容: `aside`
+ 用于划分: `div`

全局属性有:

+ `class` : 允许 CSS 和 Javascript 通过类选择器或DOM方法来选择和访问特定的元素
+ `contenteditable` : 表示元素是否可以被用户编辑 ( `true` 表示可以被编辑, 而 `false` 表示不能被编辑)
+ `hidden` : 用于隐藏内容
+ `id` : 与 `class` 类似
+ `style` : 用于写 `css` 
+ `tabindex` : 指示元素是否可以获取输入焦点, 是否应该参与顺序键盘导航
  + 负值表示该元素可以聚焦, 但不应该通过顺序键盘导航到达
  + `0` 表示元素应通过顺序键盘导航可聚焦和可到达, 一般是最后一个
  + 正值, 可通过顺序键盘导航可聚焦和可到达, 值越大, 越后聚焦
+ `title` : 包含与所属元素相关信息的文本

常用的内容标签有:

+ `ol (ordered list) + li (list item)` : 有序列表
+ `ul (unordered list) + li (list item)` : 无序列表
+ `dl (description list) + dt (description term) + dd (description data)`
+ `pre` : 保留标签内的 `空格` `回车` 和 `tab`
+ `hr (horizon)` : 水平分界线
+ `br (break)` : 换行标签
+ `a (anchor)` : 可以创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。
+ `em (emphasis)` : 用于强调内容
+ `strong` : 用于表示内容本身很重要
+ `code` : 标签内的内容字体等宽
+ `q (quote)` : 内联级别引用
+ `blockquote` : 块级引用

