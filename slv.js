// JavaScript pour afficher le bouton après 200 pixels de défilement
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	const scrollTopBtn = document.getElementById("scrollTopBtn");
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		scrollTopBtn.style.display = "block";
	} else {
		scrollTopBtn.style.display = "none";
	}
}

// JavaScript pour faire défiler vers le haut lorsque le bouton est cliqué
document.getElementById("scrollTopBtn").addEventListener("click", function () {
	document.body.scrollTop = 0; // Pour Safari
	document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
});
