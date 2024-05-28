//membre


/*---------------------IMAGE A GRATTER---------------------*/



function grattage(){
    let contact = document.getElementsByName("karine")[0];
    let canva = document.createElement("canvas");
    canva.classList.add("gratter");
    contact.appendChild(canva);
    let photo = canva.getContext("2d");
    contact = contact.getElementsByTagName("img")[0];
    canva.width = contact.offsetHeight;
    canva.height = canva.width;

    let imageDessus = new Image();
    imageDessus.src = "../images/contact.jpg";


    imageDessus.onload = () => {
        photo.drawImage(imageDessus,0,0,canva.width,canva.height);
        photo.globalCompositeOperation = 'destination-out';
    };


    let gratte = false;
    let x;
    let y;

    let cadre = canva.getBoundingClientRect();

    canva.addEventListener('mousedown', (souris) => {
        gratte = true;
    });
    document.addEventListener('mouseup', (souris) => {
        gratte = false;
    });

    canva.addEventListener('mousemove', (souris) => {
        if(gratte){
            x = souris.clientX - cadre.left;
            y = souris.clientY - cadre.top;

            // Draw a circle to create the scratch effect
            photo.beginPath();
            photo.arc(x, y, 13, 0, 180);
            photo.fill();
        }
    });
}





/*----------------------MODE EDITION-------------------------*/
function edition_appui_bouton(){
    let bouton_edition = document.getElementById("bouton-edition");
    let mode_edition = window.prompt("Entrez le nom du profil administrateur","nom");
    if(mode_edition == "admin"){    
        let new_window = window.prompt("Entrez le mot de passe du profil administrateur", "mot de passe");
        if(new_window =="admin_pwd"){
            if (bouton_edition.style.backgroundColor === "black"){
                bouton_edition.style.backgroundColor = "#CA0000"; // couleur originale
                bouton_edition.style.borderColor = "black"; // couleur originale
            } 
            else{
                bouton_edition.style.backgroundColor = "black"; // nouvelle couleur
                bouton_edition.style.borderColor = "red"; // nouvelle couleur
                nouvelle_carte();
            }
        }
    }
}
function nouvelle_carte(){
    let page = document.getElementById("page");
    let card2 = document.getElementById("c");
    let plus = document.createElement("img");
    let new_card = document.createElement("div");

    
    page.insertBefore(plus, card2);
    plus.src = "../images/plus.png";
    plus.height = "100";
    plus.width ="100";
    //le centrer
    //rajouter icones crayons sinon
    
    page.style.gridTemplateColumns = "1fr 5fr 1fr 5fr 1fr 5fr 1fr";
    plus.style.gridRowStart ="3";/*commence à la deuxième ligne*/
    plus.style.gridRowEnd="4";/*finit à la 3e ligne*/
    plus.style.gridColumnStart= "6";/*commence à la 2e colonne*/
    plus.style.gridColumnEnd= "7";
    
    plus.addEventListener("click", () =>{
        plus.style.display = "none";
        new_card.classList.add("card");
        new_card.id="cbis";
        new_card.style.gridRowStart ="3";/*commence à la deuxième ligne*/
        new_card.style.gridRowEnd="4";/*finit à la 3e ligne*/
        new_card.style.gridColumnStart= "6";/*commence à la 2e colonne*/
        new_card.style.gridColumnEnd= "7";
    });



    page.insertBefore(new_card, card2);

}



function main(){
    grattage();

}

main();
//prb hover avec js