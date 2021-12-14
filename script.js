const hourEL = document.querySelector('.hour');
const minEL = document.querySelector('.min');
const secEL = document.querySelector('.sec');
const timeEL = document.querySelector('.time');
const dateEL = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "friday", "Saturday"];
const months = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];

// dark mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')

    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
        e.target.innerHTML = 'Light Mode'
    } else {
        e.target.innerHTML = 'Dark Mode'
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const min = time.getMinutes()
    const sec = time.getSeconds()
    const amPm = hours >= 12 ? 'PM' : 'AM'

    hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0 , 11, 0, 360)}deg)` 
    minEL.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0 , 59, 0, 360)}deg)`
    secEL.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0 , 59, 0, 360)}deg)` 

    timeEL.innerHTML = `${hoursForClock}:${min < 10 ? `0${min}` : min} ${amPm}`;

    dateEL.innerHTML =  `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// map a range 0f numbers to another range of numbers (stackOverFlow)
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval(setTime, 1000);