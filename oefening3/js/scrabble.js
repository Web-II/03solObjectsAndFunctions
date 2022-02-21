import { berekenPunten } from './berekenScore.js';

const btn = document.getElementById('berekenPunten');
const woord = document.getElementById('woord');

btn.onclick = () => {
  alert(`Het woord  ${woord.value} is ${berekenPunten(woord.value)} punten waard.`);
};
