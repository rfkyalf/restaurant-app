class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="nav-section">
            <h1 class="nav-logo"><a href="#">RifkyResto.</a></h1>
            <div class="mobile-nav">
            <h1><a href="#">RifkyResto.</a></h1>
              <div class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <nav class="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/rifkyalfarez">About Us</a></li>
                </ul>
            </nav>
        </section>
      `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
  });
});

customElements.define('app-bar', AppBar);
