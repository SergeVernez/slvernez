document.addEventListener("DOMContentLoaded", function () {
	// Charger le header
	fetch("header.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("header-container").innerHTML = data;

			// Ajouter la classe active au lien correspondant
			const currentPath = window.location.pathname.split("/").pop();
			const navLinks = document.querySelectorAll("nav ul li a");

			navLinks.forEach((link) => {
				if (link.getAttribute("href") === currentPath) {
					link.classList.add("active"); // Ajouter la classe "active" au lien correspondant
				}
			});
			// ajout scroll top
			window.onscroll = function () {
				scrollFunction();
			};

			function scrollFunction() {
				const scrollTopBtn = document.getElementById("scrollTopBtn");
				if (document.body.scrollTop > 200 || document.getElement.scrollFunction > 200) {
					scrollTopBtn.style.display = "block";
				} else {
					scrollTopBtn.style.display = "none";
				}
			}

			// gestion pour le click
			document.getElementById("scrollTopBtn").addEventListener("click", function () {
				document.body.scrollTop = 0; //pour Apple
				document.documentElement.scrollTop = 0;
			});
		})
		.catch((error) => {
			console.error("Erreur du chargement header: ", error);
		});
});
