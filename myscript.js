var chilometriDaPercorrere = parseInt(prompt("Quanti chilometri devi percorrere?"));
console.log(chilometriDaPercorrere);

var eta = parseInt(prompt("Inserisci la tua età"));
console.log(eta);

var bigliettoAlChilometro = 0.21;

var scontoMinorenni = 0.2;

var scontoAnziani = 0.4;

var costoViaggio = bigliettoAlChilometro * chilometriDaPercorrere;

var costoViaggioMinorenni = costoViaggio * scontoMinorenni;

var costoViaggioAnziani = costoViaggio * scontoAnziani;

if(Number.isNaN(chilometriDaPercorrere) || Number.isNaN(eta)){
    console.log("Dati inseriti non validi");
} else if(eta >= 18 && eta <= 65){
    console.log("Il prezzo del biglietto è di " + costoViaggio + " Euro");
} else if(eta < 18){
    console.log("Il prezzo del biglietto è di " + costoViaggioMinorenni.toFixed(2) + " Euro");
} else {
    console.log("Il prezzo del biglietto è di " + costoViaggioAnziani.toFixed(2) + " Euro");
}