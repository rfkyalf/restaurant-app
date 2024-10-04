class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
      <div class="app-bar">
        <h1 class="logo">RifkyResto.</h1>
        <nav class="desktop-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li>
              <a href="https://www.linkedin.com/in/rifkyalfarez">About Us</a>
            </li>
          </ul>
        </nav>
        <div class="hamburger" onclick="navToggle()">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <nav class="mobile-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Favorite</a></li>
          <li>
            <a href="https://www.linkedin.com/in/rifkyalfarez">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
      `;
  }
}

function navToggle() {
  const nav = document.querySelector('.mobile-nav');
  const hamburger = document.querySelector('.hamburger');

  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
}

customElements.define('app-bar', AppBar);
