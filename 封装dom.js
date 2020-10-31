window.dom = {
    // create
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstElementChild
    },
    after(node, newNode) {
        // while the child === null , the newNode will be the last node
        node.parentNode.insertBefore(newNode, node.nextSibling)
    },
    before(node, newNode) {
        node.parentNode.insertBefore(newNode, node)
    },
    append(parent, child) {
        parent.append(child)
    },
    wrap(node, newParent) {
        dom.before(node, newParent)
        dom.append(newParent, node)
    },
    // delete
    remove(node) {
        !!node.remove ? node.remove() : node.parentNode.removeChild(node)
        return node
    },
    empty(parentNode) {
        const array = []
        let x = node.firstChild
        while(x){
          array.push(dom.remove(node.firstChild))
          x = node.firstChild
        }
        return array
    },
    // update
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {
        let result
        if ('innerText' in node) {
            result = node.innerText = string || node.innerText
        } else {
            result = node.textContent = string || node.textContent
        }
        if (arguments.length === 1) {
            return result
        }
    },
    html(node, string) {
        let result = node.innerHTML = string || node.innerHTML
        if (arguments.length === 1) {
            return result
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    // read
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === Node.TEXT_NODE) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === Node.TEXT_NODE) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, func) {
        for (let i = 0; i < nodeList.length; i ++) {
            func.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parent)
        for (let i = 0; i < list.length; i ++) {
            if (list[i] === node) {
                return i
            }
        }
    }
}
