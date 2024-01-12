let colori = ["giallo", "verde", "blu", "rosso", "rosa", "azzurro"];

// 0-based, quindi la conta parte da 0

// per recuperare un colore

let primoColore = colori [0];
console.log(primoColore);

let secondoColore = colori [1];
console.log(secondoColore);

let sestoColore = colori [5];
console.log(sestoColore);

// Voglio conoscere la dimensione, la lunghezza dell'Array

let lunghezza = colori.length;
console.log("Il mio array contiene " + lunghezza + "elementi");

let coloreInesistente = colori[10];
console.log (coloreInesistente);

let ultimoColore = colori[colori.lenght - 1];
console.log("L'ultimo colore è : " + ultimoColore);

////////////////////////////////////
let frutta = ["mela", "pesca", "banana", "kiwi", "arance"];

// push() aggiunge un elemento
frutta.push("ciliegia");
frutta.push("mandarino");

// pop() elimina l'ultimo elemento
frutta.pop();

// sort() ordina l'array alfabeticamente
frutta.sort();

// reverse() ribalta l'ordine
frutta.reverse();

// unire 2 array
let verdura = ["broccoli", "cavolfiori", "cime di rape", "lattuga"];

let fruttaEVerdura = frutta.concat(...verdura);


console.log(fruttaEVerdura);

// unire gli elementi di un array
let mioNome = ["S", "U", "R", "Y", "A"];

console.log(mioNome.join(""));

let mioCognome = "Ghirardi";

// il metodo split elimina il separatore e divide l'array
let cognomeArr = mioCognome.split("");

console.log(cognomeArr);

let frase = "scemo chi legge";
let fraseArr = frase.split(" ");
console.log(fraseArr);

let frase2 = "i topi non avevano nipoti";
let fraseArr2 = frase2.split("").reverse("").join("");
console.log(fraseArr2);

// voglio invertire l'ordine delle lettere del mio nome 
let nomeUser = "Surya";
console.log(nomeUser.split("").reverse().join(""));

// array misti non serve a descrivere entità complesse
let docente = ["Dario", "Mennillo", "Javascript", 12, true];

// per poter leggere un array elemente per elemento uso il CICLO FOR
frutta.forEach(frutto => {
    console.log(frutto);
    
});

let listaFrutta = document.getElementById("listaFrutta");

console.log("Leggo l'array con un for classico");
for (let i = 0; i < frutta.length; i++) {
    console.log(frutta[i]);
    listaFrutta.innerHTML += "<li>" + frutta[i] + "</li>";
}

// qual è la somma delle ore del giorno?
let sommaOre = 0
for(let i = 1; i <= 24; i++){
    sommaOre += i;
    
}

console.log(sommaOre);