class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       
      `;
  }
}

customElements.define('app-hero', AppHero);
