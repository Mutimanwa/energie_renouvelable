
// Vérifie l'URL actuelle et active le bon lien
document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname.split("/").pop();
    if (currentLocation === "") currentLocation = "index.html"; // page d'accueil
    let menuItems = document.querySelectorAll(".nav-link");

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentLocation) {
            item.classList.add("active");
        }
    });
});

