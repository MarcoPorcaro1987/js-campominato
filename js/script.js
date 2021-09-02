// Funzioni
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

function campo(celle){
    for(i=1; i <= celle; i++ ){
        document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`;
    }
}

function randomizer(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Programma Principale
// // Disegno il campo da gioco.
var dimensioneGriglia = parseInt(prompt("In quanto tempo vuoi morire? Subito (Scrivi 100); Adesso (Scrivi 80), Ieri (Scrivi 50)"));
while(dimensioneGriglia != 50 && dimensioneGriglia != 80 && dimensioneGriglia != 100){
    dimensioneGriglia = parseInt(prompt("Iniziamo bene -.-. Scrivi 100, 80 o 50)"));
}

campo(dimensioneGriglia);
// console.log(campo);

// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.

const bombe = [];
while(bombe.length < 16){
    var bomba = randomizer(1, dimensioneGriglia);
    if(bombe.indexOf(bomba) === -1){
        bombe.push(bomba);
    } 
}
console.log("Posizione segreta delle bombe " + bombe);


// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
var sceltaUtente = [];
var clickutente = "";
document.getElementById("campo").addEventListener("click", 
    function(event){
        clickutente = event.target.innerHTML;
        if(sceltaUtente.includes(event.target.innerHTML)){
            alert("Non barare! Seleziona un'altra casella!");
        } else {
        sceltaUtente.push(event.target.innerHTML);
        event.target.classList.add("rosso");
        }

        for(i=0; i < bombe.length; i++) {
            if(clickutente == bombe[i]){
                event.target.classList.add("nero");
                alert("Sei esploso dopo " + (sceltaUtente.length - 1) + " passi! Passa da Taffo, raccogli i tuoi resti e riprova ricaricando la pagina!");  
            }
        }
        if(sceltaUtente.length == 84){
              alert("Hai vinto dopo 84 passi. Sei stato fortunato e io non vedo l'ora di raccogliere i tuoi resti. Ricarica la pagina e preparati ad esplodere.");
        }        
    }
);

