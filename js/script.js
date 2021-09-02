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
var dimensioneGriglia = parseInt(prompt("Questo è un campo minato! In quanto tempo vuoi morire? Poco (Scrivi 100); Adesso (Scrivi 80), Sono già morto (Scrivi 50)"));
while(dimensioneGriglia != 50 && dimensioneGriglia != 80 && dimensioneGriglia != 100){
    dimensioneGriglia = parseInt(prompt("Iniziamo bene -.-. Scrivi 100, 80 o 50)"));
}

campo(dimensioneGriglia);

// Il computer deve generare 16 numeri casuali tra 1 e la dimensione del campo minato.
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
                alert("Sei esploso dopo " + (sceltaUtente.length - 1) + " passi! Passa da Taffo, raccogli i tuoi resti e riprova.");  
                document.getElementById("campo").remove();
                document.getElementById("gioca").classList.add("open");
                document.getElementById("punteggio").classList.add("open");
                document.getElementById("score").innerHTML = (sceltaUtente.length - 1);
            }
        }
        if(sceltaUtente.length == 84){
              alert("Sei ancora vivo? Sei stato fortunato e io non vedo l'ora di raccogliere i tuoi resti. Riprova, se ne hai il coraggio.");
              document.getElementById("campo").remove();
              document.getElementById("gioca").classList.add("open");
              document.getElementById("punteggio").classList.add("open");
              document.getElementById("score").innerHTML = (sceltaUtente.length - 1);
        }        
    }
);

