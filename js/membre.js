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
    console.log(canva);
    console.log(canva.width);
    canva.height = canva.width;

    let imageDessus = new Image();
    imageDessus.src = "../images/contact.jpg";


    imageDessus.onload = () => {
        photo.drawImage(imageDessus,0,0,canva.width,canva.height);
        photo.globalCompositeOperation = 'destination-out';
    };
    console.log(imageDessus);


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



function main(){
    grattage();

}

main();