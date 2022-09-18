// Header Section 
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Menu toggle 
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
}

