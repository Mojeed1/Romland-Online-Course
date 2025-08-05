// Scroll Navbar Changes

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('nav__scroll', window.scrollY > 0);
})


// FAQS TOGGLE
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Faq icon
        const icon = faq.querySelector('.faq__icon i')

        if (icon.className === 'ri-add-line') {
            icon.className = 'ri-subtract-fill';
        }else {
            icon.className = 'ri-add-line';
        }
    })
})

// open/close menu bar
const menu = document.querySelector('.nav__menu');
const open = document.querySelector('#open-menu-btn');
const close = document.querySelector('#close-menu-btn');

open.addEventListener('click', () => {
    menu.style.display = 'flex';
    close.style.display = 'inline-block';
    open.style.display = 'none'
});

close.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'none';
    open.style.display = 'inline-block'
});