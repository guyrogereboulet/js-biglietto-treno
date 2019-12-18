// 1 Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

var percorrenza = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));
var eta = parseInt(prompt("Quanti anni hai ?"));
var prezzoAlKilometro = 0.21;
var prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
console.log(prezzoBigliettoSenzaSconto);

// 2 Il prezzo del biglietto è definito in base ai km (0.21 € al km),
// ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

if (eta <= 18) {
 console.log((prezzoBigliettoSenzaSconto / 100) * 80);
} else if (eta >= 65) {
 console.log((prezzoBigliettoSenzaSconto / 100) * 60);
} else {
console.log(prezzoBigliettoSenzaSconto);
}
