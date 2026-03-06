const wint = {
  steen: 'schaar',
  schaar: 'blad',
  blad: 'steen',
};

const kapitaliseer = (woord) =>
  woord.charAt(0).toUpperCase() + woord.substring(1);

const geefResultaat = function (keuzeSpeler, keuzeComputer) {
  if (keuzeSpeler === keuzeComputer) {
    return 'Het resultaat is een gelijkspel!';
  }
  if (wint[keuzeSpeler] === keuzeComputer) {
    return `${kapitaliseer(keuzeSpeler)} wint - jij wint!`;
  }
  return `${kapitaliseer(keuzeComputer)} wint - computer wint!`;
};

const speel = function (event) {
  const keuzeSpeler = event.target.textContent; //of this.textContent
  const keuzeComputer = Object.keys(wint)[Math.floor(Math.random() * 3)];
  const resultaat = geefResultaat(keuzeSpeler, keuzeComputer);
  document.getElementById('keuzeGebruiker').textContent =
    `Jouw keuze: ${keuzeSpeler}`;
  document.getElementById('keuzeComputer').textContent =
    `Computer keuze: ${keuzeComputer}`;
  document.getElementById('resultaat').textContent = resultaat;
};

export const initialiseerBSS = function () {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`btn${i}`).onclick = speel;
  }
};
