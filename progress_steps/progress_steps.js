const prev = document.getElementById('prev');
const next = document.getElementById('next');
const line = document.querySelector('.steps__line');
const circles = document.querySelectorAll('.steps__circle');

let currentSteps = 1;

function increaseSteps() {
    currentSteps++;
}

function decreaseSteps() {
    currentSteps--;
}

function setLineLength() {
    line.style.width = (currentSteps - 1)/(circles.length - 1)*100 + '%';
}

function setCircleActive() {
    circles.forEach((circle, i) => {
        if (i < currentSteps) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
}

next.addEventListener('click', () => {
    increaseSteps()
    prev.disabled = false;
    if (currentSteps > circles.length) {
        next.disabled = false;
        currentSteps = circles.length
    } else if (currentSteps === circles.length) {
        next.disabled = true;
    }
    setLineLength();
    setCircleActive();
})

prev.addEventListener('click', () => {
    decreaseSteps()
    next.disabled = false;
    if (currentSteps <= 1) {
        currentSteps = 1;
        prev.disabled = true;
    } 
    setLineLength();
    setCircleActive();
})