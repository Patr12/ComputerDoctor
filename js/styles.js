function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
