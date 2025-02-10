document.addEventListener("DOMContentLoaded", function () {
	const slides = document.querySelectorAll(".carousel-slide");
	const prevBtn = document.querySelector(".carousel-btn.prev");
	const nextBtn = document.querySelector(".carousel-btn.next");
	const indicators = document.querySelectorAll(".indicator");

	let currentIndex = 0;
	const totalSlides = slides.length;

	function showSlide(index) {
		// Gérer les limites
		if (index >= totalSlides) {
			currentIndex = 0;
		} else if (index < 0) {
			currentIndex = totalSlides - 1;
		} else {
			currentIndex = index;
		}

		// Déplacer le carrousel
		const carousel = document.querySelector(".carousel");
		carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

		// Mettre à jour les classes 'active'
		document.querySelector(".carousel-slide.active").classList.remove("active");
		slides[currentIndex].classList.add("active");

		document.querySelector(".indicator.active").classList.remove("active");
		indicators[currentIndex].classList.add("active");
	}

	// Boutons de navigation
	prevBtn.addEventListener("click", function () {
		showSlide(currentIndex - 1);
	});

	nextBtn.addEventListener("click", function () {
		showSlide(currentIndex + 1);
	});

	// Indicateurs
	indicators.forEach(function (indicator, index) {
		indicator.addEventListener("click", function () {
			showSlide(index);
		});
	});

	// Autoplay (optionnel)
	let autoplay = setInterval(function () {
		showSlide(currentIndex + 1);
	}, 5000); // Change toutes les 5 secondes

	// Stop l'autoplay au survol
	const carouselContainer = document.querySelector(".carousel-container");
	carouselContainer.addEventListener("mouseenter", function () {
		clearInterval(autoplay);
	});

	carouselContainer.addEventListener("mouseleave", function () {
		autoplay = setInterval(function () {
			showSlide(currentIndex + 1);
		}, 5000);
	});
});
