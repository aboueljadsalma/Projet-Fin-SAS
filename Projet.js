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

let continuer = true;
 while (continuer) {

     console.log("----------------"); 
     console.log("      MENU      ");
     console.log("----------------");
     console.log("1 : Ajouter un nouveau candidat");
     console.log("2 : Ajouter plusieurs candidats à la fois");
     console.log("3 : Afficher la liste des candidats"); 
     console.log("4 : Voter pour un candidat"); 
     console.log("5 : Modifier les informations d'un candidat"); 
     console.log("6 : Supprimer un candidat"); 
     console.log("7 : Rechercher un candidat"); 
     console.log("8 : Statistiques de l'élection"); 
     console.log("9 : Quitter"); 
     const menu = Number(prompt("Entrez un nombre : "));

switch (menu) {

    case 1:
        ajouter();
        break;

    case 2:
        ajouter_plusieurs();
        break;
  case 3:
   console.log("1 : Afficher tous les candidats"); 
   console.log("2 : Afficher les candidats triés par votes"); 
   console.log("3 : Afficher les candidats d'un parti"); 
   console.log("0 : Retour"); 
   const choix = Number(prompt("Choisir un nombre : ")); 

   if (choix === 1) {
    affichage(candidats);
} else if (choix === 2) { 
    const resultat = triParVotes(candidats);
    affichage(resultat);
} else if (choix === 3) {
    const resultat = filtrerParParti(candidats);
    affichage(resultat);
} else if (choix === 0) {
    console.log("Retour au menu principal");
} else { console.log("Ce choix n'existe pas.");

} 
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
    case 9: 
        continuer = false;
        console.log("Au revoir");
        break;
        default:
            console.log("Ce choix n'existe pas."); 
  
}
    
}

function ajouter() {
    const nom = prompt("Donner le nom : ");
    const prenom = prompt("Donner le prénom : "); 
    const age = Number(prompt("Donner l'âge : ")); 
    const cin = prompt("Donner le CIN : "); 
    const partiPolitique = prompt("Donner le parti politique : "); 
    if (age < 18) { 
        console.log("Le candidat doit avoir au moins 18 ans."); 
        return; 
    } 
    for (let candidat of candidats) { 
        if (candidat.cin === cin) { 
            console.log("Ce CIN existe déjà.");
             return;
        } 
    } 
    const nouveau = { 
        nom: nom,
        prenom: prenom, 
        age: age, 
        cin: cin, 
        partiPolitique: partiPolitique, 
        electeurs: [] 
    }; 
        candidats.push(nouveau); 
        console.log("Candidat ajouté avec succès."); 
    }

function ajouter_plusieurs() {

    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ?"));

       for (let i = 0; i < nombre; i++) {
           console.log("Candidat numéro " + (i + 1));
           ajouter();
        }
}

function affichage(tab) {

    if (tab.length === 0) {
        console.log("Aucun candidat enregistré.");
        return;
    }
    for (let candidat of tab) {
        console.log("Nom : " + candidat.nom);
        console.log("Prénom : " + candidat.prenom);
        console.log("Âge : " + candidat.age);
        console.log("CIN : " + candidat.cin);
        console.log("Parti politique : " + candidat.partiPolitique);
        console.log("Nombre de votes : " + candidat.electeurs.length);
        console.log("-------------------------"); 
    } 
}
function triParVotes(tab) {
    const tableau = [];
    for (let candidat of tab) {
        tableau.push(candidat);
    }
    for (let i = 0; i < tableau.length - 1; i++) {
             for (let j = 0; j < tableau.length - 1 - i; j++) {
                if ( tableau[j].electeurs.length < tableau[j + 1].electeurs.length ) {
                    const temp = tableau[j];
                    tableau[j] = tableau[j + 1];
                    tableau[j + 1] = temp;
                } 
            } 
        } 
        return tableau;
    }


function filtrerParParti(tab) {

    const parti = prompt("Donner le parti politique : ");
    const resultat = [];

    for (let candidat of tab) {

        if (candidat.partiPolitique === parti) {
            resultat.push(candidat);
        }
    }

    return resultat;
}


function voter(){
    const cinElecteur = prompt("Donner votre CIN : ");

    for (let candidat of candidats) {
        for (let electeur of candidat.electeurs) { 
            if (electeur === cinElecteur) { 
                console.log( "Vous avez déjà voté et vous n'avez pas le droit " + "de modifier votre vote ni de voter à nouveau." );
                return; 
            } 
        } 
    } 
    const cinCandidat = prompt("Donner le CIN du candidat : ");
    for (let candidat of candidats) { 
        if (candidat.cin === cinCandidat) { 
            candidat.electeurs.push(cinElecteur);
            console.log("Votre vote a été enregistré avec succès.");
            return; 
        } 
    } 
    console.log("Candidat introuvable."); 
}

function modifier(){
    const CinRecherche = prompt("Donner le CIN du candidat : ");
    
    for(let candidat of candidats){
        if(candidat.cin === CinRecherche){
             const nouvelAge = Number(prompt("Entrez le nouvel âge :"));
             if (nouvelAge < 18) {
                console.log("Le candidat doit avoir au moins 18 ans.");
                return;
            }
            candidat.age = nouvelAge;

            candidat.partiPolitique = prompt("Donner le nouveau partiPolitique :");

            console.log("Candidat modifié avec succès.");
            return;
        }

    }
    console.log("Candidat introuvable");

}
function supprimer() { 
    const cinASupprimer = prompt("Donner le CIN du candidat : "); 
    let trouve = false; 
    for (let i = 0; i < candidats.length; i++) { 
        if (candidats[i].cin === cinASupprimer) { 
            candidats.splice(i, 1); trouve = true; break; 
        } 
    } 
    if (trouve) { 
        console.log("Candidat supprimé avec succès."); 
    } 
    else { 
        console.log("Candidat introuvable."); 
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

    console.log("Nombre total de candidats : " + candidats.length);

    let totalVotes = 0;
    for (let i = 0; i < candidats.length; i++) {
        totalVotes += candidats[i].electeurs.length;
    }
    console.log("Nombre total de votes : " + totalVotes);

    let classement = [...candidats];

    classement.sort(function(a, b) {
        return b.electeurs.length - a.electeurs.length;
    });

    console.log("Top 3 des candidats :");

    let limite = Math.min(3, classement.length);

    for (let i = 0; i < limite; i++) {
        console.log(
            (i + 1) + ". " +
            classement[i].nom + " " +
            classement[i].prenom +
            " - " +
            classement[i].electeurs.length +
            " votes"
        );
    }

    let partis = {};

    for (let i = 0; i < candidats.length; i++) {

        let parti = candidats[i].partiPolitique;

        if (partis[parti] === undefined) {
            partis[parti] = 1;
        } else {
            partis[parti]++;
        }
    }

    console.log("Nombre de candidats par parti :");

    for (let parti in partis) {
        console.log(parti + " : " + partis[parti]);
    }
}