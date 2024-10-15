function updateClock() {
    var now = new Date();
    var jam = String(now.getHours()).padStart(2, '0');
    var menit = String(now.getMinutes()).padStart(2, '0');
    var detik = String(now.getSeconds()).padStart(2, '0');
    var timeNow = `${jam} : ${menit} : ${detik}`;
    document.getElementById("clock").textContent = timeNow;
}

setInterval(updateClock, 1000);
updateClock();


function fadeInOnScroll() {
    const items = document.querySelectorAll('.about-item');

    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 100) {
            item.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

document.getElementById('hamburger').addEventListener('click', function () {
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('active');
});



