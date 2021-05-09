const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 250) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};