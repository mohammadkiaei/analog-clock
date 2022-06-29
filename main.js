//Select DOM
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// Light & Dark mode;
function toggleClass() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
    body.style.transition = `0.5s linear`;
}

const deg = 6;
// 360 / (12 * 5);

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})