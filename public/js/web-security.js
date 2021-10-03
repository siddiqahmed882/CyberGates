import { sops } from './data.js';
import { emptyContainer } from './helperFunctions.js';

document.addEventListener('DOMContentLoaded', (e) => {
  populateSops();
});

/* populating sops */
const populateSops = () => {
  const sopsContainer = document.querySelector('.sops-section .cards');
  emptyContainer(sopsContainer);
  const cardTemplate = document.getElementById('sops-card');
  sops.forEach((sop) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector('h4').textContent = sop.title;
    card.querySelector('p').textContent = sop.info;
    card.querySelector('img').src = `./assets/web-security/${sop.img}`;
    sopsContainer.appendChild(card);
  });
};
