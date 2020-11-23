// const random = Math.random()
// window[`${random}`] = (data) => {console.log(data)}
//
// const script = document.createElement('script')
// script.src = `http://localhost:9999/friends.js?functionName=${random}`
// script.onload = () => {
//     script.remove()
// }
// document.body.appendChild(script)

// jsonp = (url) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.random()
//         window[`${random}`] = data => {resolve(data)}
//         const script = document.createElement('script')
//         script.src = `${url}?functionName=${random}`
//         script.onload = () => {script.remove()}
//         script.onerror = () => {reject()}
//         document.body.appendChild(script)
//     })
// }
// jsonp('http://localhost:9999/friends.js').then(console.log)


const request = new XMLHttpRequest()
request.open('GET', 'http://localhost:9999/xxx.json')
request.onreadystatechange = () => {
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
            console.log(request.response);
        }
    }
}
request.send()