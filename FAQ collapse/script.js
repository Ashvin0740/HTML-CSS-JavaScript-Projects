const toggels = document.querySelectorAll('.faq-toggle')

toggels.forEach(toggle => {
    toggle.addEventListener('click', () =>
    {
        toggle.parentNode.classList.toggle('active')
    })
})