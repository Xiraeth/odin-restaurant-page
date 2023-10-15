export default function createHomePage() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const markup = `
  <section class="main">
    <h2>Placeholder for a text and maybe an image of the restaurant</h2>
  </section>`;

  content.insertAdjacentHTML("afterbegin", markup);
}
