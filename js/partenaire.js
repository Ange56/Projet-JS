//partenaire/*------------------------------telephne --------------------------------------------*/

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