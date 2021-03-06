var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

    const finalPath = path === '/' ? '/index.html' : path
    const hash = {
        "html": 'text/html',
        "css": 'text/css',
        "js": 'text/javascript',
        "json": 'application/json'
    }
    let content
    try {
        content = fs.readFileSync(`./public${finalPath}`).toString()
        response.statusCode = 200
    } catch(error) {
        content = 'no such file'
        response.statusCode = 404
    }
    response.setHeader('Content-Type', `${hash[finalPath.slice(finalPath.search(/(?<=\.).*/))] || 'text/html'};charset=utf-8`)
    if (finalPath.indexOf('friends.js') >= 0 && request.headers['referer'].indexOf('http://localhost:8888') === 0) {
        content = content.replace('{{data}}', fs.readFileSync('./public/xxx.json').toString()).replace('{{functionName}}', query.functionName)
    }
    // response.setHeader('Access-Control-Allow-Origin', '*') // CORS any origin
    // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888') // CORS particular origin
    response.write(content)
    response.end()

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

