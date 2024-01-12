//Creare 100 numeri casuali, stamparli e verificare quali sono minori di 20 e quanti

let numCasuali = [];

//utilizzo il Math.random() per generare numeri casuali
//Math.ceil() arrotonda all'intero superiore
//Math.floor() arrotonda all'intero inferiore

console.log(Math.ceil(Math.random() * 100));
let contatoreDopp = 0

for (let i = 0; i < 100; i++) {
    let numCasuale = Math.ceil(Math.random() * 100);
    if (numCasuali.includes(numCasuale)) {
        contatoreDopp++;
        i--;
    }
    numCasuali.push(numCasuale);

    
}

console.log(numCasuali);

//stampo i singoli numeri nel div demo
let demo = document.getElementById("demo");
let numMinVent = 0;
for (let i = 0; i < numCasuali.length; i++) {
    if (numCasuali[i]<20) {
        demo.innerHTML += "<p>"+ numCasuali[i] + " - questo è minore di 20</p>"
       numMinVent++
    }else{
    demo.innerHTML += "<p>" + numCasuali[i] + "</p>"
    
    }
    
    }
    
demo.innerHTML += "I numeri minori di 20 sono " + numMinVent;
demo.innerHTML += " <br> I doppioni trovati sono " + contatoreDopp;