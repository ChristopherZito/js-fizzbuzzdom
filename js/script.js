// Scrivi un programma che esegua un ciclo da 1 a 100
// e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
// per i multipli di 3,
// per i multipli di 5
// e per i valori che sono sia multipli di 3 che di 5.

// container dove aggiungere i numeri
const numbers = document.getElementById("sub-cont");

// ciclo di creazione blocchi
for (let i = 1; i <= 100; i++ )  {
    
    // calcolo resto 3 e 5
    let resto3 = i % 3;
    let resto5 = i % 5;

    // suddivisione per resto
    if ((resto3 != 0) && (resto5 != 0)){
        console.log("il numero è indivisibile per 3:resto " + resto3 +", e per 5 " +resto5);
        numbers.innerHTML += `<div class="number">${i}</div>`;
    }else if((resto3 === 0) && (resto5 === 0)){
        console.log("il numero è divisibile per 3:resto " + resto3 +", e per 5 " +resto5);
        numbers.innerHTML += `<div class="number both-f-b">fizzbuzz per ${i}</div>`;
    }else if(resto3 === 0){
        console.log("il numero è divisibile per 3:resto " + resto3 );
        numbers.innerHTML += `<div class="number fizz">fizz per ${i}</div>`;
    }else {
        console.log("il numero è divisibile per 5 " +resto5);
        numbers.innerHTML += `<div class="number buzz">buzz per ${i}</div>`;
    }
}