import { services as servicesItems } from './data.js';
import { toCamelCase } from './helperFunctions.js';

/* populating services cards */

// helper function
function createIcon(iconClasses) {
  const icon = document.createElement('i');
  iconClasses.forEach((className) => icon.classList.add(className));
  return icon;
}

// main
const servicesContainer = document.querySelector('.services');
const serviceTemplate = document.querySelector('[data-service-template]');
servicesItems.forEach((item) => {
  const card = serviceTemplate.content.firstElementChild.cloneNode(true);
  const title = card.querySelector('.service__content h3 a');
  const details = card.querySelector('.service__content p');
  const img = card.querySelector('.service__img');
  const link = card.querySelector('.service__link');
  // inserting information in the cards
  title.textContent = item.title;
  details.textContent = item.desc;
  img.appendChild(createIcon(item.iconClasses));
  link.href = `./services.html#${toCamelCase(item.title)}`;
  servicesContainer.appendChild(card);
});
