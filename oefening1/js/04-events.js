'use strict';
// Zorg dat op de index pagina, telkens je met de muis over het
// <h1> element hovert, de eerste letter van de titel verdwijnt.
// Na een aantal keer is de titel dan volledig verdwenen van het scherm.
// Maak gebruik van het innerHTML attribuut dat de titel als string bevat

// Zorg dat het instellen van de event handler
// gebeurt wanneer het window load event wordt getriggered.
// Maak gebruik van een init functie expressie (const)

const init = function () {
  const h1 = document.getElementById('h1');
  h1.onmouseover = function () {
    this.innerHTML = this.innerHTML.slice(1, this.innerHTML.length);
  };
};

window.onload = init;
