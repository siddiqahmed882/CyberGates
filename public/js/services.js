import { services as servicesItems } from './data.js';
import { toCamelCase } from './helperFunctions.js';

/* populating services */
// helper function
const createIcon = (iconClasses) => {
  const icon = document.createElement('i');
  iconClasses.forEach((className) => icon.classList.add(className));
  return icon;
};
// main
const servicesContainer = document.querySelector('.services');
while (servicesContainer.firstChild) {
  servicesContainer.removeChild(servicesContainer.firstChild);
}
const serviceTemplate = document.querySelector('[data-service-template]');
servicesItems.forEach((item) => {
  const card = serviceTemplate.content.firstElementChild.cloneNode(true);
  const title = card.querySelector('.service__title a');
  const details = card.querySelector('.service__desc');
  const img = card.querySelector('.service__img');
  // inserting information in the cards
  card.id = toCamelCase(item.title);
  title.textContent = item.title;
  details.textContent = item.desc;
  img.appendChild(createIcon(item.iconClasses));
  servicesContainer.appendChild(card);
});
