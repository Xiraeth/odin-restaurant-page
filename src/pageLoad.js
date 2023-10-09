import "./style.css";
import bg from "./bg.jpg";

/*
<div class="main">
  <img src="" alt="" />
  <h2>The best ice cream in the world</h2>
</div> 
 */

export default function initPage(content) {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  const h1 = document.createElement("h1");
  h1.textContent = "The Void's Appetite";
  headerDiv.appendChild(h1);

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  const mainImg = document.createElement("img");
  mainImg.src = bg;
  mainImg.alt = "Cozy lofi restaurant";
  mainDiv.appendChild(mainImg);
  const h2 = document.createElement("h2");
  h2.textContent = `The best ice cream in the world`;
  mainDiv.appendChild(h2);

  content.appendChild(headerDiv);
  content.appendChild(mainDiv);
}
