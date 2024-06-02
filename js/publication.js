
function afficherPublicationsFiltrees() {
    // Récupération des valeurs des champs de recherche et conversion en minuscules
    const auteurRecherche = document.getElementById("auteur").value.toLowerCase().split(",");
    const titre = document.getElementById("titre").value.toLowerCase().split(",");
    const annee = document.getElementById("annee").value;
    const type = document.querySelector('input[name="type"]:checked').value;

    // Sélection de toutes les publications dans le document
    const publications = document.querySelectorAll('.publication');

   
    publications.forEach(publication => {
        // Parcours de chaque publication pour filtrer celles qui correspondent aux critères de recherche
        
        // Récupération des attributs de la publication et conversion en minuscules
        const publicationAuteur = publication.getAttribute('data-auteur').toLowerCase();
        const publicationTitre = publication.getAttribute('data-titre').toLowerCase();
        const publicationAnnee = publication.getAttribute('data-annee');
        const publicationType = publication.getAttribute('data-type');

        // Vérification si les critères de recherche correspondent aux attributs de la publication
        const matchAuteur = matchMotsClesDansLOrdre(publicationAuteur, auteurRecherche);
        const matchTitre = matchMotsClesDansLOrdre(publicationTitre, titre);
        const matchAnnee = !annee || publicationAnnee === annee;
        const matchType = type === "toutes" || publicationType === type;

        // Affichage ou masquage de la publication en fonction des résultats de la recherche
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
    //fonction pour jouer la sonnerie
    var audio = new Audio('../son/sonnerie2.mp3');
    audio.play();
}

document.addEventListener('copy', function(e) { //ecouteur d'événements pour la copie de texte
    var parentElement = window.getSelection().anchorNode.parentNode; //obtient l'élément parent du texte selectionné 

        // Vérifier si l'élément parent est un élément de numéro de téléphone
        if (parentElement.classList.contains('telephone')) {
            var numeroCopie = parentElement.innerText.trim(); //obtient de téléphone sélectionné    .tim() permzt de supprmer es espaces blancs au débu et fin chaine caract
            console.log('Numéro copié :', numeroCopie);

            var numeroEntree = prompt('Si vous voulez appeler ce numéro : ' + numeroCopie + ', entrez-le de nouveau dans le champ ci-dessous puis validez');// affiche une message avec une zone de texte pour entrer a nouveau le numéro 
            if (numeroEntree !== null && numeroEntree === numeroCopie) { // si le numéro entré correspond au numéro copié
                jouerSonnerie(); //joue la sonnerie
                afficherMessage('Vous appelez ce numéro : ' + numeroCopie);
            }

        }
});

function afficherMessage(message) {
    //fonction qui affiche un message dans la fenetre modale
    
    var modal = document.getElementById("myModal"); //obtient l'élément de la fenêtre modale et le message a afficher
    
    
    var modalContent = document.querySelector(".modal-content"); // sélection l'élément du html qui à la classe css ".model-content"
    var messageElement = document.getElementById("message");  // sélection l'élément du html qui à l'id message'

    /*---------------------- CSS ------------------------*/
    messageElement.textContent = message;
    modal.style.display = "block";
    modalContent.style.width = "30%"; // Réduire la largeur à 40%
    modalContent.style.left = "30%"; // Ajuster la position gauche pour centrer horizontalement
    modalContent.style.display = "flex";
    modalContent.style.flexDirection = "column";
    modalContent.style.justifyContent = "center";
    modalContent.style.alignItems = "center";
    modalContent.style.border = "2px solid #000";
/*---------------------------------------------------------*/

    var btnClose = document.getElementById("btnClose"); //selevtion de l'element du html qui a l'id btnclose
    btnClose.onclick = function() { //lorsque l'utilisateur clique sur le bouton fermé change la propriété du css pour cacher la fenetre modele
        modal.style.display = "none";
    }

    // Fermez la fenêtre modale après quelques secondes
    setTimeout(function() {
        modal.style.display = "none";
    }, 5000); // 5 secondes
}
/*------------------------------------------------*/