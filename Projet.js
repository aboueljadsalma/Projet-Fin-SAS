const prompt = require("prompt-sync")();

let candidats = [{
    nom: "Barkani",
    prenom: "Imad",
    age: 23,
    cin: "BA589",
    partiPolitique: "PAM",
    electeurs: ["AA123", "BB456", "CC789"]
},
{
    nom: "Ben zayd",
    prenom: "Inas",
    age: 20,
    cin: "O5897",
    partiPolitique: "RNI",
    electeurs: ["DD234", "EE567"]
},
{
    nom: "Tamir",
    prenom: "Sara",
    age: 18,
    cin: "RT579",
    partiPolitique: "Istiqlal",
    electeurs: ["FF890", "GG123", "HH456", "II789"]
},
{
    nom: "Allaoui",
    prenom: "Mohammed",
    age: 32,
    cin: "EZ324",
    partiPolitique: "PAM",
    electeurs: ["JJ234"]
},
{
    nom: "Hachimi",
    prenom: "Salah edine",
    age: 22,
    cin: "PK712",
    partiPolitique: "RNI",
    electeurs: ["KK567", "LL890", "MM123"]
},
{
    nom: "Talal",
    prenom: "Salma",
    age: 27,
    cin: "ZQ584",
    partiPolitique: "USFP",
    electeurs: ["NN456", "OO789"]
},
{
    nom: "Talha",
    prenom: "Mariam",
    age: 40,
    cin: "KH627",
    partiPolitique: "PAM",
    electeurs: ["PP123", "QQ456", "RR789", "SS234", "TT567"]
    
},
{
    nom: "Yara",
    prenom: "Sihame",
    age: 47,
    cin: "GY891",
    partiPolitique: "RNI",
    electeurs: ["UU890"]
},
{
    nom: "Zraibi",
    prenom: "Allal",
    age: 51,
    cin: "K4795",
    partiPolitique: "Istiqlal",
    electeurs: ["VV123", "WW456"]
},
{
    nom: "Ritawi",
    prenom: "Moghit",
    age: 31,
    cin: "MA555",
    partiPolitique: "USFP",
    electeurs: ["XX789", "YY234", "ZZ567"]
},
{
    nom: "Ghali",
    prenom: "Aya",
    age: 25,
    cin: "AG627",
    partiPolitique: "Indépendant",
    electeurs: ["AB890"]
},
{
    nom: "El Amrani",
    prenom: "Youssef",
    age: 36,
    cin: "EL369",
    partiPolitique: "PJD",
    electeurs: ["CD123", "EF456"]
},
{
    nom: "Bennani",
    prenom: "Nour",
    age: 29,
    cin: "BN741",
    partiPolitique: "PAM",
    electeurs: ["GH789", "IJ234", "KL567"]
},
{
    nom: "Chraibi",
    prenom: "Adam",
    age: 44,
    cin: "CH852",
    partiPolitique: "RNI",
    electeurs: ["MN890", "OP123"]
},
 ]

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
        
        const menu  =Number(prompt("Entrez un nombre selon la list :"))
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
        rechercher();
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
     if (nouveau.age < 18) {
        console.log("Le candidat doit avoir au moins 18 ans.");
        return;
    }

    candidats.push(nouveau);
     console.log("Candidat ajouté avec succès.");
}

function ajouter_plusieurs() {

    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ?"));
    if (nombre <= 0){
        console.log("")
    }else {
       for (let i = 0; i < nombre; i++) {
           ajouter();
        }
    }
}

function afficher() {

    for (let i = 0; i < candidats.length - 1; i++) {

        for (let j = 0; j < candidats.length - 1 - i; j++) {

            if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {

                let temp = candidats[j];

                candidats[j] = candidats[j + 1];

                candidats[j + 1] = temp;
            }
        }
    }
    const partiRecherche = prompt("Donner le parti politique : ");

    let trouve = false;

    for (let candidat of candidats) {
        if (candidat.partiPolitique === partiRecherche) {

        console.log("Nom :", candidat.nom);
        console.log("Prénom :", candidat.prenom);
        console.log("Âge :", candidat.age);
        console.log("CIN :", candidat.cin);
        console.log("Parti politique :", candidat.partiPolitique);
        console.log("Nombre de votes :", candidat.electeurs.length);
         trouve = true;
        }
    }
     if (trouve === false) {
        console.log("Aucun candidat trouvé pour ce parti.");
    }
}

function voter(){
    let CIN = prompt("Donner votre CIN : ");

    let DejaVote = false ;

    for (let candidat of candidats) {
        if (candidat.electeurs.includes(CIN)) {
            DejaVote = true ;
            break;
        }
    }
    if (DejaVote === true){
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
             let nouvelAge = Number(prompt("Entrez le nouvel âge :"));
             if (nouvelAge < 18) {
                console.log("Le candidat doit avoir au moins 18 ans.");
                return;
            }
            candidat.age = nouvelAge;

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
     if(trouve === false ){
        console.log("Candidat Introuvable ");
     }
     else{
        console.log("Candidat supprimé avec succès ");
     }

}
function rechercher() {
    const nomRecherche = prompt("Donner le nom du candidat : ");

    let resultat = null;

    for (let candidat of candidats) {

        if (candidat.nom === nomRecherche) {
            resultat = candidat;
            break;
        }
    }
    if (resultat) {

        console.log("Candidat trouvé :");
        console.log("Nom :", resultat.nom);
        console.log("Prénom :", resultat.prenom);
        console.log("Âge :", resultat.age);
        console.log("CIN :", resultat.cin);
        console.log("Parti politique :", resultat.partiPolitique);
        console.log("Nombre de votes :", resultat.electeurs.length);
    }else{
        console.log("Condidat introuvable")
    }
}
function statistiques() {

let totalVotes = 0;

for (let candidat of candidats) {
    totalVotes = totalVotes + candidat.electeurs.length;
}

console.log("Nombre total de candidats :", candidats.length);
console.log("Nombre total de votes :", totalVotes);

}