// Chiedi a utente quanti km vuol percorrere

let km = parseInt(prompt("Quanti km vuoi percorrere?"));

console.log(km)
// Chiedi a utente la sua età 
let age = parseInt(prompt("Quanti anni hai?"))

console.log(age)
// Calcola prezzo totale del viaggio
let initialprice = (0.21 * (km));

console.log(initialprice);
// Se età < 18 applica sconto 20%
let finalprice = initialprice;
if( age < 18){
    finalprice = initialprice * 0.8;
}

// Se età >65 applica sconto 40%
else if ( age > 65){
    finalprice = initialprice * 0.6;
}
else {
    finalprice = initialprice;
}

console.log(finalprice);
// Output finale del prezzo


document.getElementById("ticket").innerHTML = "Il costo del tuo biglietto sarà " + (finalprice) + "€";