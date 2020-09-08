# 浅析 URL

## 1. URL

1. URL 指的是统一资源定位符 (Uniform Resource Locator)

   URL 是一个给定的独特资源在 Web 上的地址

2. 给出一个完整的绝对 URL

   ```
   https://developer.mozilla.org:443/zh-CN/docs/Learn/Common_questions/What_is_a_URL?key1=value1&key2=value2#如何使用URL
   ```

   + 其中, `https` 是协议( `Protocol` ), 它表明了浏览器必须使用何种协议. 通常都是 HTTP 协议或是 HTTP 协议的安全版, 即 HTTPS.
   + `developer.mozilla.org` 是域名( `Domain Name` ), 它表明正在请求哪个服务器. 或者直接使用其对应的 IP 地址也可以, 但是使用 IP 不是很方便, 就导致其不经常在网络上使用
   + `:443` 是端口( `Prot` ), 如果 Web 服务器使用 HTTP 协议的标准端口 (HTTP 为 80 , HTTPS 为 443) 来授予其资源的访问权限, 则通常可以被忽略, 否则端口号的标注是必须的
   + `/zh-CN/docs/Learn/Common_questions/What_is_a_URL` 是路径( `Path to the file` ), 它表示网络服务器上某资源的路径. 如果只有 `/` 的话, 说明是该网络服务器的根目录
   + `?key1=value1&key2=value2` 是查询参数( `Parameters` )
   + `#如何使用URL` 是锚点( `Anchor` ), 在 HTML 文档上, 浏览器将滚动到定义锚点的位置

## 2. DNS

1. DNS 指的是域名系统( `Domain Name System` )

   DNS 维护着一个包含域名与对应资源(例如 IP 地址) 的列表, 其最突出的功能是将易于记忆的域名翻译成数字化的 IP 地址, 这一从域名到 IP 地址的映射过程被称为 DNS 查询( `DNS lookup` ), 与之相反, DNS 反向查询( `rDNS`  )用来找到与 IP 地址对应的域名

   当我们使用 `nslookup domain` 时, 可以获得对应的 IP 地址

## 3. IP

每个设备都有其独有的 IP 地址, 通过 IP , 我们可以知道我们的信息和行为是否能够成功地发出去, 能否收到外界的信息

当我们使用 `ping domain` 时, 我们可以得知本机与网络中的另一主机是否能够建立连接

## 4. Domain

任何连上互联网的终端都可以通过 IP 地址访问到, 对于 IPV4 来说, 地址有 32 位, 对于 IPV6 来说, 地址有 128 位. 过长的 IP 地址难以记忆. 为了解决这个问题, 出现了方便记忆的地址: 域名( `Domain` )

域名有顶级域名: `com`

二级域名: `xxx.com`

三级域名: `www.xxx.com`

它们是父子关系