import $ from 'jquery'
import './app1.css'

const $button1 = $('.add')
const $button2 = $('.minus')
const $button3 = $('.mul')
const $button4 = $('.div')
const $content = $('.show > .number')
let n = localStorage.getItem('n') || 100
$content.text(n)

$button1.on('click', () => {
    n += 1
    $content.text(n)
    localStorage.setItem('n', n)
})

$button2.on('click', () => {
    n -= 1
    $content.text(n)
    localStorage.setItem('n', n)
})

$button3.on('click', () => {
    n *= 2
    $content.text(n)
    localStorage.setItem('n', n)
})

$button4.on('click', () => {
    n /= 2
    $content.text(n)
    localStorage.setItem('n', n)
})