const burgerBtn = document.querySelector('.burger-container')
const nav = document.querySelector('.nav-links')
const navLink = document.querySelectorAll('.clicked')
// const mediaQuery2 = window.matchMedia('(max-width: 769px)')

const handleNav = e => {
	nav.classList.toggle('active')
	const hasClass = e.target.classList.contains('clicked')
	if (hasClass == true) {
		nav.classList.remove('active')
	}
}

burgerBtn.addEventListener('click', handleNav)

document.querySelectorAll('.nav-links li a').forEach(function (elem) {
	elem.addEventListener('click', () => {
		// if(mediaQuery2.matches) {
		nav.classList.remove('active')
		// }
	})
})
