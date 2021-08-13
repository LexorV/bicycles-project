const swithButton = document.querySelector('.footer__swith-button');
const rootSection = document.querySelector('.root')

swithButton.addEventListener('click', function() {
    swithButton.classList.toggle('footer__swith-button_active');
    rootSection.classList.toggle('root__theme_dark');
})