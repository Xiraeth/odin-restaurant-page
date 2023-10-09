import "./style.css";
import homePage from "./home";
import menuPage from "./menu";

const content = document.querySelector(".content");
homePage();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");
const headerLinksDiv = document.querySelector(".header-links");
const headerLinks = document.querySelectorAll(".header-links div");

homeBtn.addEventListener("click", homePage);

headerLinksDiv.addEventListener("click", (e) => {
  const target = e.target.closest(".header-link");
  if (!target) return;

  headerLinks.forEach((link) => link.classList.remove("activeTab"));
  target.classList.toggle("activeTab");
});
