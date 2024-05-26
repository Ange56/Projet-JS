
// Écouteur d'événement pour détecter lorsque le DOM (Document Object Model) est entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne le formulaire par son ID
    //const form = document.getElementById('myForm');
    const form = document.querySelector('form[action="contact.html"]');
    // Sélectionne les champs de saisie par leur ID
    const prenomInput = document.getElementById('prenom');
    const emailInput = document.getElementById('email');
    const remarqueInput = document.getElementById('remarque');
    // Sélectionne le bouton de soumission par son ID
    const fin = document.getElementById('fin');

    // Sélectionne les éléments d'erreur par leur ID
    const prenomError = document.getElementById('prenomError');
    const emailError = document.getElementById('emailError');
    const remarqueError = document.getElementById('remarqueError');

    // Initialise des variables pour suivre si les champs ont été touchés ou non
    let prenomTouched = false;
    let emailTouched = false;
    let remarqueTouched = false;

    // Fonction générique pour valider un champ de formulaire
    function validateField(input, errorElement, validator, touched) {
        if (!touched) {
            // Si le champ n'a pas été touché, masque le message d'erreur
            errorElement.style.display = 'none';
            return true; // Le champ est valide (car non-touche)
        }
        // Si le champ a été touché, utilise le validateur personnalisé pour vérifier sa valeur
        if (validator(input.value.trim())) {
            errorElement.style.display = 'none'; // Masque le message d'erreur si le champ est valide
            return true; // Retourne true si le champ est valide
        } else {
            errorElement.style.display = 'block'; // Affiche le message d'erreur si le champ est invalide
            return false; // Retourne false si le champ est invalide
        }
    }

    // Fonction de validation spécifique pour le champ "Nom"
    function validatePrenom() {
        return validateField(prenomInput, prenomError, function (value) {
            // Valide si le champ n'est pas vide et s'il contient un espace (pour prénom et nom)
            if (value === '' || !value.includes(' ')) {
                prenomError.textContent = 'Veuillez entrer un prénom et un nom séparés par un espace.';
                return false; // Retourne false si la validation échoue
            }
            return true; // Retourne true si la validation réussit
        }, prenomTouched); // Passe la variable de touche spécifique à ce champ
    }

    // Fonction de validation spécifique pour le champ "Email"
    function validateEmail() {
        return validateField(emailInput, emailError, function (value) {
            // Valide si le champ n'est pas vide et s'il contient un "@" et un "."
            if (value === '' || !value.includes('@') || !value.includes('.')) {
                emailError.textContent = 'Veuillez entrer une adresse email valide.';
                return false; // Retourne false si la validation échoue
            }
            return true; // Retourne true si la validation réussit
        }, emailTouched); // Passe la variable de touche spécifique à ce champ
    }

    // Fonction de validation spécifique pour le champ "Message"
    function validateRemarque() {
        return validateField(remarqueInput, remarqueError, function (value) {
            // Valide si la longueur du message est entre 20 et 1000 caractères
            if (value.length < 20 || value.length > 1000) {
                remarqueError.textContent = 'Le message doit contenir entre 20 et 1000 caractères.';
                return false; // Retourne false si la validation échoue
            }
            return true; // Retourne true si la validation réussit
        }, remarqueTouched); // Passe la variable de touche spécifique à ce champ
    }

    // Fonction pour valider l'ensemble du formulaire
    
	function validateForm() {
        // Valide chaque champ individuellement et stocke le résultat dans des variables booléennes
        const isPrenomValid = validatePrenom();
        const isEmailValid = validateEmail();
        const isRemarqueValid = validateRemarque();
        // Active le bouton de soumission uniquement si tous les champs sont valides
        fin.disabled = !(isPrenomValid && isEmailValid && isRemarqueValid);
    }

    // Écouteurs d'événements pour les champs de saisie
    prenomInput.addEventListener('input', function() {
        prenomTouched = true; // Marque le champ comme touché
        validateForm(); // Valide le formulaire à chaque saisie
    });

    emailInput.addEventListener('input', function() {
        emailTouched = true; // Marque le champ comme touché
        validateForm(); // Valide le formulaire à chaque saisie
    });

    remarqueInput.addEventListener('input', function() {
        remarqueTouched = true; // Marque le champ comme touché
        validateForm(); // Valide le formulaire à chaque saisie
    });

    // Événement de soumission du formulaire
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche la soumission automatique du formulaire
        // Valide chaque champ individuellement lors de la soumission du formulaire
        if (validatePrenom() && validateEmail() && validateRemarque()) {
            alert("C'est bon, direction accueil.html"); // Alerte l'utilisateur que le formulaire est valide
            window.location.href = '../html/accueil.html'; // Redirige vers la page d'accueil
        }
    });

    // Validation initiale pour désactiver le bouton de soumission lors du chargement de la page
    validateForm();
    // Désactive le bouton de soumission au chargement de la page
    fin.disabled = true;
});
