export default function createContactPage() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  const markup = `
  <form class="contactForm">
    <h1>Have a question? Send us an email!</h1>

    <label for="fullName">Full Name:</label>
    <input
      type="text"
      id="fullName"
      name="full_name"
      required
      autocomplete="off"
      minlength="3"
      maxlength="30"
    />

    <label for="email">E-mail</label>
    <input
      type="email"
      id="email"
      name="e_mail"
      required
      autocomplete="off"
    />

    <label for="message">Your message below</label>
    <textarea
      id="message"
      name="e_mail"
      required
      autocomplete="off"
      rows="10"
      cols="10"
      maxlength="1000"
    ></textarea>

    <input type="submit" value="Submit Message" />
  </form>
  `;
  content.insertAdjacentHTML("afterbegin", markup);
}
