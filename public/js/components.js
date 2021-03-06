/* Navbar Component */
const currPage = document.body.id;

const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/utilities.css">
  <link rel="stylesheet" href="./css/navbar.css">
  <header class="header">
    <nav class="navbar">
      <a href="./index.html" class="logo">
        <img src="./assets/logo.png" alt="Cyber Gates">
      </a>
      <ul class="nav__items">
        <li class="nav__item">
          <a 
            href=${currPage === 'home' ? '#' : 'index.html'}
            class="nav__link"
            data-id="home"
          >Home</a>
        </li>
        <li class="nav__item">
        <a 
          href=${currPage === 'about' ? '#' : 'about.html'}
          class="nav__link"
          data-id="about"
          >About</a>
        </li>
        <li class="nav__item dropdown__container" aria-expanded="false">
          <span>Services <i class="fas fa-chevron-down"></i> </span>
          <ul class="dropdown__menu" aria-hidden="true">
            <li class="nav__item">
              <a 
                href=${currPage === 'services' ? '#' : 'services.html'} 
                class="nav__link"
                data-id="services"
                >Services Overview</a>
            </li>
            <li class="nav__item">
              <a 
                href=${currPage === 'services-for-smes' ? '#' : 'servicesforsmes.html'} 
                class="nav__link"
                data-id="services-for-smes"
                >Web Security & Hosting Plans</a>
            </li>
            <li class="nav__item">
              <a 
                href=${currPage === 'web-security' ? '#' : 'websecurity.html'} 
                class="nav__link"
                data-id = "web-security"
                >Web Security</a>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <a 
            href=${currPage === 'customers' ? '#' : 'customers.html'} 
            class="nav__link"
            data-id='customers'
            >Customers</a>
        </li>
        <li class="nav__item">
          <a 
          href=${currPage === 'contact' ? '#' : 'contact.html'} 
          class="nav__link"
          data-id='contact'
          >Contacts</a>
        </li>
      </ul>
      <button class="hamburger" id="hamburger">
        <span class="inner"></span>
      </button>
    </nav>
  </header>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    // adding active class
    this.shadowRoot.querySelector(`[data-id = ${currPage}]`).classList.add('active');

    const hamburger = this.shadowRoot.getElementById('hamburger');
    const navItems = this.shadowRoot.querySelector('.nav__items');
    const dropdown = this.shadowRoot.querySelector('.dropdown__container');
    const dropdownList = this.shadowRoot.querySelector('.dropdown__menu');

    hamburger.addEventListener('click', () => {
      if (hamburger.classList.contains('menu-active')) {
        hamburger.classList.remove('menu-active');
        navItems.style.animation = 'slideout 200ms ease forwards';
      } else {
        hamburger.classList.add('menu-active');
        navItems.style.animation = 'slidein 200ms ease forwards';
      }
    });

    dropdown.addEventListener('click', () => {
      if (dropdown.getAttribute('aria-expanded') === 'false') {
        dropdown.setAttribute('aria-expanded', true);
        dropdownList.setAttribute('aria-hidden', false);
        dropdown.querySelector('i').style.transform = 'rotate(-180deg)';
        dropdownList.style.display = 'block';
        dropdownList.style.opacity = 1;
        dropdownList.style.transform = 'translateY(0)';
      } else {
        dropdown.setAttribute('aria-expanded', false);
        dropdownList.setAttribute('aria-hidden', true);
        dropdown.querySelector('span > i').style.transform = 'rotate(0deg)';
        dropdownList.style.display = '';
        dropdownList.style.opacity = 0;
        dropdownList.style.transform = 'translateY(-50%)';
      }
    });
  }
}

window.customElements.define('nav-component', Navbar);

/* Hero Component */
const heroTemplate = document.createElement('template');
heroTemplate.innerHTML = `
  <link rel="stylesheet" href="./css/utilities.css">
  <link rel="stylesheet" href="./css/hero.css">
  <style>
    .hero-section{
      background-image: url(${
        (currPage === 'about' && './assets/about/hero.jpg') ||
        (currPage === 'services' && './assets/about/hero.jpg') ||
        (currPage === 'services-for-smes' && './assets/servicesforSEMS/hero.jpg') ||
        (currPage === 'customers' && './assets/customers/hero.jpg') ||
        (currPage === 'contact' && './assets/contact/hero.jpg') ||
        './assets/index/hero.jpg'
      })
    }
  </style>
  <section class="hero-section">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title"><slot name="title" /></h1>
      </div>
    </div>
  </section>
`;

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(heroTemplate.content.cloneNode(true));
  }
}

window.customElements.define('hero-component', Hero);

/* Footer Component */
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/utilities.css">
  <link rel="stylesheet" href="./css/footer.css">
  <footer class="footer">
    <div class="container">
      <div class="primary-content mb-2">
        <div class="column">
          <h3 class="column__title mb-1">Subscribe</h3>
          <p>Receive the latest security stories, trends and insights directly in your inbox each month.</p>
          <form class="subscribe-newsletter" name="subscription" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="subscription" />
            <input type="email" name="email" id="email" placeholder="Email">
            <input class="btn" type="submit" value="Submit">
          </form>
        </div>
        <div class="column">
          <h3 class="column__title mb-1">Stay in touch</h3>
          <p>Join the The Eye Of Cyber community and stay up-to-date with today's security issues and company offers.</p>
          <div class="social-links">
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            </div>
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-google"></i></a>
            </div>
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-vimeo-v"></i></a>
            </div>
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="social-icon">
              <a href="#" class="social-link"><i class="fab fa-skype"></i></a>
            </div>
          </div>
        </div>
        <div class="column">
          <h3 class="column__title mb-1">Contact Us</h3>
          <ul class="contact__details mb-1">
            <li>
              <span class="icon"><i class="fas fa-phone-alt"></i></span>
              <a href="#">999-999-9999</a>
            </li>
            <li>
              <span class="icon"><i class="far fa-envelope"></i></span>
              <a href="#">info@theeyeofcyber.org</a>
            </li>
            <li>
              <span class="icon"><i class="far fa-building"></i></span>
              <span>1220 L street 100/3, 20005 Washington DC, USA</span>
            </li>
          </ul>
          <a href="./contact.html" class="btn">Contact Us</a>
        </div>
      </div>
      <hr class="mb-2" />
      <div class="secondary-content mb-2">
        <div class="left">
          <h3>Awards</h3>
          <img src="./assets/index/img10.png" alt="">
        </div>
        <div class="right">
          <h3>Powered by</h3>
          <img src="./assets/index/img9.png" alt="">
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>?? 2011-2021 The Eye Of Cyber, LLC</p>
    </div>
  </footer>
`;

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define('footer-component', CustomFooter);

/*  Awards Component */

const awardsTemplate = document.createElement('template');
awardsTemplate.innerHTML = `
  <link rel="stylesheet" href="./css/utilities.css">
  <link rel="stylesheet" href="./css/awards.css">
  <section class="awards-section">
    <div class="container">
      <div class="awards__content">
        <h2 class="awards__title mb-3">Winning Awards</h2>
        <div class="awards">
          <div class="award">
            <a href="#" class="award-item">
              <img class="award-item__img" src="./assets/index/img3.png" alt="">
              <span class="award-item__desc">Best Information/Cyber Security Solution</span>
            </a>
          </div>
          <div class="award">
            <a href="#" class="award-item">
              <img class="award-item__img" src="./assets/index/img4.png" alt="">
              <span class="award-item__desc">Best Startup in Mobile Technologies</span>
            </a>
          </div>
          <div class="award">
            <a href="#" class="award-item">
              <img class="award-item__img" src="./assets/index/img5.png" alt="">
              <span class="award-item__desc">Best Mobile Solution</span>
            </a>
          </div>
          <div class="award">
            <a href="#" class="award-item">
              <img class="award-item__img" src="./assets/index/img6.png" alt="">
              <span class="award-item__desc">Foreign Telecom Service</span>
            </a>
          </div>
          <div class="award">
            <a href="#" class="award-item">
              <img class="award-item__img" src="./assets/index/img7.png" alt="">
              <span class="award-item__desc">International Star for Leadership in Quality</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

class Awards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(awardsTemplate.content.cloneNode(true));
  }
}

window.customElements.define('awards-component', Awards);

/* blockquote with image */
const quotes = [
  'Good security increases shareholder value.',
  "Corporate trust and reputation are every company's most valuable assets.",
  "It is much more harder to restore your company's reputation than your website files when it is hacked or defaced. Once lost, trust is very hard to get back.",
  'I recommend employees to begin taking Security seriously. Otherwise you may be fired for causing some security problems in an organization.',
  'The main target of security is not only creating rules but also following them.',
];

const blockquoteWithImage = document.createElement('template');
blockquoteWithImage.innerHTML = `
  <link rel="stylesheet" href="./css/utilities.css">
  <style>
    .quotes {
      padding: var(--section-padding);
      background: #1e1e1e url(./assets/misc/bg1.jpg) no-repeat center center/ cover;
      background-blend-mode: overlay;
      color: #fff;
    }
    
    .quotes img {
      border-radius: 50%;
      margin: 0 auto 1rem;
      box-shadow: 0 0 0 2px #fff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
    }
    
    .quotes .person-info p {
      text-align: center;
      margin-bottom: 0.75rem;
    }
    
    .quotes .name {
      font-size: 2rem;
      color: var(--clr-primary-700);
    }
    
    .quotes .designation {
      font-size: 1.25rem;
    }
    
    blockquote {
      width: 100%;
      padding: 1.5rem;
      font-size: 1.25rem;
      text-align: center;
      background: rgba(0, 0, 0, 0.2);
      position: relative;
    }
    
    blockquote::before {
      content: open-quote;
      position: absolute;
      top: -0.25em;
      left: 0;
      font-size: 3em;
    }
    
    blockquote::after {
      content: close-quote;
      position: absolute;
      bottom: -0.25em;
      right: 0.5em;
      font-size: 3em;
    }
  </style>

  <section class="quotes">
    <div class="container">
      <img src="./assets/misc/img1.jpg" alt="">
      <div class="person-info">
        <p class="name">Samvel Gevorgyan</p>
        <p class="designation">CEO, The Eye Of Cyber</p>
      </div>
      <blockquote>
        ${quotes[Math.floor(Math.random() * quotes.length)]}
      </blockquote>
    </div>
  </section>
`;

class BlockQuote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(blockquoteWithImage.content.cloneNode(true));
  }
}

window.customElements.define('blockquote-with-image', BlockQuote);

/* CTA Component */

const ctaTemplate = document.createElement('template');
ctaTemplate.innerHTML = `
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/utilities.css">
  <link rel="stylesheet" href="./css/cta-component.css">
  <section class="cta-section">
    <div class="container">
      <div class="cta__header mb-2">
        <h4 class="cta__title"><slot name="title" /></h4>
        <p class="cta__lead"><slot name="lead" /></p>
      </div>
      <div class="cta__content">
        <div class="cta">
          <div class="icon"><i class="fas fa-phone-alt fa-4x"></i></div>
          <h4>Call Us</h4>
          <a href="#">+1 (240) 425-7978</a>
        </div>
        <div class="cta">
          <div class="icon"><i class="fab fa-telegram-plane fa-4x"></i></div>
          <h4>Email Us</h4>
          <a href="#">support@theeyeofcyber.org</a>
        </div>
      </div>
    </div>
  </section>
`;

class Cta extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(ctaTemplate.content.cloneNode(true));
  }
}

window.customElements.define('cta-component', Cta);
