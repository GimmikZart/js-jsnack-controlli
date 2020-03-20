// 1 -
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var primoNumero;
var secondoNumero;
var somma;
var msg;

primoNumero = parseInt(prompt("Scrivi un numero"));

secondoNumero = parseInt(prompt("Scrivi un altro numero"));

// console.log(primoNumero , secondoNumero);

if (primoNumero > secondoNumero) {
  msg = (primoNumero);
} else if ( primoNumero < secondoNumero) {
  msg = (secondoNumero);
}


document.getElementById("numero").innerHTML =  msg;
