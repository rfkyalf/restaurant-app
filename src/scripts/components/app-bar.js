class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
      <div class="app-bar">
        <h1 class="logo"><a href="/">RifkyResto.</a></h1>
        <nav class="desktop-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li>
              <a href="https://www.linkedin.com/in/rifkyalfarez">About Us</a>
            </li>
          </ul>
        </nav>
        <div class="hamburger">
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

    const hamburger = this.querySelector('.hamburger');
    hamburger.addEventListener('click', navToggle);
  }
}

function navToggle() {
  const nav = document.querySelector('.mobile-nav');
  const hamburger = document.querySelector('.hamburger');

  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
}

customElements.define('app-bar', AppBar);
