class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const appBar = this.querySelector('.app-bar');
    if (window.scrollY > 5) {
      appBar.classList.add('scrolled');
    } else {
      appBar.classList.remove('scrolled');
    }
  }

  render() {
    this.innerHTML = `
      <header>
      <div class="app-bar">
        <h1 class="logo"><a href="/">RifkyResto.</a></h1>
        <button class="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <nav class="desktop-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li>
              <a href="https://www.linkedin.com/in/rifkyalfarez">About Us</a>
            </li>
          </ul>
        </nav> 
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
    hamburger.addEventListener('click', this.navToggle.bind(this));
  }

  navToggle() {
    const nav = this.querySelector('.mobile-nav');
    const hamburger = this.querySelector('.hamburger');

    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
}

customElements.define('app-bar', AppBar);
