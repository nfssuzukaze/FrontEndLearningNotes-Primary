## 跨域

### 1.1 同源策略

#### 1.1.1 源

+ 源 = 协议 + 域名 + 端口号（由于 `http` 和 `https` 有默认端口号，所以一般不显示）

+ 查看当前网页的源：
  + 在控制台使用 `window.origin` 或 `location.origin` 可以获得当前的源

只有当 `协议` ，`域名` ，`端口号` 三者都完全一致时，那么这两个 `url` 就是同源的

例如 `https://www.google.com` 和 `https://google.com` 就是不同源的

`https://google.com` 和 `http://google.com` 也不是同源的

而 `https://example1.com/index01.html` 和 `https://example1.com/index02.html` 则是同源的

### 1.2 同源策略定义

#### 1.2.1 浏览器的规定

浏览器规定如果 JS 运行在源 A 里，那么就只能获取源 A 的数据，而不能获取其他源的数据

就例如在 `example1.com/index.html` 中，若引用了 `main.js` ，而 `main.js` 中又请求了 `example2.com` 一些数据，如果没有跨域的话，这个请求是不会成功的（文件被成功下载，但是在从浏览器获取的时候被浏览器阻止了）

#### 1.2.2 为什么会有同源策略

访问一个需要账号的网站时（例如网页版微信），该帐号的一些数据只能被指定的源请求；而如果没有同源策略的话，那么通过其他的源也能请求到同样的数据，如果有人想要获取也是轻而易举的事情。

### 1.3 如何实现跨域

#### 1.3.1 CORS

后台在响应头上添加允许某源可以访问，以 `node.js` 为例

```javascript
response.setHeader("Content-Type", "application/json;charset=utf-8") 
response.setHeader("Access-Control-Allow-Origin", "https://example2.com") // 允许跨域
```

#### 1.3.2 JSONP

在需要请求的服务器后台中添加一个 `javascript` 文件，将数据放入该 `javascript` 文件中，然后通过引用该文件来获取数据

```javascript
// interviewer getData.js ========================================================
const random = Math.random()
window[random] = (data) => {console.log(data)}
// 生成随机的函数名，防止起冲突
const script = document.createElement('script')
script.src = `https://interviewee.com/data.js?functionName${random}`
// 将能够获取数据的函数名通过查询参数告知 interviewee，使其 js 文件中输出数据的函数名与此一致
script.onload = () => {script.remove()}
// 一旦 script 装载完成，获取了数据，就移除该 script 标签
document.body.appendChild(script)
// 通过请求能够引用的 js 文件来引用获取数据
```

```javascript
// interviewee server.js =========================================================
if (request.headers['origin'] === 'http://interviewer.com') {
    // 仅当指定的源访问的时候才提供 data.js 文件
    response.statusCode = 200
    response.write(fs.readFileSync('./data.js').toString().replace('{{data}}', fs.readFileSync('./data.json').toString()).replace('{{callback}}', query.callback))
	// 通过在 data.js 中设置占位符来插入 data.json 的数据
} else {
    response.statusCode = 404
}

// interviewee data.js ============================================================
window['{{callback}}']('{{data}}')
// 当 interviewer 将该 js 文件插入到 html 中的 body 后，就可以立即打印出数据
```

优点：支持 IE，可以跨域

缺点：无法知道状态码，由于是 `script` 标签，所以不支持 `POST` 