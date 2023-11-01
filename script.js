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

const menuList = document.querySelectorAll("#header-menu li")

for (let i = 0; i < menuList.length; i++){
    const li = menuList[i]
    const target = li.getAttribute('target')
    li.addEventListener('click',function(e){
        document.getElementById(target).scrollIntoView({behavior:'smooth'})
    })
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})