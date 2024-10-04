class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       
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
