const navBtn = document.querySelector('.navBtn');

let openBtn = false;

navBtn.addEventListener('click', () => {
    if (!openBtn) {
        navBtn.classList.add('open');
        openBtn = true;
    } else {
        navBtn.classList.remove('open');
        openBtn = false;
    }
})