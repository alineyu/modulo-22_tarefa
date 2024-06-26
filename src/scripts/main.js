const eventDate = new Date('Mar 8, 2025 15:00:00').getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

if(distance < 0) {
    clearInterval(x);
}

}, 1000);

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    alert('Your presence is confirmed :)')
})