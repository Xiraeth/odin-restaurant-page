export default function createHomePage() {
  // Reset content div
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const markup = `
  <section class="main">
    <h2>Placeholder text for something actually important</h2>
  </section>`;

  content.insertAdjacentHTML("afterbegin", markup);
}
