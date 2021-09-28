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
          <form class="subscribe-newsletter">
            <input type="email" name="email" id="email" placeholder="Email">
            <input class="btn" type="submit" value="Submit">
          </form>
        </div>
        <div class="column">
          <h3 class="column__title mb-1">Stay in touch</h3>
          <p>Join the CYBER GATES community and stay up-to-date with today's security issues and company offers.</p>
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
              <a href="#">info@cybergates.org</a>
            </li>
            <li>
              <span class="icon"><i class="far fa-building"></i></span>
              <span>1220 L street 100/3, 20005 Washington DC, USA</span>
            </li>
          </ul>
          <a href="#" class="btn">Contact Us</a>
        </div>
      </div>
      <hr class="mb-2" />
      <div class="secondary-content mb-2">
        <div class="left">
          <h3>Awards</h3>
          <img src="./assets/index/img9.png" alt="">
        </div>
        <div class="right">
          <h3>Powered by</h3>
          <img src="./assets/index/img9.png" alt="">
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© 2011-2021 CYBER GATES, LLC</p>
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

window.customElements.define('custom-footer', CustomFooter);

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

window.customElements.define('custom-awards', Awards);
