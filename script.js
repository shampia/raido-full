function getWidth(el) {
    return el.clientWidth || 0
}

function getLeft(el) {
    return el.offsetLeft || 0
}

function removeActive() {
    for(let i = 0; i < menu.length; i++) {
        const element = menu[i]
        element.classList.remove('active')
    }
}

function setIndicator(el) {
    const indicator = document.getElementById('indicator')
    indicator.style.width = getWidth(el) + 'px'
    indicator.style.left = getLeft(el) + 'px'
}

const menu = document.querySelectorAll('#header-menu li')
const first = menu[0]
setIndicator(first)

for(let i = 0; i < menu.length; i++) {
    const element = menu[i]
    element.addEventListener('click', function () {
        removeActive()
        element.classList.add('active')
        setIndicator(element)
    })
}