import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { Award } from "./Award.js";

// Creates a form based on user data 
// (Parent of Award)
export function UserForm({ userData }) {
  function clickAlert() {
    alert("Form Submitted (well, not really. That's what it would say if it was though)");
  }
  return html`
  <div class="container">
  <form action="">
  ${userData.map(
    (award) => html `<p>${award.award}</p>
      <${Award} name=${award.award} options=${award.candidates} />
    `
  )}
  <input type="submit" value="Submit" onClick="${clickAlert}"/>
  </form>
  </div>
  `;
}