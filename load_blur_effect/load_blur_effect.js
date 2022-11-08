const bg = document.querySelector('.bg');
const text = document.querySelector('.text');

let count = 0;

function counting() {
    if ( count < 100) {
        count++;
        text.textContent = `${count}%`;
        text.style.opacity = 1 - (count*0.01);
        bg.style.filter = `blur(${30/count*10 - count/30}px)`
        console.log(30/count*10 - count/30);
    }
}

setInterval(counting, 30)