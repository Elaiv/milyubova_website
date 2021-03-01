window.onload = function() {
	setIlluminating()
	setCardsHeight()
	setCollapsibles()
	setParticles()

	window.addEventListener("resize", () => {
		setParticles()
		setCardsHeight()
	})
	window.addEventListener("orientationchange", () => {
		setParticles()
		setCardsHeight()
	})
	
}

function setCardsHeight() {
	const cardBanner = document.querySelectorAll(".card_banner")
	for (let i of cardBanner) {
		i.style.height = Math.round(i.getBoundingClientRect().width * 0.6) + "px"
	}
}

function setParticles() {
	const body = document.body
	const html = document.documentElement

	let height = Math.max( body.scrollHeight, body.offsetHeight); // , html.clientHeight, html.scrollHeight, html.offsetHeight 
	particles_js.style.height = height + "px";
	particlesJS.load('particles_js', 'assets/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});
}