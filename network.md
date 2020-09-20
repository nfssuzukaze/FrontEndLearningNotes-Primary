使用 `node server.js 8888` 运行名为 `server.js` 的 `nodejs` 代码, 并监听 `8888` 端口

HTTP 基础概念

+ 请求

  ```
  Request Headers
  POST / HTTP/1.1    请求动词 路径+查询参数 协议名/版本
  Host: localhost:8888    域名或IP
  Accept: text/html    用来告知客户端可以处理的内容类型
  Content-type: application/x-www-form-urlencoded    请求体的格式
  (这是个回车) 
  (请求体)
  ```
