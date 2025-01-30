document.addEventListener("DOMContentLoaded", function () {
    // Charger le header
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-container").innerHTML = data;

            // Ajouter la classe active au lien correspondant
            const currentPath = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('nav ul li a');

            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active'); // Ajouter la classe "active" au lien correspondant
                }
            });
        })
        .catch((error) => {
            console.error("Erreur du chargement header: ", error);
        });
});
