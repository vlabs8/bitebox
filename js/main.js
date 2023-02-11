/* js/main.js */

// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(link => {
link.addEventListener('click', function (event) {
event.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});




