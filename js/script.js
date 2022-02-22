function classToggle() {
    const navs = document.querySelectorAll('.nav-menu');
    // navs.forEach(nav => console.log(nav));
    navs.forEach(nav => nav.classList.toggle('hamburger-show'));
}

// document.querySelector('.hamburger').addEventListener('click', classToggle);

function myFunction(x) {
    x.classList.toggle("change");
    setTimeout(classToggle, 200);
}