const myNav = document.querySelector('nav')

window.addEventListener('scroll', function () {
	if (window.scrollY >= 300) {
		// myNav.setAttribute('style', 'background-color: #5a4833ab !important;')
		myNav.style.cssText = 'box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2) !important;background-color: #5a4833ab !important;'
	} else {
		myNav.setAttribute('style', 'background-color: transparent !important;')
	}
});


