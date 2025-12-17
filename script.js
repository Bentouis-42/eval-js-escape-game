
fetch('escapegame.json')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        activites(data)
        

    })

// role : afficher les info de ma carte de mon site escape game dans ma page html
//parametre : data toute ma donnée activites
//return : rien car elle affiche 

function activites(data) {

    //récupérer les info du json une par une -> for each
    console.log(data.nomCommercial)
    console.log(data.phraseAccroche)
    console.log(data.texteAppelAction)
       //récuperer dans un tableau toutes les info de mes activités
    data.activites.forEach(activite => {
        console.log(activite.nom)
        console.log(activite.description)
        console.log(activite.imageurl)

        document.getElementById("section1").innerHTML +=
            `
  <div class="w33 padding-20px">
  <img class="latailledemesimg" src="${activite.imageurl}" alt="">
                   <h2 class="margintop-20px">${activite.nom}</h2>
                    <p class="margintop-20px marginbottom-50px">${activite.description}</p>
                    <a href="" class="textnoir secondbtn margintop-20px">Réserver</a>
                
            </div>
 
 `


    });
    //Role:Afficher les temoignages
    //parametre: data toute ma données témoignages
    //return : rien car elle affiche 
temoignages(data)
    function temoignages(data) {
        //récuperer dans un tableau toutes les infos des temoignages
        data.temoignages.forEach(temoignages => {
            console.log(temoignages.prenom)
            console.log(temoignages.typeExperience)
            console.log(temoignages.commentaire)
            console.log(temoignages.note)

            document.getElementById("section2").innerHTML += `

        <p class="textblan card">${temoignages.prenom}</p>
        <p class="textblan card">${temoignages.typeExperience}</p>
        <p class="textblan card">${temoignages.commentaire}</p>
        <p class="textblan card"><i class="ph-fill ph-star"></i>${temoignages.note}</p>
        






        `

        });

    }

}


