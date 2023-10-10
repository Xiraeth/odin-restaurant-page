export default function createMenuPage() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const markup = `
  <section class="beverages category">
    <h2>Beverages</h2>
    <div class="beveragesCategoryContent">
      <div class="coffee">
        <div>Coffee</div>
        <div>Come enjoy our cheap and delicious black coffee.</div>
      </div>
      <div class="tea">
        <div>Tea</div>
        <div>
          Green tea, ice tea, honey tea and anything else you might ask for.
        </div>
      </div>
      <div class="cola">
        <div>Cola</div>
        <div>Best drink ever. Not for your health though.</div>
      </div>
      <div class="juice">
        <div>Juice</div>
        <div>All types of juice. All at a great price.</div>
      </div>
    </div>
  </section>

  <section class="mainDishes category">
    <h2>Main Dishes</h2>
    <div class="mainDishesCategoryContent">
      <div class="chickenRice">
        <div>Chicken with Rice</div>
        <div>Nutritious, protein packed and filling.</div>
      </div>
      <div class="spaghetti">
        <div>Spaghetti</div>
        <div>Amazing spaghetti, with tons of ways to cook it.</div>
      </div>
      <div class="fish">
        <div>Fish</div>
        <div>
          A big variety of fish, at an afforadble price. Good for your
          health
          <em>and</em> your wallet.
        </div>
      </div>
      <div class="filled">
        <div>Filled</div>
        <div>
          Traditional greek good: pepperbels
          <strong><em>filled</em></strong> with rice and minced meat.
        </div>
      </div>
    </div>
  </section>

  <section class="desserts category">
    <h2>Desserts</h2>
    <div class="dessertsCategoryContent">
      <div class="profiterol">
        <div>Profiterol</div>
        <div>Best dessert ever.</div>
      </div>
      <div class="chocolateCake">
        <div>Chocolate Cake</div>
        <div>A classic. You can never go wrong with a simple cake.</div>
      </div>
      <div class="tiramisu">
        <div>Tiramisu</div>
        <div>No idea what this is. It has a funny name though.</div>
      </div>
      <div class="cheeseCake">
        <div>Cheesecake</div>
        <div>Cake <i>and</i> cheese? Man oh man.</div>
      </div>
    </div>
  </section>
  `;
  content.insertAdjacentHTML("beforeend", markup);
}
