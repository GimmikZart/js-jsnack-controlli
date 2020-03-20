// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// IMPOSTO LE MIE VARIABILI

var parolaUno;
var parolaDue;

// ------------------------------------------------------------

// CHIEDO ALL'UTENTE LE DUE PAROLE

parolaUno = prompt("Scrivi una parola");

parolaDue = prompt("Scrivi un'altra parola");

// console.log(parolaUno , parolaDue);

// --------------------------------------------------------------

// IMPOSTO LE CASISTICHE

if (parolaUno.length < parolaDue.length) {
  msg = parolaUno + " è una parola più corta di " + parolaDue;
} else {
  msg = parolaDue + " è una parola più corta di " + parolaUno;
}

// console.log(msg);

// ----------------------------------------------------------------

// STAMPO IL RISULTATO

document.getElementById("parole").innerHTML = msg;
