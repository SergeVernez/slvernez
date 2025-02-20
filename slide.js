document.addEventListener("DOMContentLoaded", function () {
	const slides = document.querySelectorAll(".slide");
	const slider = document.querySelector(".slider");
	const prevBtn = document.querySelector(".slider-btn.prev");
	const nextBtn = document.querySelector(".slider-btn.next");

	if (slides.length === 0 || !slider || !prevBtn || !nextBtn) {
		console.error("Des éléments nécessaires sont manquants dans le DOM.");
		return;
	}

	let currentIndex = 1;
	let isTransitioning = false;

	// Cloner les premières et dernières diapos
	const firstClone = slides[0]?.cloneNode(true);
	const lastClone = slides[slides.length - 1]?.cloneNode(true);

	if (firstClone && lastClone) {
		firstClone.id = "first-clone";
		lastClone.id = "last-clone";
		slider.appendChild(firstClone);
		slider.insertBefore(lastClone, slides[0]);
	}

	// Mettre à jour la liste des diapositives après le clonage
	const allSlides = slider.querySelectorAll(".slide");

	function moveToSlide(index) {
		console.log(`Move to slide: ${index}`);
		if (isTransitioning || !allSlides[index]) return;
		isTransitioning = true;

		slider.style.transition = "transform 0.5s ease-in-out";
		slider.style.transform = `translateX(-${index * 100}%)`;

		setTimeout(() => {
			allSlides.forEach((slide) => slide.classList.remove("active"));
			allSlides[index]?.classList.add("active");

			isTransitioning = false;
			console.log(`Slide moved to index: ${index}`);
		}, 500);
	}

	function checkIndex() {
		allSlides.forEach((slide) => slide.classList.remove("active"));
		if (allSlides[currentIndex]?.id === "first-clone") {
			slider.style.transition = "none";
			currentIndex = 1;
			slider.style.transform = `translateX(-${currentIndex * 100}%)`;
			console.log("First clone, reset to index 1");
		} else if (allSlides[currentIndex]?.id === "last-clone") {
			slider.style.transition = "none";
			currentIndex = allSlides.length - 2;
			slider.style.transform = `translateX(-${currentIndex * 100}%)`;
			console.log("Last clone, reset to last real slide");
		}
		allSlides[currentIndex]?.classList.add("active");
	}

	nextBtn.addEventListener("click", () => {
		moveToSlide(currentIndex + 1);
		currentIndex++;
		console.log(`Next button clicked, currentIndex: ${currentIndex}`);
	});

	prevBtn.addEventListener("click", () => {
		moveToSlide(currentIndex - 1);
		currentIndex--;
		console.log(`Prev button clicked, currentIndex: ${currentIndex}`);
	});

	slider.addEventListener("transitionend", checkIndex);

	let autoplay = setInterval(() => {
		moveToSlide(currentIndex + 1);
		currentIndex++;
		console.log(`Autoplay, currentIndex: ${currentIndex}`);
	}, 9000);

	slider.addEventListener("mouseenter", () => {
		clearInterval(autoplay);
		console.log("Autoplay paused");
	});

	slider.addEventListener("mouseleave", () => {
		autoplay = setInterval(() => {
			moveToSlide(currentIndex + 1);
			currentIndex++;
			console.log(`Autoplay resumed, currentIndex: ${currentIndex}`);
		}, 9000);
	});

	// Initialiser la position de la première diapo réelle
	slider.style.transform = `translateX(-100%)`;
	allSlides[currentIndex]?.classList.add("active");
	console.log("Slider initialized");
});
