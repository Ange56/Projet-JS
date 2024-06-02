
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



/*------------------------------telephne --------------------------------------------*/

function jouerSonnerie() {
    var audio = new Audio('../son/sonnerie2.mp3');
    audio.play();
}
document.addEventListener('copy', function(e) {
    var parentElement = window.getSelection().anchorNode.parentNode;

        // Vérifier si l'élément parent est un élément de numéro de téléphone
        if (parentElement.classList.contains('telephone')) {
            var numeroCopie = parentElement.innerText.trim();
            console.log('Numéro copié :', numeroCopie);

            var numeroEntree = prompt('Si vous voulez appeler ce numéro : ' + numeroCopie + ', entrez-le de nouveau dans le champ ci-dessous puis validez');
            if (numeroEntree !== null && numeroEntree === numeroCopie) {
                jouerSonnerie();
                afficherMessage('Vous appelez ce numéro : ' + numeroCopie);
            }
            
        }
});

function afficherMessage(message) {
    var modal = document.getElementById("myModal");
    var modalContent = document.querySelector(".modal-content");
    var messageElement = document.getElementById("message");

    messageElement.textContent = message;
    modal.style.display = "block";

    

    modalContent.style.width = "30%"; // Réduire la largeur à 40%
    modalContent.style.left = "30%"; // Ajuster la position gauche pour centrer horizontalement
    modalContent.style.display = "flex";
    modalContent.style.flexDirection = "column";
    modalContent.style.justifyContent = "center";
    modalContent.style.alignItems = "center";
    modalContent.style.border = "2px solid #000";


    var btnClose = document.getElementById("btnClose");
    btnClose.onclick = function() {
        modal.style.display = "none";
    }

    // Fermez la fenêtre modale après quelques secondes
    setTimeout(function() {
        modal.style.display = "none";
    }, 5000); // 5 secondes
}
/*------------------------------------------------*/