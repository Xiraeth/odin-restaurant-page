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

  const headerLinksDiv = document.querySelector(".header-links");
  headerLinksDiv.addEventListener("click", (e) => {
    const target = e.target.closest(".header-link");
    if (!target) return;

    const headerLinks = document.querySelectorAll(".header-links div");
    headerLinks.forEach((link) => {
      if (link.classList.contains("activeTab"))
        link.classList.remove("activeTab");
    });
    target.classList.add("activeTab");
  });
}
