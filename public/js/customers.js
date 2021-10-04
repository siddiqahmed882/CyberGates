import { industries, partners } from './data.js';
import { emptyContainer } from './helperFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
  populateCustomers();
  populatePartners();
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
  li.setAttribute('data-id', 0);
  li.textContent = 'all';
  container.appendChild(li);
  industries.forEach((industry) => {
    const li = createIndustryNameLi(industry);
    container.appendChild(li);
  });
};

const addFilterInteraction = (container) => {
  container.addEventListener('click', (e) => {
    const curr = e.target.closest('li.industry');
    if (!curr) return;
    container.querySelector('.active')?.classList.remove('active');
    curr.classList.add('active');
    populateCustomerCards();
  });
};

const populateCustomerCards = () => {
  const industryNamesContainer = document.querySelector('.industry__names');
  const customersContainer = document.querySelector('.customers');
  emptyContainer(customersContainer);
  const current = industryNamesContainer.querySelector('.active')?.dataset.id || 0;
  let images, filteredArr;
  if (current == 0) {
    images = industries.map((industry) => industry.imgs).flat();
  } else {
    [filteredArr] = industries.filter((industry) => industry.id == current);
    images = filteredArr.imgs;
  }

  // making cards for each image and append
  images.forEach((img) => {
    const li = document.createElement('li');
    li.classList.add('customer');
    const a = document.createElement('a');
    a.href = img.link;
    const image = document.createElement('img');
    image.src = `./assets/customers/${img.src}`;
    a.appendChild(image);
    li.appendChild(a);
    customersContainer.appendChild(li);
  });
};

const populateCustomers = () => {
  const industryNamesContainer = document.querySelector('.industry__names');
  const customersContainer = document.querySelector('.customers');
  emptyContainer(industryNamesContainer);
  emptyContainer(customersContainer);
  populateIndustryNames(industryNamesContainer);
  populateCustomerCards();
  addFilterInteraction(industryNamesContainer);
};

const populatePartners = () => {
  const partnersContainer = document.querySelector('.partners');
  partners.forEach((partner) => {
    const li = document.createElement('li');
    li.classList.add('partner');
    const a = document.createElement('a');
    a.href = partner.link;
    const img = document.createElement('img');
    img.src = `./assets/customers/${partner.src}`;
    a.appendChild(img);
    li.appendChild(a);
    partnersContainer.appendChild(li);
  });
};
