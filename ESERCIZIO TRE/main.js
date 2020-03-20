// 3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// IMPOSTO LE MIE VARIABILI
var numeroUno;

var numeroDue;

var numeroTre;

var numeroQuattro;

var numeroCinque;

var somma;


// CHIEDO ALL'UTENTE CINQUE NUMERI --------------------------------

numeroUno = parseInt(prompt("Inserisci il primo numero"));

numeroDue = parseInt(prompt("Inserisci il secondo numero"));

numeroTre = parseInt(prompt("Inserisci il terzo numero"));

numeroQuattro = parseInt(prompt("Inserisci il quarto numero"));

numeroCinque = parseInt(prompt("Inserisci il quinto numero"));

// console.log(numeroUno , numeroDue, numeroTre , numeroQuattro , numeroCinque)

// console.log(numeroUno + numeroDue + numeroTre + numeroQuattro + numeroCinque)

// ESEGUO LA SOMMA DEI NUMERI--------------------------------------

somma = numeroUno + numeroDue + numeroTre + numeroQuattro + numeroCinque;


// STAMPO IL RISULTATO----------------------------------------------

document.getElementById("somma").innerHTML = "Il risultato dei cinque numeri da lei inseriti è: " + somma;
