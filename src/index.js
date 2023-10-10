import "./style.css";
import createHeader from "./header";
import createHomePage from "./home";
import createMenuPage from "./menu";

createHeader();
createHomePage();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.onclick = createHomePage;
menuBtn.onclick = createMenuPage;
// homeBtn.addEventListener("click", createHomePage);
// contactBtn.onclick = createContactPage();
