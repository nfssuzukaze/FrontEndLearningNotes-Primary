let str = `/*hello, and next I will add some css code in this page*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: antiquewhite;
}

#show {
    height: 300px;
    width: 300px;
    position: fixed;
    top: 20px;
    right: 20px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%);
}

#show::before,
#show::after {
    content: '';
    height: 50%;
    width: 50%;
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    right: 50%;
    transform: translate(50%);
}

#show::before {
    top: 0;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}

#show::after {
    bottom: 0;
    background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`

let pointer = 0
let isComment = false
let html = document.querySelector("#text")
let style = document.querySelector("#style")

let step = () => {
    setTimeout(() => {
        isComment = str[pointer] === '/' && str[pointer + 1] === '*' ? true : (str[pointer - 2] === '*' && str[pointer - 1] === '/' ? !isComment : isComment)
        // 确认当前文本是否处于注释状态
		style.innerHTML += isComment === false ? str[pointer] : ""
		// 若不处于注释状态，则将文本添加到CSS中
        if (!(str[pointer] === '/' && str[pointer + 1] === '*' ||
            str[pointer - 1] === '/' && str[pointer] === '*' ||
            str[pointer] === '*' && str[pointer + 1] === '/' ||
            str[pointer - 1] === '*' && str[pointer] === '/')) {
			// 不把注释符号打印出来
            html.innerHTML += str[pointer] === '\n' ? "<br>" : (str[pointer] === ' ' ? "&nbsp;" : str[pointer])
            window.scrollTo(0, 9999)
            html.scrollTo(0, 9999)
        }
        ++ pointer < str.length && step()
    }, 3)
}

step()
