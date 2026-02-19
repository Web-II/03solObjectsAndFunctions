'use strict';

const keuzeGebruiker = prompt(
  'Kies je blad, steen of schaar?',
  'steen',
).toLowerCase();

let keuzeComputer = Math.random();
keuzeComputer =
  keuzeComputer < 1 / 3 ? 'blad' : keuzeComputer < 2 / 3 ? 'steen' : 'schaar';

console.log('keuze computer:', keuzeComputer);
console.log(geefResultaat(keuzeGebruiker, keuzeComputer));

function geefResultaat(keuze1, keuze2) {
  if (keuze1 === keuze2) {
    return 'Het resultaat is een gelijkspel!';
  }
  const wint = {
    steen: 'schaar',
    schaar: 'blad',
    blad: 'steen',
  };

  // Check wie wint
  if (wint[keuze1] === keuze2) {
    return `${keuze1.charAt(0).toUpperCase() + keuze1.slice(1)} wint - jij wint!`;
  } else {
    return `${keuze2.charAt(0).toUpperCase() + keuze2.slice(1)} wint - computer wint!`;
  }
}
