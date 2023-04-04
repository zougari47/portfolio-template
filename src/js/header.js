// navbar + scroll spy
import { Collapse, ScrollSpy } from 'bootstrap'

// hide mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(navLink =>
  navLink.addEventListener('click', () => {
    const toggler = document.querySelector('.navbar-toggler')
    toggler.classList.add('collapsed')
    toggler.setAttribute('aria-expanded', 'false')
    document.querySelector('#toggleMobileMenu').classList.remove('show')
  })
)

// hide header on scroll down / show on scroll up
let prevScrollPos = window.pageYOffset
const header = document.querySelector('.sticky-top')
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset
  if (prevScrollPos > currentScrollPos) {
    header.classList.add('sticky-top')
  } else {
    header.classList.remove('sticky-top')
  }
  prevScrollPos = currentScrollPos
}
