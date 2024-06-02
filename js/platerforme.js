
document.addEventListener('DOMContentLoaded', function() {

    var btn1 = document.getElementById('titre1');
    var btn2 = document.getElementById('titre2');
    
    // Ajoutez un événement click à chaque bouton
    btn1.addEventListener('click', function() {
        // Affichez la fenêtre modale correspondante
        /*createModal('dialog1', 'Chambre connectée : Living Lab', 'Le living Lab est le fruit de collaboration avec l’entreprise de mutuelle santé Malakoff Médéric. Initialement, ce Living Lab avait pour but de détecter la chute des personnes âgées sans utiliser de capteurs portés (bracelet, médaillon...). Une solution a été proposée en utilisant un capteur de type Kinect permettant de garantir le respect de la vie privée et de connaitre à chaque instant la position de la personne dans le studio. Afin détendre les possibilités du studio, un ensemble de capteurs ont été ajoutés : prises connectées, capteurs denvironnements, température, lumière, humidité, gaz...), capteurs de consommation (électricité, eau), Caméras, micro et haut parleurs. Plusieurs scénarios ont été mis en place pour utiliser les données des différents capteurs et envoyer une alarme (sms, mail) en cas de chute ou si la personne reste trop longtemps allongée sur le sol, en cas de détection danomalie (pas suffisamment de consommation deau en fonction dune température trop élevée...). Ce démonstrateur permet également de visualiser les données des différents capteurs en temps réel et à distance, en se connectant sur un site web. Les travaux futurs en lien avec cette plateforme à développer de scénarios en conditions "réelles" dans des EPHAD par exemple pour contribuer dans la prise en charge des risques liés aux personnes en situation de dépendance (déshydratation, comportement, chutes...).', '../images/livinglab.png' );*/
        displayModalFromElement('txt1', 'img1', 'texte1');
    });
    
    btn2.addEventListener('click', function() {
        // Affichez la fenêtre modale correspondante
        /*createModal('dialog2', 'Environnement hybrides connectés', 'Cette plateforme est en cours de développement et vise à offrir des services à la personne dans des environnements indoor...', '../images/plateforme.jpeg');*/
        displayModalFromElement('txt2', 'img2', 'texte2');
    });
});



function displayModalFromElement(textId, imgId, contentId) {
    var textElement = document.getElementById(textId);
    var title = textElement.querySelector('h2').innerText;
    var imageUrl = document.getElementById(imgId).querySelector('img').src;
    /*var content = textElement.querySelector('p').innerText;*/
    var contentElement = document.getElementById(contentId);
    var content = contentElement.innerHTML;
    

    createModal(textId + '_modal', title, imageUrl, content);
}


function createModal(id, title, imageUrl, content) {
    var maxLength = 150;

    var ellipsis = '...';




    // Function to truncate the text
    function truncateText(text, maxLength, ellipsis) {
        var lengthWithEllipsis = maxLength - ellipsis.length;
        var truncated = text.substring(0, lengthWithEllipsis);
        var finalText = truncated + ellipsis;
        return finalText;
    }

    // Trim the content to remove leading/trailing whitespace
    var trimmedContent = content.trim();
    var truncatedContent = trimmedContent.length > maxLength ? truncateText(trimmedContent, maxLength, ellipsis) : trimmedContent;

    console.log("Original content length: " + content.length);
    console.log("Trimmed content length: " + trimmedContent.length);
    console.log("Truncated content length: " + truncatedContent.length);
    console.log("Truncated content: " + truncatedContent);

    var existingModal = document.getElementById(id);
    if (existingModal) {
        existingModal.querySelector('.modal-title').innerText = title;
        existingModal.querySelector('.modal-image').src = imageUrl;
        existingModal.querySelector('.modal-content').innerText = truncatedContent;

        existingModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll'); 
        return;
    }


    var modal = document.createElement('div');
    modal.id = id;
    modal.className = 'c-dialog';
    modal.setAttribute('aria-hidden', 'false');
    
    var modalBox = document.createElement('div');
    modalBox.className = 'c-dialog__box';
    
    var closeButton = document.createElement('button');
    closeButton.className = 'close';
    closeButton.dataset.modal = id;
    closeButton.innerHTML = '&times;';
    closeButton.style.cursor = 'pointer';
    closeButton.style.float = 'right';
    closeButton.onclick = function() {
        var modal = document.getElementById(id);
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll'); // Add this line to re-enable scroll

    };
    
    var modalTitle = document.createElement('h2');
    modalTitle.className = 'modal-title';
    modalTitle.innerHTML = title;
    modalTitle.style.textAlign = 'center';


    var modalImage = document.createElement('img');
    modalImage.className = 'modal-image';
    modalImage.src = imageUrl;
    modalImage.alt = title;
    modalImage.style.width = '100%';

    var modalContent = document.createElement('p');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = truncatedContent;
    
    modalBox.appendChild(closeButton);
    modalBox.appendChild(modalTitle);
    modalBox.appendChild(modalImage);
    modalBox.appendChild(modalContent);
    modal.appendChild(modalBox);
    
    document.body.appendChild(modal);
    document.body.classList.add('no-scroll');
}

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
            if(numeroEntree != numeroCopie){
                alert("le numéro n'est pas correct");
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