class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <img src="/images/heros/hero-image_4.jpg" alt="Hero Img" />
      <div class="hero-content">
        <h1>Temukan Restoran Terbaik di Kota Anda</h1>
        <p>
          Jelajahi pilihan restoran terbaik, mulai dari kafe nyaman hingga
          pengalaman makan mewah. Baca ulasan autentik dan temukan tempat
          makan sempurna untuk setiap momen.
        </p>
        <a href="#" class="skip-content-btn">Mulai Jelajahi</a>
      </div>
    </section>
      `;
  }
}

customElements.define('app-hero', AppHero);
