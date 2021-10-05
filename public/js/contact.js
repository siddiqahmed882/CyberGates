import { services as servicesItems, contactDetails as contacts } from './data.js';
import { toCamelCase } from './helperFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  populateSelectOptions();
  populateConactInfo();
});

const populateSelectOptions = () => {
  const select = document.querySelector('#subject');
  servicesItems.push({ title: 'Others' });
  servicesItems.forEach((item) => {
    const option = document.createElement('option');
    option.textContent = item.title;
    option.value = item.title;
    select.appendChild(option);
  });
};

const populateConactInfo = () => {
  const container = document.querySelector('.secondary__contact__details');
  const template = document.querySelector('[data-contact-info]');
  contacts.forEach((contact) => {
    const contactCard = template.content.firstElementChild.cloneNode(true);
    contactCard.querySelector('.country__name').textContent = contact.country;
    contactCard.querySelector('.address address').textContent = contact.address;
    contactCard.querySelector('.email a').textContent = contact.email;
    contactCard.querySelector('.phone a').textContent = contact.phone;
    container.appendChild(contactCard);
  });
};
