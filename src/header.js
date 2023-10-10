/*
<div class="header">
  <h1>Astrochilling</h1>
  <div class="header-links">
    <div class="home">Home</div>
    <div class="Menu">Menu</div>
    <div class="contact">Contact</div>
  </div>
</div>
*/

export default function createHeader() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Astrochilling";
  headerDiv.appendChild(h1);

  // Header links
  const headerLinksDiv = document.createElement("div");
  headerLinksDiv.classList.add("header-links");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  homeDiv.classList.add("header-link");
  homeDiv.classList.add("activeTab");
  homeDiv.textContent = "Home";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  menuDiv.classList.add("header-link");
  menuDiv.textContent = "Menu";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  contactDiv.classList.add("header-link");
  contactDiv.textContent = "Contact";

  headerLinksDiv.appendChild(homeDiv);
  headerLinksDiv.appendChild(menuDiv);
  headerLinksDiv.appendChild(contactDiv);

  headerDiv.appendChild(headerLinksDiv);

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

  document.body.insertAdjacentElement("afterbegin", headerDiv);
}
