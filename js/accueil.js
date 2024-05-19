//page accueil
function loader(){
    //cacher le body et après le montrer en modifiant css avec js

    removeBootstrapLinks();

    let load = document.getElementById("reload");
    console.log(load);
    load.style.display = 'none';
    let page = document.getElementById("page");
    page.style.display = 'flex';
    let menu = document.getElementById("menu");
    menu.style.display = 'flex';
    let footer = document.getElementsByTagName("footer")[0];
    let table = document.getElementsByTagName("footer")[0].getElementsByTagName("table")[0];
    table.style.display = 'flex';
    footer.style.backgroundColor = 'black';/*couleur de fond du footer*/
}
function removeBootstrapLinks() {
    // Supprimer les liens Bootstrap CSS
    let bootstrapCSS = document.querySelector('link[href*="bootstrap"]');
    if (bootstrapCSS) {
        bootstrapCSS.remove();
    }

    // Supprimer les liens Bootstrap JS
    let bootstrapJS = document.querySelector('script[src*="bootstrap"]');
    if (bootstrapJS) {
        bootstrapJS.remove();
    }
}


function load(){
    setTimeout(loader,2000);
}
function main(){
    load();
}
main();
//prb horloge : met pas l'heure de l'aprem
