const prompt = require("prompt-sync")();

let candidats = [];

let cond= true;
while (cond) {

    let menu = parseInt(prompt(`
        1: Ajouter un nouveau candidat

        2: Ajouter plusieurs candidats à la fois

        3: Afficher la liste des candidats

        4: Voter pour un candidat
        
        5: Modifier les informations d'un candidat

        6: Supprimer un candidat

        7: Rechercher des candidats

        8: tatistiques de l'élection

        9: Quiter
        
        
    Entrez:    `));

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
    case 9:
        cond = false;
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

                let temp = candidats[j];

                candidats[j] = candidats[j + 1];

                candidats[j + 1] = temp;
            }
        }
    }

    console.log("Liste des candidats :");

    for (let candidat of candidats) {

        console.log("Nom :", candidat.nom);
        console.log("Prénom :", candidat.prenom);
        console.log("Âge :", candidat.age);
        console.log("CIN :", candidat.cin);
        console.log("Parti politique :", candidat.partiPolitique);
        console.log("Nombre de votes :", candidat.electeurs.length);
    }
}
