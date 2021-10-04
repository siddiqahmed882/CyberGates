import { industries } from './data.js';
import { emptyContainer } from './helperFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  populateCustomers();
});

const createIndustryNameLi = (industry) => {
  const li = document.createElement('li');
  li.classList.add('industry');
  li.setAttribute('data-id', industry.id);
  li.textContent = industry.name;
  return li;
};

const populateIndustryNames = (container) => {
  // default li
  const li = document.createElement('li');
  li.classList.add('industry');
  li.setAttribute('data-id', 'all');
  li.textContent = 'all';
  container.appendChild(li);
  industries.forEach((industry) => {
    const li = createIndustryNameLi(industry);
    container.appendChild(li);
  });
};

const populateCustomerCards = (customersContainer, industryNamesContainer) => {
  const current = industryNamesContainer.querySelector('.active').dataset.id;
};

const populateCustomers = () => {
  const industryNamesContainer = document.querySelector('.industry__names');
  const customersContainer = document.querySelector('.customers');
  emptyContainer(industryNamesContainer);
  emptyContainer(customersContainer);

  populateIndustryNames(industryNamesContainer);
  populateCustomerCards(customersContainer, industryNamesContainer);
};
