import "./style.css";
import createHeader from "./header";
import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

createHeader();
createHomePage();

const content = document.querySelector(".content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.onclick = createHomePage;
menuBtn.onclick = createMenuPage;
contactBtn.onclick = createContactPage;

content.addEventListener("click", function (e) {
  const categoryTitle = e.target.closest(".content > .category > h2");
  if (!categoryTitle) return;

  const categoryContent = categoryTitle.nextSibling.nextSibling;
  console.log(categoryTitle, categoryContent);

  if (categoryContent.style.display == "")
    categoryContent.style.display = "grid";
  else if (categoryContent.style.display == "grid")
    categoryContent.style.display = "";
});

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

// homeBtn.addEventListener("click", createHomePage);
// contactBtn.onclick = createContactPage();
