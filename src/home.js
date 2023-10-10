/*
<div class="main">
  <h2>Placeholder text for something actually important</h2>
</div> 
 */
export default function homePage() {
  // Reset content div
  const content = document.querySelector(".content");
  content.innerHTML = "";

  // Main div
  const mainDiv = document.createElement("section");
  mainDiv.classList.add("main");
  const h2 = document.createElement("h2");
  h2.textContent = `Placeholder text for something actually important`;
  mainDiv.appendChild(h2);

  // content.appendChild(createHeader());
  content.appendChild(mainDiv);
}
