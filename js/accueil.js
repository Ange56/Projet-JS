document.addEventListener('DOMContentLoaded', function () {

    //selectionne l'image par son ID
    const image = document.getElementById('img-competences');

    //variable qui défini l'etat de l'image, actuellement sur false
    let zoomed = false;

    //ajoute un ecouteur d'evenements pour gerer les clics sur l'image
    image.addEventListener('click', function () {
        
        if (zoomed) { //verifie si l'image est deja zoome
            //si oui reinitialise pour revenir a la taille d'origine
            image.style.transform = 'scale(1)';
        } else {
            //sinon zoom l'image en fois 2
            image.style.transform = 'scale(2)';
        }
        zoomed = !zoomed; //inverse l'etat de la variable zoomed
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("txt");
    const words = textElement.innerText.split(" ");
    textElement.innerHTML = ""; // Effacer le texte original

    // Parcourir les mots en ordre inverse pour l'animation
    words.slice().reverse().forEach((word, index) => {
        setTimeout(() => {
            textElement.innerHTML = word + " " + textElement.innerHTML; // Ajouter le mot au début
        }, index * 500); // Ajuster le délai au besoin
    });

    // Afficher le texte dans l'ordre normal après l'animation
    setTimeout(() => {
        textElement.innerHTML = words.join(" "); // Rejoindre les mots pour reformer la phrase
    }, words.length * 500); // Ajuster le délai en fonction du nombre de mots
});