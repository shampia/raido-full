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

document.getElementById('header-menu').addEventListener('click',function()
{
    document.getElementById('header').classList.toggle('dropped');
})


document.getElementById('about-as-btn').addEventListener('click',function()
{
    document.getElementById('about-as-page').scrollIntoView({behavior:'smooth'});
})

document.getElementById('discover-btn').addEventListener('click',function()
{
    document.getElementById('discover-page').scrollIntoView({behavior:'smooth'});
})

document.getElementById('blog-btn').addEventListener('click',function()
{
    document.getElementById('blo-page').scrollIntoView({behavior:'smooth'});
})

document.getElementById('journal-btn').addEventListener('click',function()
{
    document.getElementById('journal-page').scrollIntoView({behavior:'smooth'});
})

document.getElementById('galery-btn').addEventListener('click',function()
{
    document.getElementById('galeri-page').scrollIntoView({behavior:'smooth'});
})

document.getElementById('contact-btn').addEventListener('click',function()
{
    document.getElementById('contact-page').scrollIntoView({behavior:'smooth'});
})