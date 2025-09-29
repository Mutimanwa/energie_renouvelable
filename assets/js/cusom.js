
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


document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    const tagContainer = document.querySelector('.tag-container');
    const tagScrollWrapper = document.querySelector('.tag-scroll-wrapper');
    const tagList = document.querySelector('.tag');
    const tagItems = document.querySelectorAll('.tag-item');
    const scrollLeftBtn = document.querySelector('.scroll-btn.left');
    const scrollRightBtn = document.querySelector('.scroll-btn.right');
    const projectCards = document.querySelectorAll('.project-card');
    const not_found = document.querySelector(".not-found");
    
    // Défilement des tags avec les boutons
    scrollLeftBtn.addEventListener('click', function() {
        tagScrollWrapper.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });
    
    scrollRightBtn.addEventListener('click', function() {
        tagScrollWrapper.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
    
    // Défilement des tags avec la molette de souris
    tagScrollWrapper.addEventListener('wheel', function(e) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    });
    
    // Filtrage des projets
    tagItems.forEach(tag => {
        tag.addEventListener('click', function() {
            // Retirer la classe active de tous les tags
            tagItems.forEach(item => item.classList.remove('active'));
            
            // Ajouter la classe active au tag cliqué
            this.classList.add('active');
            
            // Récupérer la valeur du filtre
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrer les projets
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const cardTags = card.getAttribute('data-tags').split(' ');
                    if (cardTags.includes(filterValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                        not_found.classList.remove('d-none')
                    }
                }
            });
        });
    });
    
    // Ajuster l'affichage des boutons de défilement selon la position
    function updateScrollButtons() {
        const scrollLeft = tagScrollWrapper.scrollLeft;
        const scrollWidth = tagScrollWrapper.scrollWidth;
        const clientWidth = tagScrollWrapper.clientWidth;
        
        scrollLeftBtn.style.display = scrollLeft > 0 ? 'flex' : 'none';
        scrollRightBtn.style.display = scrollLeft < (scrollWidth - clientWidth - 10) ? 'flex' : 'none';
    }
    
    tagScrollWrapper.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    
    // Initialiser l'affichage des boutons
    updateScrollButtons();
});
