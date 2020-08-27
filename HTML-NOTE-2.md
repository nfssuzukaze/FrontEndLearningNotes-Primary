# HTML 常用标签

## a 标签

```html
<a href="//google.com" target="_blank"></a>
```



属性: 

+ `href (hyper reference)` : 超链接
  + `href` 的值 : 
    + 网址
      + `https://google.com` 
      + `http://google.com` 
      + `//google.com` 能够自动选择适用 `https` 或 `http` , 不会出错
    + 路径
      + `/a/b/c.html` 以及 `a/b/c.html` , 在 `http` 中, 在哪里开的服务, 哪里就是根目录
      + `index.html` 
    + 伪协议
      + `javascript:code;` 
        + 点击该 `a` 标签, 会执行这段 `js` 代码
        + 若不写 `code` , 则点击该 `a` 标签, 则什么都不会做 (其它的方法都不可以, 如设置 `href` 的值为空, 则点击 `a` 标签会刷新该页面; 若设置 `href` 的值为 `#` , 则点击 `a` 标签, 页面会自动滚到顶部)
      + `mailto:邮箱`
      + `tel:手机号`
    + id
      + `href="#xxx"` : 跳转到 `id` 值为 `xxx` 的位置
+ `target` : 控制超链接是从当前页面打开还是从新建页面打开
  + `target` 的值 :
    + 内置名字
      + `_blank` : 在新的页面打开
      + `_top` : 在整个页面打开, 例如, 在一个页面中有一个 `iframe` 窗口, 而这个 `iframe` 窗口里面的一个 `a` 标签 的 `target` 的值是 `_top` , 则点开这个 `a` 标签, 并不是在 `iframe` 窗口内进行跳转, 而是整个页面都在进行跳转
      + `_parent` : 在其上级窗口进行页面跳转
      + `_self` : 在当前页面打开
    + 任意随机名字(假设是 `xxx` ) : 点击 `a` 标签, 若该浏览器中并没有一个名为( `window.name === "xxx"` ) `xxx` 的窗口, 则浏览器会打开一个新的窗口, 并将该窗口的名字命名为 `xxx` , 若该浏览器中有一个名为 `xxx` 的窗口, 则会在这个窗口进行页面跳转
+ `download` 
+ `rel=noopener`



## table 标签

```html
<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    <tfoot></tfoot>
</table>
```



+ 相关的标签
  + `thead` : 整个表单的最上面一段
  + `tbody` : 整个表单的中间一段
  + `tfoot` : 整个表单的最下面一段
  + `tr (table row)` : 表单的一行
  + `th (table head)` : 表头, 项目名
  + `td (table data)` : 表数据, 项目数据
+ 相关的样式
  + `table-layout` : 
    + 值为 `auto` : 表格及单元格的宽度取决于其包含的内容
    + 值为 `fixed` : 表格和列的宽度通过表格的宽度来设置, 某一列的宽度仅由该列首航的单元格决定
  + `border-collapse` : 
    + 值为 `collapse` : 相邻的单元格共用同一条边框
    + 值为 `swparate` : 每个单元格都有独立的边框
  + `border-spacing` : 表示边框与边框的距离



## img 标签

```html
<img alt="这是一张图片" height="400px" src="image.jpg">
```



+ 作用: 发出 get 请求, 展示一张图片
+ 属性:
  + `alt` : 当图片加载失败时, 会显示 `alt` 的内容
  + `height & width` : 设置图片的宽度与高度, 若只设置一项, 则另一项会自适应
  + `src` : 图片的地址



## form 标签

```html
<form>
    用户名: <input type="username">
    <br>
    密码: <input type="password">
    <br>
    <button type="submit">
        <strong>提交</strong>
    </button>
</form>
```



+ 作用: 发 get 或 post 请求, 然后刷新页面
+ 属性: 
  + `method` : 请求的方法
    + `POST` : `HTTP POST` 方法; 表单数据往往被包含在表单体内然后发送给服务器
    + `GET` : `HTTP GET` 方法; 表单数据会附加在 `action` 属性的 `URL` 中, 并以 `?` 作为分隔符
    + `dialog` : 如果表单在 `<dialog>` 元素中, 提交时关闭对话框
  + `action` : 处理表单提交的 `URL` 
  + `autocomplete` : 用于指示 `input` 元素是否能够拥有一个默认值, 此默认值是由浏览器自动补全的, 此设定可以被属于此表单的子元素的 `autocomplete` 属性覆盖
    + `off` : 浏览器可能不会自动补全条目
    + `on` : 浏览器可自动补全条目
  + `target` : 表示在提交表单之后, 在哪里显示响应信息
    + `_self` : 默认值, 在相同浏览上下文中加载
    + `_blank` : 在新的未命名的浏览上下文中加载
    + `_parent` : 在当前上下文的父级浏览上下文中加载, 如果没有父级, 则与 `_self` 表现一直
    + `_top` : 在最顶级的浏览上下文中加载, 若没有父级, 则与 `_self` 表现一致



`input` 不支持其他的标签, 只能有纯文本, 而 `button` 里面可以有其他任何东西