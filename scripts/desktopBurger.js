// const myNav = document.querySelector('nav')
// const burgerDiv = document.querySelector('.burger-container')
// const mediaQuery = window.matchMedia('(min-width: 770px)')
// const burgerBtn2 = document.querySelector('.burger-container')
// const navLinks = document.querySelector('.nav-links')
// const navLinksA = document.querySelectorAll('.nav-links li a')
// const mobileContainerTop = document.querySelector('.nav-mobile-container-top')
// const mobileContainer = document.querySelector('.nav-mobile-container')

// const burgerClick = () => {
// 	navLinks.classList.toggle('nav-burger')
// 	burgerShow()
// }

// const scrollDown = () => {
// 	if (window.scrollY >= 150 && mediaQuery.matches) {
// 		// myNav.setAttribute('style', 'background-color: #5a4833ab !important;')
// 		burgerDiv.style.cssText = 'display: block;'
// 	} else if (mediaQuery.matches) {
// 		burgerDiv.setAttribute('style', 'display: none;')
// 	}
// }

// const burgerShow = () => {
// 	if (navLinks.classList.contains('nav-burger')) {
// 		// mobileContainerTop.style.display = 'flex'
// 		// mobileContainer.style.display = 'flex'
// 		// mobileContainer.setAttribute('style', 'display:flex;bottom: 5%;left:11%;')
// 		navLinksA.forEach(link =>
// 			link.setAttribute('style', 'line-height:8rem;font-size:3rem;margin-bottom:3rem;color:#747474;text-align:center;')
// 		)
// 	} else {
// 		// mobileContainerTop.style.display = 'none'
// 		// mobileContainer.setAttribute('style', 'display:none;transform: translateX(0);bottom: 5%;left:11%;transform: translateX(0);')
// 		navLinksA.forEach(link => link.setAttribute('style', 'line-height:0.7rem;font-size:2rem;margin-bottom:unset;color:white;text-align:unset;'))
// 	}
// }

// burgerBtn2.addEventListener('click', burgerClick)
// window.addEventListener('scroll', scrollDown)