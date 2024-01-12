//ARRAY
let studenti = ["Mario", "Eliana", "Francesca", "Gabriele", "Alessio"]
//console.log(studenti [0]);
//console.log(studenti [1]);
//console.log(studenti [2]);
//console.log(studenti [3]);
//console.log(studenti [4]);

//CicloFor per poter leggere l'array

for(let i = 0; i < studenti.length; i++){
console.log(studenti[i]);
}
console.log("Scorro al contario");

for(let i = studenti.length- 1; i>=0; i--){
    console.log(studenti[i]);
}

//FOREACH
console.log("Uso il ForEach");

studenti.forEach(studente => {
    console.log(studente);
});

//For
let string = "";
for(let i=0; i<10; i++){
    for(let j=0; j<=i; j++){
        string+="*";
    }
    string+="\n";
}
console.log(string);

//For con IF innestato
let numeri = [10, 20, 1, 14, 9, 55, 16, 32, 21];

//voglio capire quanti e quali numeri sono sopra il 20

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 20) {
        console.log(numeri[i] + " questo è più grande di 20");
        }else if(numeri[i] == 20){
        console.log(numeri[i] + " questo è proprio 20");
    }else{
        console.log(numeri[i]);
    }
}
 //stessa cosa con le parole
 let parole = ["Ciao", "Come stai", "Tutto", "bene", "Arrivederci"];
 for (let i = 0; i < parole.length; i++) {
    if (parole[i].length < 7) {
        console.log(parole[i] + " ha meno di 7 caratteri ");
    }else{
        console.log(parole[i]);
    }
    
    
 }







