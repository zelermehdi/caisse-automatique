 /**
 * Projet : Traduire un algorythme en code JS
 * Etape 1 : Déclarer les variables
 * Attention à ne pas confondre les éléments HTML( let zoneRendu) avec les éléments numériques ( let rendu)
 */
let total = document.getElementById("total");
let paiement =document.getElementById("paiement");
let zonerendu = document.querySelector("#rendu");
let rendu = 0;
/* On initialise la variable 'buton' et on la relie à l'id 'submit'; 
** A noter qu'il faut mettre un type submit sur le btn pr que la page ne se recharge pas à chaque clic
*/ 
let buton=document.getElementById("submit");
/**
 * on appelle le btn et lui lui donne un écouteur d'événement puis entre parenthèses on lui dit quoi faire = au clic, faire fonctionner la fonction 'hello'
 */
buton.addEventListener('click',hello);

/**
 * On crée la fonction hello : 
 * on injecte du texte en JS avec un 'textContent' + la soustraction ENTRE PARENTHESE
 * on précise la valeur de 'rendu'
 */
function hello(){

    zonerendu.textContent = `Votre monnaie est de ` + (paiement.value - total.value);
    rendu=paiement.value - total.value;
    monnaie();
};

/**
 * On crée la fonction monnaie pour afficher le nombre de billets de 10, de 5 et les pièces de 1 €
 */
function monnaie(){
    //IMPORTANT : déclarer les variables pour billets et pièces dans la fonction et leur donner une valeur de ZERO pour qu'à chaque calcul, la valeur soit réinitialisée
    let nbrBillets10 = 0;
    let nbrBillets5 = 0;
    let nbrPieces = 0;
    //On fait trois boucles While  pour chaque information sur les billets rendus s'affiche
    while (rendu >= 10) {
        nbrBillets10 = nbrBillets10+1;
        rendu = rendu - 10;
        document.getElementById("billets10").textContent = `Nombre de billets de 10 € :  ${nbrBillets10}` + " " + "billets";
    };
    while (rendu >= 5) {
        nbrBillets5 = nbrBillets5+1;
        rendu = rendu - 5;
        document.querySelector("#billets5").textContent = `Nombre de billets de 5 € :  ${nbrBillets5}` + " " + "billets";
    };
    
    while (rendu >0 && rendu<5) {
        nbrPieces = nbrPieces+1;
        rendu = rendu - 1;
        document.querySelector("#pieces").textContent = `Nombre de pièces de 1 € :  ${nbrPieces}` + " " + "pièces";
    };
};


// METHODE 1
/**
 * Traduction de mon algo en js 
 */
// while (rendu >= 10) {
//     nbrBillets10 = nbrBillets10 + 1;
//     rendu = rendu - 10;
//     document.querySelector("#billets10").innerHTML = `Nombre de billets de 10 € :  ${nbrBillets10}` + " " + "billets";
// };
// while (rendu >= 5) {
//     nbrBillets5 = nbrBillets5 + 1;
//     rendu = rendu - 5;
//     document.querySelector("#billets5").innerHTML = `Nombre de billets de 5 € :  ${nbrBillets5}` + " " + "billets";
// };
// console.log(rendu);
// while (rendu >0 && rendu<5) {
//     nbrPieces = nbrPieces + 1;
//     rendu = rendu - 1;
//     document.querySelector("#piece").innerHTML = `Nombre de pièces de 1 € :  ${nbrPieces}` + " " + "pièces";
// };

