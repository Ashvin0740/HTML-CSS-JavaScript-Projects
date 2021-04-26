const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0 
let timesClicked = 0

loveMe.addEventListener('click' , (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    }else
    {
        if((new Date().getTime() - clickTime) < 800)
    {
        createHeart(e)
        clickTime = 0
    }else{
        clickTime = new Date().getTime()
    }
}
})

const createHeart = (e)  => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clienty

    const leftoffset = e.target.offsetLeft
    const topoffset = e.target.offsetTop

    const xInside = x-leftoffset
    const yInside  = y-topoffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)

}