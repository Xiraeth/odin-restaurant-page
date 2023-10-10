export default function createHeader() {
  const markup = `
  <section class="header">
    <h1>Astrochilling</h1>
    <section class="header-links">
      <div class="home header-link activeTab">Home</div>
      <div class="menu header-link">Menu</div>
      <div class="contact header-link">Contact</div>
    </section>
  </section>
  `;
  document.body.insertAdjacentHTML("afterbegin", markup);
}
