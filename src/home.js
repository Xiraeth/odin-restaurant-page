export default function createHomePage() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const markup = `
  <section class="main">
    <h2>My artistic web design skills suck.</h2>
  </section>`;

  content.insertAdjacentHTML("afterbegin", markup);
}
