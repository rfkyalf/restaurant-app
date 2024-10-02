class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="nav-section">
            <h1 class="nav-logo">
            <a href="#">RifkyResto.</a>
            </h1>
            <nav>
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

customElements.define('app-bar', AppBar);
