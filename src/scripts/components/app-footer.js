class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <div>
                Created with&nbsp;<span style="color: #be185d">❤&nbsp;</span>by&nbsp;
                <a href="https://github.com/rfkyalf">Rifky Alfarez</a>
            </div>
        </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
