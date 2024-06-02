

/*------------------------------image --------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('img-competences');//séléctionne l'image par son id
    const container = document.getElementById('image-container');//selectionne le conteneur de l'image par son id
    let zoomed = false; //variable pour suivre l'état de l'image, ici non zoomé

    image.addEventListener('click', function () {  //ecouteur d'événement pour clic sur l'image
        if (zoomed) {
            image.style.transform = 'scale(1)';//réinitialise la taille de l'image si elle est déjà zoomé
            image.style.cursor = 'pointer'; //change curseur en pointeur
            container.removeEventListener('mousemove', moveImage); //supprime l'ecouteur de déplacement de la souris
        } else {
            image.style.transform = 'scale(2)'; //zoom l'image a 2 fois sa taille
            image.style.cursor = 'move'; //change le curseru en déplacement
            container.addEventListener('mousemove', moveImage);//ecouteur de déplacement de la souris
        }
        zoomed = !zoomed;//inverse l'etat de la ariable zommed
    });

    function moveImage(e) { //fonction pour déplacer l'image en fonction de la souris
        const rect = container.getBoundingClientRect();  //obtient la taille et la position e la souris
        const x = e.clientX - rect.left; //calcule la position horizontale de la souris par rapport au conteneur
        const y = e.clientY - rect.top;//calcule la position verticale de la souris par rapport au conteneur
        const moveX = (x / rect.width) * 100 - 50; //calcule la translation horizontale en pourcentage
        const moveY = (y / rect.height) * 100 - 50; //calcule la translation verticale en pourcentage
        image.style.transform = `scale(2) translate(${-moveX}%, ${-moveY}%)`; //applique le zoom et la translation a l'image
    }
    // Ajoute un écouteur d'événements pour gérer le survol de la souris sur l'image
	image.addEventListener('mouseenter', function () {
        if (!zoomed) {// Applique le zoom seulement si l'image n'est pas déjà zoomée
            image.style.transform = 'scale(1.2)';
        }
    });
    // Ajoute un écouteur d'événements pour gérer le survol de la souris de l'image
    image.addEventListener('mouseleave', function () {
        if (!zoomed) {// Réinitialise la taille seulement si l'image n'est pas déjà zoomée
            image.style.transform = 'scale(1)';
        }
    });
});

/*--------------------------------------------------------------------------*/


/*------------------------------texte animation --------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("txt");
    const words = textElement.innerText.split(" ");
    textElement.innerHTML = ""; // efface le texte

    let wordIndex = 0;

    function displayWords() {
        if (wordIndex < words.length) {
            textElement.innerHTML += words[wordIndex] + " ";
            wordIndex++;
            setTimeout(displayWords, 1000); // 1 seconde d'intervale entre les mots
        } else {
            startAnimation();
        }
    }

    function startAnimation() {
        textElement.style.animation = "slideInOut 8s ease-in-out"; // 8s
        setTimeout(resetText, 8000); // recommence l'animation
    }

    function resetText() {
        textElement.innerHTML = "";
        textElement.style.animation = "";
        wordIndex = 0;
        setTimeout(displayWords, 1000); // recommence le cycle après un délai
    }

    displayWords();
});

/*--------------------------------------------------------------------------*/



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