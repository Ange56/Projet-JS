//page accueil
function loader(){
    //cacher le body et après le montrer en modifiant css avec js
    let load = document.getElementById("reload");
    console.log(load);
    load.style.display = 'none';
    let page = document.getElementById("page");
    page.style.display = 'flex';
}

function load(){
    setTimeout(loader,2000);
}
function main(){
    load();
}
main();
//prb horloge : met pas l'heure de l'aprem
