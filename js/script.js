"use strict"; 

function addToCart(product){ // product er den variable som vi putter i. Man kalder på productet via addToCart fra HTML onclick funktionen
    
    //vi henter den nuværende værdi fra inputfeltet med specifik id. Vi sætter .value på da vores quantity har et input felt. ParseInt gør inputtet til et tal.
    const quantity = parseInt(document.getElementById(product).value); 

    // Vi øger quantity med 1 / lægger 1 til den eksisterende værdi
    document.getElementById(product).value = quantity + 1;

}

function removeFromCart(product) {
    
    //vi henter den nuværende værdi fra inputfeltet med specifik id. Vi sætter .value på da vores quantity har et input felt. ParseInt gør inputtet til et tal.
    const quantity = parseInt(document.getElementById(product).value); 

    // Vi trækker noget fra vores kurv. Kan kun gøres hvis der er noget i kurven (over nul)
    if(quantity > 0) {
    document.getElementById(product).value = quantity - 1;
    }

}

function resetCart(product) {

    // sætter quantity til 0
    document.getElementById(product).value = 0;

}

//funktion som opdatere prisen for den enkelte vare (vare = kaffe-product)
function updateTotalPrice(product) {

    // hent mængden (quantity) og pris-inputfeltet for den specifikke vare
    const quantity = parseInt(document.getElementById(product).value); 

    const price = parseInt(document.getElementById(product + "-price").value);

    //beregner totalprisen for denne specifikke vare
    const total = quantity * price;

    document.getElementById(product +"-total").value = total;

}



