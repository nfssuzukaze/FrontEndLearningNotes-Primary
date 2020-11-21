let count = 2

addCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
        }
    }
    request.send()
}

addJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/01')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }
        }
    }
    request.send()
}

addHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/02')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const container = document.createElement('template')
                request.response.split('\n').forEach(item => {
                    container.innerHTML += item
                })
                document.body.appendChild(container.content)
            }
        }
    }
    request.send()
}

addXML.onclick = () => {
    console.log('hello addxml')
    const request = new XMLHttpRequest()
    request.open('GET', '/03')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log(request.responseXML.firstChild)
            if (request.status >= 200 && request.status < 300) {
                console.log('what')
                document.body.appendChild(request.responseXML.firstChild)
            }
        }
    }
    request.send()
}

addJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/04')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                myName.innerHTML = JSON.parse(request.response).name
            }
        }
    }
    request.send()
}

addPage.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/00${count}page`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                JSON.parse(request.response).forEach(item => {
                    const li = document.createElement('li')
                    li.innerHTML = item.id
                    xxx.appendChild(li)
                })
            }
            count ++
        }
    }
    request.send()
    if (count === 3) addPage.style.display = "none";
})