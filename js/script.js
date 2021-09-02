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
// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.

// var numCell = parseInt(prompt("Inserisci il numero di celle del campo da gioco"));
// while(isNaN(numCell) || numCell < 1){
//     numCell = parseInt(prompt("Errore! Inserisci un numero di celle maggiore di 0"));
// }

// // Disegno il campo da gioco.

campo(10);
// console.log(campo);

// Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
// I numeri non possono essere duplicati.

const bombe = [];
while(bombe.length < 3){
    var bomba = randomizer(1, 10);
    if(bombe.indexOf(bomba) === -1){
        bombe.push(bomba);
    } 
}
console.log(bombe);


// In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
var sceltaUtente = [];
var clickutente = "";
var vittoria = sceltaUtente.length - bombe.length;
// var vittoria = sceltaUtente.length - bombe.lenght;
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
        // if(sceltaUtente.length == (sceltaUtente.length - bombe.length)){
        //       alert("Sei stato solo fortunato:" + (sceltaUtente.length - 1) + "non vedo l'ora di raccogliere i tuoi resti. Ricarica la pagina");

        // }   
        // console.log(bombe.length);
        //     console.log(sceltaUtente.length);
            // console.log(vittoria);
            // else if (sceltaUtente.length = vittoria)
            // else if (clickutente) {
        //       console.log(sceltaUtente);
        //       alert("Sei stato solo fortunato:" + "" + "non vedo l'ora di raccogliere i tuoi resti. Ricarica la pagina")
        //     }
      
    }
);

// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50