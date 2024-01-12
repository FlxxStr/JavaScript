
function Estrazione(){
let numeri = [];
let numDaEstr = document.getElementById(numDaEstr).value; 
 if(numDaEstr <= 90)
for (let i = 0; i < numDaEstr; i++) {
   let numEstr = Math.ceil(Math.random() * 90);
    if (numeri.includes(numEstr)) {
        i--;
         }else{
        numeri.push(numEstr);
    }
console.log(numeri[i]);
}

 
      
    
    let estrazione = document.getElementById("estrazione");
    
    estrazione.innerHTML = "I numeri estratti sono: <br> " + numeri;



}
