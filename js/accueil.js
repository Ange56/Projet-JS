

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



document.addEventListener('DOMContentLoaded', function () {
    let copiedNumber = '';

    // Listen for copy events
    document.addEventListener('copy', function (e) {
        const selectedText = window.getSelection().toString();
        const phonePattern = /\+33\d{9}/;

        if (phonePattern.test(selectedText)) {
            copiedNumber = selectedText;
            setTimeout(() => {
                const userConfirmed = confirm(`Si vous voulez appeler ce numéro : ${copiedNumber}, entrez le de nouveau dans le champ ci-dessous puis validez.`);
                if (userConfirmed) {
                    showPhonePrompt();
                }
            }, 100);
        }
    });

    // Create and show the prompt
    function showPhonePrompt() {
        const phonePrompt = document.createElement('div');
        phonePrompt.id = 'phonePrompt';
        phonePrompt.style.display = 'block';
        phonePrompt.innerHTML = `
            <label for="phoneInput">Si vous voulez appeler ce numéro, entrez le de nouveau puis validez:</label>
            <input type="text" id="phoneInput">
            <button id="validateButton">Valider</button>
        `;
        document.body.appendChild(phonePrompt);

        document.getElementById('validateButton').addEventListener('click', function () {
            const phoneInput = document.getElementById('phoneInput').value;
            if (phoneInput === copiedNumber) {
                console.log(`Vous appelez ce numéro : ${phoneInput}`);
                playRingtone();
                hidePhonePrompt();
            } else {
                alert('Le numéro saisi ne correspond pas.');
            }
        });
    }

    // Play ringtone for 5 seconds
    function playRingtone() {
        let ringtone = document.getElementById('ringtone');
        if (!ringtone) {
            ringtone = document.createElement('audio');
            ringtone.id = 'ringtone';
            ringtone.src = 'path_to_your_ringtone.mp3';
            document.body.appendChild(ringtone);
        }
        ringtone.play();
        setTimeout(() => {
            ringtone.pause();
            ringtone.currentTime = 0;
        }, 5000);
    }

    // Hide the phone prompt
    function hidePhonePrompt() {
        const phonePrompt = document.getElementById('phonePrompt');
        if (phonePrompt) {
            document.body.removeChild(phonePrompt);
        }
    }
});