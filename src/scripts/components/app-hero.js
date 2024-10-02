class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="hero-section">
            <img src="/images/heros/hero-image_4.jpg" alt="Hero Section" class="hero-img"/>
            <div class="hero-text">
                <h1>Temukan Surga Kuliner di Kota Anda</h1>
                <p>
                    Nikmati petualangan kuliner yang tak terlupakan. Temukan restoran
                    tersembunyi dengan cita rasa autentik yang akan membuat Anda
                    ketagihan.
                </p>
                <a class="hero-btn"> Mulai </a>
            </div>
        </section>
      `;
  }
}

customElements.define('app-hero', AppHero);
