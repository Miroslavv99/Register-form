const themeBtn = document.querySelector('#theme-btn')
const mainDiv = document.querySelector('.main')

themeBtn.addEventListener('click', () => {
    mainDiv.classList.toggle('dark-theme')
})