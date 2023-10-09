/*

<!-- 
<div class="header">
  <h1>Astrochilling</h1>
  <div class="header-links">
    <div class="home">Home</div>
    <div class="Menu">Menu</div>
    <div class="contact">Contact</div>
  </div>
</div>

<div class="main">
  <h2>Placeholder text for something actually important</h2>
</div> 
 */

export default function homePage() {
  // Reset content div
  const content = document.querySelector(".content");
  content.innerHTML = "";

  // Header div
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

  // Main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  const h2 = document.createElement("h2");
  h2.textContent = `Placeholder text for something actually important`;
  mainDiv.appendChild(h2);

  content.appendChild(headerDiv);
  content.appendChild(mainDiv);
}
