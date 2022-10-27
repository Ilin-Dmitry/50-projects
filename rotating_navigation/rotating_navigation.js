console.log(document);

const open = document.querySelector('.icon-1');
const close = document.querySelector('.icon-2');
const circle = document.querySelector('.circle');
const content = document.querySelector('.page-container');
const nav = document.querySelector('.nav');

open.addEventListener('click', (evt) => {
    content.setAttribute('style', `transform-origin: 0% ${evt.pageY}px`);
    circle.classList.add('open');
    content.classList.add('open');
    nav.classList.add('open');
})

close.addEventListener('click', () => {
    circle.classList.remove('open');
    content.classList.remove('open');
    nav.classList.remove('open');
})