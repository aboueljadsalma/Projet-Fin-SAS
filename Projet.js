const prompt = require("prompt-sync")();

let candidats = [];

for(let i = 0 ; true ; i++) {


                console.log("----------------")
                console.log("      MENU      ")    
                console.log("----------------")

        console.log("1: Ajouter un nouveau candidat")

        console.log("2: Ajouter plusieurs candidats à la fois")

        console.log("3: Afficher la liste des candidats")

        console.log("4: Voter pour un candidat")
        
        console.log("5: Modifier les informations d'un candidat")

        console.log("6: Supprimer un candidat")

        console.log("7: Rechercher des candidats")

        console.log("8: Tatistiques de l'élection")

        console.log("9: Quiter")
        
        const menu  =parseInt(prompt("Entrez un nombre selon la list :"))
        if( menu === 9){
            console.log("Au revoir");
            break;
        }

switch (menu) {

    case 1:
        ajouter();
        break;

    case 2:
        ajouter_plusieurs();
        break;
    case 3:
        afficher();
        break;
    case 4:
        voter();
        break;
    case 5:
        modifier();
        break;
    case 6:
        supprimer();
        break;
    case 7:
        Rechercher();
        break;
    case 8:
        statistiques();
        break;
  
}
    
}


function ajouter() {

    let nouveau = {
        nom: prompt("Donner le nom : "),
        prenom: prompt("Donner le prénom : "),
        age: Number(prompt("Donner l'âge : ")),
        cin: prompt("Donner le CIN : "),
        partiPolitique: prompt("Donner le parti politique : "),
        electeurs: []
    };

    candidats.push(nouveau);
}

function ajouter_plusieurs() {

    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ?"));

    for (let i = 0; i < nombre; i++) {
        ajouter();
    }
}

function afficher() {

    for (let i = 0; i < candidats.length - 1; i++) {

        for (let j = 0; j < candidats.length - 1; j++) {

            if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {

                let temp = candidats[j].electeurs;

                candidats[j].electeurs = candidats[j + 1].electeurs;

                candidats[j + 1].electeurs = temp;
                break;
            }
        }
    }

    console.log("La liste des candidats : ");

    for (let candidat of candidats) {

        console.log("Nom :", candidat.nom);
        console.log("Prénom :", candidat.prenom);
        console.log("Âge :", candidat.age);
        console.log("CIN :", candidat.cin);
        console.log("Parti politique :", candidat.partiPolitique);
        console.log("Nombre de votes :", candidat.electeurs.length);
    }
}
function voter(){
    let CIN = prompt("donner votre CIN : ");

    let DéjaVote = false ;

    for (let candidat of candidats) {
        if (candidat.electeurs.includes(CIN)) {
            DéjaVote = true ;
            break;
        }
    }
    if (DéjaVote === true){
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.");
            return;
    }
    let CINcandidat = prompt("Donner le CIN du candidat : ");

    let candidatTrouve = false;

    for (let candidat of candidats) {
       if (candidat.cin === CINcandidat){
         candidat.electeurs.push(CIN);
         candidatTrouve = true;

         console.log("Votre vote a été enregistré avec succès.");
         break;
       }
    
    }
    if (candidatTrouve === false) {
        console.log("Candidat introuvable");
    }

}
function modifier(){
    const CinRecherche = prompt("Donner le CIN du candidat : ");
    let trouve = false ;
   
    for(let candidat of candidats){
        if(candidat.cin === CinRecherche){
            candidat.age = Number(prompt("Entrez le nouvel âge :")) ;
            candidat.partiPolitique = prompt("Donner le nouveau partiPolitique :");
            trouve = true ;
            break;
       
        }

    }
    if (trouve === false ){
        console.log("Candidat introuvable");
    }

}
function supprimer(){ 
    const NCandidats = [];

    let trouve = false ;

    const CinASupprimer = prompt("Donner le CIN du candidat :");

    for (let candidat of candidats){
        if(candidat.cin !== CinASupprimer){
             NCandidats.push(candidat);
    
        }
        else{
            trouve = true ;
        }
    }
    
     candidats = NCandidats;
     if(trouve = false ){
        console.log("Candidat Introuvable ");
     }
     else{
        console.log("Candidat supprimé avec succès ");
     }

}


