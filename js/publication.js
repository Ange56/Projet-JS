
function afficherPublicationsFiltrees() {
    const auteurRecherche = document.getElementById("auteur").value.toLowerCase().split(",");
    const titre = document.getElementById("titre").value.toLowerCase().split(",");
    const annee = document.getElementById("annee").value;
    const type = document.querySelector('input[name="type"]:checked').value;

    const publications = document.querySelectorAll('.publication');

    publications.forEach(publication => {
        const publicationAuteur = publication.getAttribute('data-auteur').toLowerCase();
        const publicationTitre = publication.getAttribute('data-titre').toLowerCase();
        const publicationAnnee = publication.getAttribute('data-annee');
        const publicationType = publication.getAttribute('data-type');

        const matchAuteur = matchMotsClesDansLOrdre(publicationAuteur, auteurRecherche);
        const matchTitre = matchMotsClesDansLOrdre(publicationTitre, titre);
        const matchAnnee = !annee || publicationAnnee === annee;
        const matchType = type === "toutes" || publicationType === type;

        if (matchAuteur && matchTitre && matchAnnee && matchType) {
            publication.style.display = 'block';
        } else {
            publication.style.display = 'none';
        }
    });
}



function matchMotsClesDansLOrdre(chaine, motsCles) {
    // Initialisation de l'index de recherche dans la chaîne de texte
    let index = 0;

    // Parcours des mots clés
    for (let i = 0; i < motsCles.length; i++) {
        // Obtention du mot clé actuel
        const motCle = motsCles[i];
        // Recherche du mot clé dans la chaîne de texte, en commençant à partir de l'index actuel
        const startIndex = chaine.indexOf(motCle, index);
        
        // Vérification si le mot clé est trouvé dans la chaîne de texte à la position actuelle
        if (startIndex !== index) {
            // Si le mot clé n'est pas trouvé à l'index attendu, retourner false
            return false;
        }

        // Mise à jour de l'index pour le prochain mot clé
        index += motCle.length;
				
    }

    // Tous les mots clés ont été trouvés dans l'ordre exact, retourner true
    return true;
}



// Écouter les événements de changement dans les champs de filtre
document.getElementById("auteur").addEventListener("input", afficherPublicationsFiltrees);
document.getElementById("titre").addEventListener("input", afficherPublicationsFiltrees);
document.getElementById("annee").addEventListener("input", afficherPublicationsFiltrees);
document.querySelectorAll('input[name="type"]').forEach(input => {
    input.addEventListener("change", afficherPublicationsFiltrees);
});

// Afficher les publications initiales lors du chargement de la page
afficherPublicationsFiltrees();