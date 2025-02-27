let numero1 = Number (prompt('Inserisci il primo numero'));
let numero2 = Number (prompt('Inserisci il secondo numero'));


if(numero1 < numero2){
    console.log('Il numero piu alto è il secondo: ' + `${numero2}`);
}else if(numero1 > numero2){
    console.log('Il numero piu alto è il primo: ' + `${numero1}`);
}else{
    console.error('i numeri sono uguali')
}
