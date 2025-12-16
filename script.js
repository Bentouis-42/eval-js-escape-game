fetch('escapegame.json')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        activites(data)

    })

// role : afficher les info de ma carte de mon site escape game dans ma page html
//parametre : les r -> tableau de recettes
//return : rien car elle affiche 

function activites(tableauInfo) {

    //récupérer les recettes une par une -> for each

    tableauInfo.forEach(info => {

        console.log(info.nom)
        console.log(info.description)
        console.log(info.image-url)
        console.log(info.difficulte)


        // afficher dans la page web les recettes : 
        document.getElementById("injecter").innerHTML += `


        
        
        
        
        
        `




            
    



    });
    //afficher les info de mon escap game//



}





