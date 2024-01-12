// metodi per stringhe

let paragrafo = "Questa è la nostra terza lezionedi Javascript";

console.log(paragrafo)

console.log("Il paragrafo è formato da " + paragrafo.length + "caratteri");

console.log("Primo carattere: " + paragrafo.charAt(0)); //Q
console.log("Ultimo carattere: "+ paragrafo.charAt(paragrafo.length - 1));
//t


// metodi di ricerca
let search1 = paragrafo.indexOf("a");
console.log(search1);

console.log(paragrafo.lastIndexOf("a"));

console.log(paragrafo.indexOf("terza"));

// cerco una parola inesistente
let search2 = paragrafo.indexOf("Surya");
console.log(search2);

if(paragrafo.indexOf("Surya") == -1){
    console.log("mi spiace la parola o il pattern cercato non esiste");
}else{
    console.log("la parola o il pattern cercato non esiste");
}

let mioArray = ["Ciao", "Come", "Stai"];
console.log(mioArray.indexOf("Come"));
console.log(mioArray.indexOf("Surya"));

// Metdoi per il taglio

let paragrafo2 = "A breve faremo un'esercitazione sugli Array";
console.log(paragrafo2.slice(10,30));
console.log(paragrafo2.substring(10,30));
console.log(paragrafo2.split(" "));//taglia ad ogni spazio ed inserisce tutto in un array

// sostituzione 
console.log(paragrafo2.replace("faremo", "svolgeremo"));

// inclusione
console.log(paragrafo2.includes("Array"));

// upperCase e LowerCase
console.log(paragrafo2.toUpperCase());


