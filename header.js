document.addEventListener("DOMContentLoaded", function () {
	// Charger le header
	fetch("header.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("header-container").innerHTML = data;

			// Ajouter la classe de la page active dans la nav
			const currentPath = window.location.pathname.split("/").pop();
			const navLinks = document.querySelectorAll("nav ul li a");

			navLinks.forEach((link) => {
				if (link.getAttribute("href") === currentPath) {
					link.classList.add("active"); // Ajouter la classe "active" au lien correspondant
				}
			});

			// Fonctionnalité du menu burger
			const menuIcon = document.getElementById("menu-icon");
			const navLinksContainer = document.getElementById("nav-links");

			if (menuIcon && navLinksContainer) {
				menuIcon.addEventListener("click", function () {
					navLinksContainer.classList.toggle("show");
				});
			}

			// ajout scroll top
			function scrollFunction() {
				const scrollTopBtn = document.getElementById("scrollTopBtn");
				if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
					scrollTopBtn.style.display = "block";
				} else {
					scrollTopBtn.style.display = "none";
				}
			}

			// Ajout du gestionnaire de défilement
			window.onscroll = function () {
				scrollFunction();
			};

			// Ajout du gestionnaire de clic pour le bouton scroll top
			const scrollTopBtn = document.getElementById("scrollTopBtn");
			if (scrollTopBtn) {
				scrollTopBtn.addEventListener("click", function () {
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				});
			}
		})
		.catch((error) => {
			console.error("Erreur du chargement header: ", error);
		});
});
