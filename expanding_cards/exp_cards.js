const cards = document.querySelectorAll('.card');

function setActive(item) {
    item.classList.add('active')
}

function removeActive(array) {
    array.forEach(item => {
        item.classList.remove('active')
    })
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActive(cards);
        setActive(card);
    })
})