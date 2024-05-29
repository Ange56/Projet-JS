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
                card1eLigne();
                card2eLigne();
                card3eLigne();
                card4eLigne();
                card5eLigne();
            }
        }
    }
}

function nouvelle_carte(rowStart, rowEnd, columnStart, columEnd, idcard, idAvant){
    let page = document.getElementById("page");
    let plus = document.createElement("img");
    let new_card = document.createElement("div");

    plus.src = "../images/plus.png";
    plus.height = "100";
    plus.width ="100";
    //rajouter icones crayons sinon
    
    page.style.gridTemplateColumns = "1fr 5fr 1fr 5fr 1fr 5fr 1fr";
    plus.style.gridRowStart = rowStart;/*commence à la deuxième ligne*/
    plus.style.gridRowEnd= rowEnd;/*finit à la 3e ligne*/
    plus.style.gridColumnStart= columnStart;/*commence à la 2e colonne*/
    plus.style.gridColumnEnd= columEnd;

    //sert à centrer l'image
    plus.style.display = "block";
    plus.style.margin = "auto";

    
    plus.addEventListener("click", () =>{
        plus.style.display = "none";
        new_card.classList.add("card");
        new_card.id= idcard;
        new_card.style.gridRowStart = rowStart;/*commence à la deuxième ligne*/
        new_card.style.gridRowEnd = rowEnd;/*finit à la 3e ligne*/
        new_card.style.gridColumnStart = columnStart;/*commence à la 2e colonne*/
        new_card.style.gridColumnEnd= columEnd;
    });
    for(enfant of page.children){
        if(enfant.id == idAvant){
            page.appendChild(plus);
            page.appendChild(new_card);
        }
    }
}


function card1eLigne(){//crée une carte sur la première ligne
    let new_card = nouvelle_carte("3", "4", "6", "7", "id1", "c");
}
function card2eLigne(){
    let new_card = nouvelle_carte("5", "6", "4", "5", "id2", "e");
}
function card3eLigne(){
    let new_card = nouvelle_carte("7", "8", "4", "5", "id3", "g");
}
function card4eLigne(){
    let new_card = nouvelle_carte("9", "10", "4", "5", "id4", "i");
}
function card5eLigne(){ 
    let new_card = nouvelle_carte("11", "12", "4", "5", "id5", "k");
}




function main(){
    grattage();

}

main();
//prb hover avec js