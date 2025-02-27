// SNACK 1
// creo i prompt dove l'utente inserirà i numeri
let numero1 = parseFloat (prompt('Inserisci il primo numero'));
let numero2 = parseFloat (prompt('Inserisci il secondo numero'));

if(numero1 < numero2){
    console.log('Il numero piu alto è il secondo: ' + `${numero2}`);
}else if(numero1 > numero2){
    console.log('Il numero piu alto è il primo: ' + `${numero1}`);
}else{
    console.error('i numeri sono uguali')
}


// SNACK 2
let firstString = prompt('Inserisci la prima frase');
let secondString = prompt('Inserisci la seconda frase');

if(firstString.length > secondString.length ){
    console.log(`${firstString}`);
    console.log(`${secondString}`);
    
}else if(firstString.length < secondString.length ){
    console.log(`${secondString}`);
    console.log(`${firstString}`);
}else{
    console.error('le stringhe hanno la stessa lunghezza')
}
