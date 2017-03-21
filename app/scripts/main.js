const navClose = document.querySelector('#close-nav');
const navOpen = document.querySelector('#open-nav');
//onclick of x button close mobile nav
navClose.addEventListener('click', function(e) {
    console.log('close nav');
    document.querySelector('body').style.overflow = '';
    document.querySelector('.mobile-nav').classList.remove('open');
});

navOpen.addEventListener('click', function(e) {
    console.log('open nav');
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('.mobile-nav').classList.add('open');

});

//screen reveal
window.sr = ScrollReveal({ reset: true, viewFactor: 0.4, mobile: false });

sr.reveal('.card', { duration: 500, origin: 'left' });
sr.reveal('img', { duration: 1000, scale: 0.5 });
sr.reveal('.fa', { duration: 500 });
sr.reveal('header, h4', { duration: 200, origin: 'top' });
sr.reveal('button', { duration: 500, origin: 'top', rotate: { x: 500 } });