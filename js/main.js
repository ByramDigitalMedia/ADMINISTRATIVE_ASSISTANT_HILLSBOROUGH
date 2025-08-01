let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['an Administrative Assistant', 'a Concierge', 'Your Go-To Expert'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

/* =======================================================
  * Template URL: https://byramdigitalmedia.com
  * Updated: July 24 2025
  * Author: BDM
  * License: MIT
  ======================================================== */

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date