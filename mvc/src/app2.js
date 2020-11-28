import './app2.css'
import $ from 'jquery'

const $tab = $('.app2 .tab')
const $tabPage = $('.app2 .innerPage')

$tab.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    const index = $li.index()
    $li.addClass('selected').siblings().removeClass('selected')
    $tabPage.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tab.children().eq(0).trigger('click')