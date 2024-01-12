let listaLibri = ["Siddartha", "Le Armi Della Persuasione", "LotR", "The Promised Neverland"];
let listaPrezzi = [15, 12, 53, 7];

let elencoLibri = document.getElementById("elencoLibri");




for(let i = 0; i < listaLibri.length; i++) {
    elencoLibri.innerHTML += "<li>" + listaLibri[i] + " - " + listaPrezzi[i] + "$</li>";
}



let totale = 0;

